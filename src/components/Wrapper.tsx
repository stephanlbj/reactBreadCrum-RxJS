 

const Wrapper = ({label}:{label:string}) => {
  return (
    <div style={{
      
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:'100vh',
        color:'white',
        textAlign:'center',
        fontSize:'24px'
     
    }}>
        <p>{label}</p>
    </div>
  )
}

export default Wrapper