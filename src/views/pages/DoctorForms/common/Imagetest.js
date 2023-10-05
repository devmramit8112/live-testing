import axios from 'axios';
import React, { useRef, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { callApi } from 'src/views/CommonModels/CallApi';
const Imagetest = ({ trn,imgid }) => {
  const canvasRef = useRef(null);
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const [imageSrc, setImageSrc] = useState({
    image:'',
    id:''
  });
  const [numberList, setNumberList] = useState([]);
  const [unfreezhide, setunfreezhide] = useState(false);
  const [clickPosition, setClickPosition] = useState(null);
  const [injuries, setInjuries] = useState([]);
  const [markedinjuries, setmarkedInjuries] = useState([]);
  const [selectedinjury, setselectedinjury] = useState([]);
  const [srno, setsrno] = useState('');
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const apigetunmarklist = `${apiPrefix}/user/form2/get_unmarked_injurydetails/${trn}`
  const apigetmarklist = `${apiPrefix}/user/form2/get_marked_injurydetails/${trn}/${imgid}`
  const apigetbalnkimg = `${apiPrefix}/user/form2/get_internal_injury_marked/${trn}/${imgid}`
  const apiupdatemrk = `${apiPrefix}/user/form2/add_marked_injurydetails`
  const apiresetmrk = `${apiPrefix}/user/form2/reset_marked_injurydetails/${trn}/${imgid}`


  useEffect(() => {
    callApi(apigetunmarklist)
      .then((response) => {
        setInjuries(response)
      })
      .catch((error) => {
        toast.error("Error Occur", {
          position: toast.POSITION.TOP_RIGHT,
        })
      })
    callApi(apigetmarklist)
      .then((response) => {
        setmarkedInjuries(response)
        if(markedinjuries.length>0){
          setunfreezhide(true)
        }
        
      })
      .catch((error) => {
        toast.error("Error Occur", {
          position: toast.POSITION.TOP_RIGHT,
        })
      })
      callApi(apigetbalnkimg)
      .then((response) => {
        setImageSrc(response);
      }).catch((error) => {
        toast.error("Error Occur", {
          position: toast.POSITION.TOP_RIGHT,
        })
      })
      
   
  }, [])

  const [context, setContext] = useState(null);

  useEffect(() => {    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    setContext(ctx)
    // Load the image onto the canvas
    const image = new Image();
    image.src = `data:image/png;base64,${imageSrc.image }`;
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    }; 
   
    }, [ imageSrc]);



    useEffect(() => {    
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');  

        numberList.forEach(({ x, y, number }) => {
                  ctx.font = '20px Arial';
                  ctx.fillStyle = 'red';
                  ctx.fillText(number, x, y);
                });
      
                handleDownloadImage();
      }, [numberList]);


  const handleCanvasClick = async (event) => { 
    if (injuries.length !== 0) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (srno !== null) {
        const newNumber = {
          x: x,
          y: y,
          number: srno
        };
       
        setNumberList([...numberList, newNumber]);        
      };      
    }
    else {
      toast.error("no injury found", {
        position: toast.POSITION.TOP_RIGHT,
      })
    }
  
  }
  const handleckick = (injury, srno) => {
    setsrno(srno)
    setselectedinjury(injury)
  };
  const handleDownloadImage = async () => {
    const canvas = canvasRef.current;
    const canvasDataUrl = canvas.toDataURL('image/png');
    const base64Data = canvasDataUrl.split(',')[1];
const binaryData = atob(base64Data);
const byteArray = new Uint8Array(binaryData.length);
for (let i = 0; i < binaryData.length; i++) {
  byteArray[i] = binaryData.charCodeAt(i);
}
const blob = new Blob([byteArray], { type: 'image/png' }); 
   
    
    const formDataWithFile = new FormData()
    formDataWithFile.append('transactionid', trn)
    formDataWithFile.append('createuser', changeuser)
    formDataWithFile.append('imageid', imgid)
    formDataWithFile.append('fileuploaded',blob)
    formDataWithFile.append('injurysrno', srno)
    const response = await fetch(
      apiupdatemrk,
      {
        method: 'POST',
        body: formDataWithFile,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
     
    ).then((response) => {
      callApi(apigetunmarklist)
      .then((response) => {
        setInjuries(response)
      })
      .catch((error) => {
        toast.error('error occur', {
          position: toast.POSITION.TOP_RIGHT,
        })
      })
    callApi(apigetmarklist)
      .then((response) => {
        setmarkedInjuries(response)
      })
      .catch((error) => {
        toast.error('error occur', {
          position: toast.POSITION.TOP_RIGHT,
        })
      })
    })
  }
    const handleIdentResetClick = async () => {
      
      try {
      const response = await fetch(
        apiresetmrk,
       { method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },}
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
          callApi(apigetunmarklist)
          .then((response) => {
            setInjuries(response)
          })
          .catch((error) => {
            toast.error("Error Occur", {
              position: toast.POSITION.TOP_RIGHT,
            })
          })
        callApi(apigetmarklist)
          .then((response) => {
            setmarkedInjuries(response)
            if(markedinjuries.length>0){
              setunfreezhide(true)
            }
            
          })
          .catch((error) => {
            toast.error("Error Occur", {
              position: toast.POSITION.TOP_RIGHT,
            })
          })
          callApi(apigetbalnkimg)
          .then((response) => {
            setImageSrc(response);
          }).catch((error) => {
            toast.error("Error Occur", {
              position: toast.POSITION.TOP_RIGHT,
            })
          })
          toast.success(`Successfully Reset.`, {
            position: toast.POSITION.TOP_RIGHT,
          })
          setNumberList([])
          setselectedinjury([])
          setsrno('')
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
    <>
      <div className="card">
        <div className='row'>
          <div className='col-6'>
            <canvas
              ref={canvasRef}
              onDoubleClick={handleCanvasClick}
              style={{ border: '1px solid black' }}
            />
            
          </div>
          <div className='col-2 d-flex align-items-center'>
          <button type="submit" className="btn btn-dark" onClick={handleIdentResetClick}>
                reset
              </button>
              </div>
          <div className='col-2'>
          <div className='border m-1'>
            <h5> To Mark On Picture :- Click On injury & then double click on Picture</h5>
            <ul className='list-group' >
              {injuries.map((injury, index) => (
                <li key={index} onClick={() => handleckick(injury.injtremark, injury.srno)}
                  className={selectedinjury === injury.injtremark ? 'active list-group-item' : 'list-group-item'}>
                  {injury.injtremark}

                </li>
              ))}
            </ul>
            </div>
          </div>
          <div className='col-2'>
          <div className='border m-1'>
            <h5> To remove mark from Picture :- Click On injury made on Picture</h5>
            <ul className='list-group' >
              {markedinjuries.map((injury, index) => (

                <li className='list-group-item' key={index} >
                  {injury.injtremark}
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </div>
      
    </>

  );
};


export default Imagetest
