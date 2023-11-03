import { useState } from 'react'
import Card from './Card'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState({
    nombre: '',
    deporteFavorito: '',

  });
  const [show, setShow] = useState(false)
  const [error, setError] = useState (false)

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(usuario.nombre.length > 3 && usuario.nombre.trimStart && usuario.deporteFavorito.length > 6){

      setShow(true)
      setError(false)
    } else {
      setError(true)
    }
  }
  console.log(usuario);
  return (
    
    <div className='App'>
      <h2>Elige un deporte</h2>
      {!show &&
        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input type="text" value={usuario.nombre} onChange={(e)=> setUsuario({...usuario, nombre: e.target.value.trimStart()})} /> 
          <label>Deporte Favorito</label>
          <input type="text" value={usuario.deporteFavorito} onChange={(e)=> setUsuario({...usuario, deporteFavorito: e.target.value})} /> 
          
        
          <button>Enviar ➡️</button>
          
        </form>
      }
      { show ?
        <Card nombre={usuario.nombre}  deporteFavorito={usuario.deporteFavorito}  />
        :
            null
      }
      {error && <h5 style={{color:'red'}}>Por favor chequea que la información sea correcta‼️</h5>}
  
    </div>
    
  )
  
    }
export default App;
