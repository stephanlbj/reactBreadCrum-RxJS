import { useskipPageContext } from "../Context/SkipPageContext"

 


const BackBtn = () => {

  const {removeSkipPage} =useskipPageContext()
     

  return (
    <div style={{padding:10, width:'fit-content'}}>
    <button
     style={{cursor:'pointer'}}
     onClick={removeSkipPage}>Go Back
    </button>
    </div>
  )
}

export default BackBtn