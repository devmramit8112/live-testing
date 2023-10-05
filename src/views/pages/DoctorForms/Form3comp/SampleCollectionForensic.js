import React, { useState } from 'react'
import { SampleCollection } from '../Form3part2comp/Penetration'
import { ButtonBackandSave } from '../common/Operationradionbutton'
import axios from 'axios'
import { callApi } from 'src/views/CommonModels/CallApi'
import { useEffect } from 'react'
const SampleCollectionForensic = ({examinDetail,sampleCollectionForensicDetail,referralAdviceOpinion,trnid}) => {
  const changeuser = localStorage.getItem('username')
  const token = localStorage.getItem('token')
  const [handleData, setHandleData] = useState({
    scfTransactionid: trnid,
    scf3AClothingOuter: '',
    scf3BClothingInner: '',
    scf4DebrisCollection: '',
    scf4NailScraping: '',
    scf4BodyFluids: '',
    scf4In_BetweenFigures: '',
    scf5BreastSwab: '',
    scf6CombingPublicHair: '',
    scf7PublicHair: '',
    scf8MattedPublicHair: '',
    scf9VulvalSwabs: '',
    scf9VaginalSwabs_Aneterior: '',
    scf9VaginalSwabs_Posterior: '',
    scf9CervicalSwabs: '',
    scf9VaginalSwabs_Laterral: '',
    scf10Culture: '',
    scf11VaginalWash: '',
    scf12RectalExamination: '',
    scf13OralSwab: '',
    scf14BloodCollection: '',
    scf15UrineCollection: '',
    createUser: changeuser,
  })
  const [errors, setErrors] = useState({
    scf3AClothingOuter: '',
    scf3BClothingInner: '',
    scf4DebrisCollection: '',
    scf4NailScraping: '',
    scf4BodyFluids: '',
    scf4In_BetweenFigures: '',
    scf5BreastSwab: '',
    scf6CombingPublicHair: '',
    scf7PublicHair: '',
    scf8MattedPublicHair: '',
    scf9VulvalSwabs: '',
    scf9VaginalSwabs_Aneterior: '',
    scf9VaginalSwabs_Posterior: '',
    scf9CervicalSwabs: '',
    scf9VaginalSwabs_Laterral: '',
    scf10Culture: '',
    scf11VaginalWash: '',
    scf12RectalExamination: '',
    scf13OralSwab: '',
    scf14BloodCollection: '',
    scf15UrineCollection: '',
  });
  const validateformOTP = () => {
    let valid = true;
    const newErrors = {
      scf3AClothingOuter: '',
      scf3BClothingInner: '',
      scf4DebrisCollection: '',
      scf4NailScraping: '',
      scf4BodyFluids: '',
      scf4In_BetweenFigures: '',
      scf5BreastSwab: '',
      scf6CombingPublicHair: '',
      scf7PublicHair: '',
      scf8MattedPublicHair: '',
      scf9VulvalSwabs: '',
      scf9VaginalSwabs_Aneterior: '',
      scf9VaginalSwabs_Posterior: '',
      scf9CervicalSwabs: '',
      scf9VaginalSwabs_Laterral: '',
      scf10Culture: '',
      scf11VaginalWash: '',
      scf12RectalExamination: '',
      scf13OralSwab: '',
      scf14BloodCollection: '',
      scf15UrineCollection: '',
    };
    if(handleData.phisGPEBSymptoms === null){
      newErrors.phisGPEBSymptoms = 'Required';
      valid = false;
    }
   else if (handleData.phisGPEBSymptoms.trim() === '' ) {
      newErrors.phisGPEBSymptoms = 'Required';
      valid = false;
    }
   
    setErrors(newErrors);
    return valid;
  };
  const apiPrefix = process.env.REACT_APP_API_PREFIX
  const url = `${apiPrefix}/user/form3/saveforensic_science_labroarty`
  const url2 = `${apiPrefix}/user/form3/getforensic_science_labroarty/${trnid}`


  useEffect(()=>{
    callApi(url2)
    .then((response) => {
     setHandleData(response)
    })
    .catch((error) => {
      console.error('API request failed:', error)
    })
  },[])


  const handleF3_frstClick = async () => {
    const response = await axios.post(url, handleData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (response.status === 200) {
     
    sampleCollectionForensicDetail(false)
    referralAdviceOpinion(true)
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target

    setHandleData({ ...handleData, [name]: value })
  }
  const handleF3_frstBackClick = () => {
    sampleCollectionForensicDetail(false)
    examinDetail(true)
  }
  return (
    <div className="Container">
      <div className="card mt-2 mb-2">
        <div className="card-header text-center p-3 mb-3 bg-secondary-subtle">
          <h4>Sample Collection for Forensic Science Laboratory</h4>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>Step No.(As per Potocol </th>
                  <th>Item </th>
                  <th>Instruction </th>
                  <th>Sample Taken or Not With Reason </th>
                </tr>
              </thead>
              <tbody>
                <SampleCollection
                  title="3A"
                  title1="Clothing Outer"
                  title2="Air dry each item in shade and pack it separatly. use more envelopes if needed and label them 3A/2,3A/3 and so on. Also encircle the suspected area on the clothing to facilitiate lab examination."
name='scf3AClothingOuter'
value={handleData.scf3AClothingOuter}
handleChange={handleChange}
                />
                <SampleCollection title="3B " title1=" Clothing Outer" title2="-do-"
                name='scf3BClothingInner'
value={handleData.scf3BClothingInner}
handleChange={handleChange} />
                <SampleCollection
                  title="4 "
                  title1=" Debris Collection "
                  title2="Entire body surface should be examined from head to toe for fibres,leaf matter, soil and so on. Debris found on each site of body should be collected in a white sheet of paper, folded and packed in a separate evelope and marked accordingly. "
                  name='scf4DebrisCollection'
value={handleData.scf4DebrisCollection}
handleChange={handleChange}
                />
                <SampleCollection
                  title=" 4  "
                  title1=" Nail Scraping "
                  title2="Collection stick is provided in the kit. Nail scraping should be done very gently so as to remove loose debris only."
                  name='scf4NailScraping'
value={handleData.scf4NailScraping}
handleChange={handleChange}
                />
                <SampleCollection
                  title=" 4"
                  title1=" Body Fluids "
                  title2="Any Suspicipus stain on the body sholud be lifted by dropping a drop of distilled water on the stain and rolling the collection swab over it. The swabs so collected should be air dried under shade before being placed in the container. Use extra envelopes provided in the kit if needed."
                  name='scf4BodyFluids'
value={handleData.scf4BodyFluids}
handleChange={handleChange}
                />
                <SampleCollection
                  title="4"
                  title1="	In-Between Figurers  "
                  title2=" Collection stick is provided in the kit. In between figures should be done very gently so as to remove loose debris only."
                  name='scf4In_BetweenFigures'
value={handleData.scf4In_BetweenFigures}
handleChange={handleChange}
                />
                <SampleCollection
                  title="6"
                  title1=" Combing pubic hair "
                  title2="Place the collection paper under the butts and gently comb the pubic hair. Remember to pack the comb also along with the specimen in the envelope"
                  name='scf6CombingPublicHair'
value={handleData.scf6CombingPublicHair}
handleChange={handleChange}
                />
                <SampleCollection
                  title="7"
                  title1="Pubic hair  "
                  title2="Few pubic hair may be plucked so as to enable DNA extraction from roots, if needed."
                  name='scf7PublicHair'
value={handleData.scf7PublicHair}
handleChange={handleChange}
                />
                <SampleCollection
                  title="8"
                  title1=" Matted pubic hair "
                  title2="Use scissors to cut the matted hair."
                  name='scf8MattedPublicHair'
value={handleData.scf8MattedPublicHair}
handleChange={handleChange}
                />
                <SampleCollection
                  title=" 10 "
                  title1="Culture  "
                  title2=" The swabs should be taken in Culture tube. "
                  name='scf10Culture'
value={handleData.scf10Culture}
handleChange={handleChange}
                />
                <SampleCollection
                  title="12 "
                  title1="  Rectal Eaxamination "
                  title2="Make two slides for each swab, fix them and pack them with stained portion facing each other. The swabs should be air dried under shade before being placed in the container"
                  name='scf12RectalExamination'
value={handleData.scf12RectalExamination}
handleChange={handleChange}
                />
                <SampleCollection title="13 " title1="Oral Swab  " title2="-do-" 
                   name='scf13OralSwab'
value={handleData.scf13OralSwab}
handleChange={handleChange}
                />
                <SampleCollection
                  title=" 14"
                  title1=" 	Blood Collection "
                  title2=" Collect blood for grouping in citrate vial (2 ml), and for alcohol and drugs in oxalate solution (5 ml). "
                  name='scf14BloodCollection'
value={handleData.scf14BloodCollection}
handleChange={handleChange}
                />
                <SampleCollection
                  title=" 15"
                  title1="  Urine Collection  "
                  title2="Collect urine sample (5ml) in oxalate solution."
                  name='scf15UrineCollection'
value={handleData.scf15UrineCollection}
handleChange={handleChange}
                />
              </tbody>
            </table>
            <ButtonBackandSave
              backButton={handleF3_frstBackClick}
              savebutton={handleF3_frstClick}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SampleCollectionForensic
