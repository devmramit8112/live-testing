import React, { useEffect, useState } from 'react'
import InstructionForm from '../comp/InstructionForm'
import { ButtonBackandSave, ButtonFinal } from '../common/Operationradionbutton'
import { callApi } from 'src/views/CommonModels/CallApi'
import { Style } from '@material-ui/icons'
import { toast } from 'react-toastify'
import axios from 'axios'
import ImgModalPopupF2 from '../ImgModalPopup/ImgModalPopupF2'
const AdditionalInjury = ({ AdditionalInjurydetail, MaterialCollecteddetail, trn, imgid1, imgid10 }) => {
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const [isDisable, setIsDisable] = useState(false)
  const [isCheck, setIsCheck] = useState(false)
  const [isdesable, setdesable] = useState(true);
  const [handleremarksadd, setremarks] = useState({
    remarks1: '',
    remarks10: ''
  });
  const [imageSrc1, setImage1Src] = useState({
    image: '',
    id: '',
    remarks: ''
  });
  const [imageSrc10, setImage10Src] = useState({
    image: '',
    id: '',
    remarks: ''
  });

  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apipdf = `${apiPrefix}/user/pdfgenrator/form2/${trn}`
  const apigetbalnkimg1 = `${apiPrefix}/user/form2/get_additional_injury_marked/${trn}/${imgid1}`
  const apigetbalnkimg10 = `${apiPrefix}/user/form2/get_additional_injury_marked/${trn}/${imgid10}`
  const apidltimg = `${apiPrefix}/user/form2/delete_additional_injury/${trn}/`
  const handleF3_frstClick = () => {
    setIsDisable(true)
  }

  useEffect(() => {
    callApi(apigetbalnkimg1)
      .then((response) => {
        setImage1Src(response);
        if (response.remarks === null) {
          handleremarksadd.remarks1 = ''
        } else {
          handleremarksadd.remarks1 = response.remarks
        }

        console.log(typeof (response.remarks));
      }).catch((error) => {
        console.error('API request failed:', error)
      })
    callApi(apigetbalnkimg10)
      .then((response) => {
        setImage10Src(response);
        if (response.remarks === null) {
          handleremarksadd.remarks10 = ''
        } else {
          handleremarksadd.remarks10 = response.remarks
        }
        console.log(typeof (response.remarks));
      }).catch((error) => {
        console.error('API request failed:', error)
      })
  }, [])

  const [imgId, setimgid] = useState('');
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setdesable(true)
  }

  const handlechange = (e) => {
    const { name, value } = e.target
    setremarks({ ...handleremarksadd, [name]: value })
  }


  const handlecheckchange = () => {

    setIsCheck(!isCheck)
  }



  // const handleF3_prntClick = async () => {
  //   const response = await fetch(apipdf, {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${token}`,

  //     },
  //     responseType: 'blob',
  //   })
  //   if (!response.ok) {
  //     throw new Error(response.status)
  //   } else {
  //     const fileBlob = new Blob([response.data]);
  //     console.log(fileBlob)
  //     console.log(response.data)
  //     const pdfUrl = window.URL.createObjectURL(fileBlob);
  //     const a = document.createElement('a');
  //     a.href = pdfUrl;
  //     a.download = 'your-pdf-filename.pdf'; // Set the desired filename for the downloaded 
  //     a.style.display = 'none';
  //     document.body.appendChild(a);
  //     a.click();
  //     window.URL.revokeObjectURL(pdfUrl);
  //   }
  // }
  const handleF3_prntClick = async () => {
    try {
      // const apipdfgentrn = `${apiPrefix}/user/pdfgenrator/rukka/${trn}`; // pdf generator api 
      alert("PDF REPORT", trn)
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(apipdf, { headers, responseType: 'blob' });
      if (response.status === 200) {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      } else {
        console.error('API Error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };




  const handleF3_frstBackClick = () => {
    AdditionalInjurydetail(false)
    MaterialCollecteddetail(true)
  }

  const handleimgclick = async (id) => {
    setimgid(id)

    openModal()
  }
  const handleIdentDeleteClick = async (rowid) => {
    try {
      const response = await fetch(
        `${apidltimg}${rowid}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )

      try {
        const responseText = await response.text()
        let responseData
        try {
          responseData = JSON.parse(responseText)
        } catch (error) {
          console.error('Error parsing response.')
        }

        if (response.status === 200) {

          callApi(apigetbalnkimg1)
            .then((response) => {
              setImage1Src(response);
              if (response.remarks === null) {
                handleremarksadd.remarks1 = ''
              } else {
                handleremarksadd.remarks1 = response.remarks
              }

              console.log(typeof (response.remarks));
            }).catch((error) => {
              console.error('API request failed:', error)
            })
          callApi(apigetbalnkimg10)
            .then((response) => {
              setImage10Src(response);
              if (response.remarks === null) {
                handleremarksadd.remarks10 = ''
              } else {
                handleremarksadd.remarks10 = response.remarks
              }
              console.log(typeof (response.remarks));
            }).catch((error) => {
              console.error('API request failed:', error)
            })

        } else {
          toast.error('Failed To Reset.', {
            position: toast.POSITION.TOP_RIGHT,
          })
        }
      } catch (error) {
        toast.error('Error processing response.', {
          position: toast.POSITION.TOP_RIGHT,
        })

      }
    } catch (error) {
      toast.error('Error submitting the form.', {
        position: toast.POSITION.TOP_RIGHT,
      })
    }

  }



  return (
    <div className="Container">
      <div className="card mb-2 mt-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Additional Comment (If Any)</h4>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <h6>Click on Image to mark Injury</h6>
            <div className="row mb-3">
              <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Injury(ies) </th>
                      <th>Figure </th>
                      <td>Action</td>
                    </tr>
                  </thead>
                  <tbody>

                    <tr >
                      <td>
                        <textarea name="remarks1" type="text" class="form-control" disabled onChange={handlechange} value={handleremarksadd.remarks1}></textarea>
                      </td>
                      <td><img src={`data:image/png;base64,${imageSrc1.image}`} onClick={() => handleimgclick(imageSrc1.id)}></img></td>
                      <td>
                        {handleremarksadd.remarks1 === '' ? null :
                          <button type="submit" className="btn btn-danger m-2" onClick={() => handleIdentDeleteClick(imageSrc1.id)}>
                            Deleted
                          </button>}</td>
                    </tr>
                    <tr >
                      <td>
                        <textarea name="remarks10" type="text" class="form-control" disabled onChange={handlechange} value={handleremarksadd.remarks10}></textarea>
                      </td>
                      <td><img src={`data:image/png;base64,${imageSrc10.image}`} onClick={() => handleimgclick(imageSrc10.id)}></img></td>
                      <td>
                        {handleremarksadd.remarks10 === '' ? null :
                          <button type="submit" className="btn btn-danger m-2" onClick={() => handleIdentDeleteClick(imageSrc10.id)}>
                            Deleted
                          </button>}</td>
                    </tr>
                  </tbody>

                </table>
              </div>
            </div>
            <ButtonFinal
              backButton={handleF3_frstBackClick}
              savebutton={handleF3_frstClick}
              printbtn={handleF3_prntClick}
              isDisable={isDisable}
              isCheck={isCheck}
              handlecheckchange={handlecheckchange}
            />
            <div className="row mb-3 ">
              <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-3 ">

              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 ">

              </div>
            </div>
            <InstructionForm></InstructionForm>
          </div>
        </div>
      </div>
      <ImgModalPopupF2  closeModal={closeModal} showModal={showModal} trn={trn} imgid={imgId} handlechange={handlechange} isdesable={setdesable} drw={isdesable} handleremarksadd={handleremarksadd} imageSrc1={setImage1Src} imageSrc10={setImage10Src} />
    </div>
  )
}

export default AdditionalInjury
