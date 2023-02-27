import { useNavigate } from "react-router-dom";
const navArr = ['Home', 'Dashboard', 'Profile'];

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleNavigate = (element)=>{
    element === 'Home' ? navigate('/') :
    navigate(`/${element.toLowerCase()}`);
  }

  return (
    <div
      style={{
        width: '100%',
        background: 'black',
        color: 'whiteSmoke',
        fontWeight: 600,
        height: '10vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div style={{paddingLeft: '10px'}}>Navbar</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          minWidth: '30%',
          paddingRight: '10px'
        }}
      >
      {
        !!navArr?.length && navArr.map((element,key) =>(
          <div 
            key={key} 
            style={{cursor: 'pointer'}}
            onClick={()=>handleNavigate(element)}
          >
            {element}
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Navbar