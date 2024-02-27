
type BtnProps ={
    label:string
    handleClick: () => void

}
const BtnComponent = ({label, handleClick}:BtnProps) => {
  return (
  <button
  style={{cursor:'pointer'}} 
  onClick={handleClick}>
    {label}
  </button>
  )
}

export default BtnComponent