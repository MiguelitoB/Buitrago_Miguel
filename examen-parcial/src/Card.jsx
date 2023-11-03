import React from "react";

const Card = (usuario) => {
return (
    <div>
        <h5 style={{color: "green"}}>Hola {usuario.nombre} <br>Sabemos que tu deporte favorito es : {usuario.deporteFavorito}</br> </h5>
    </div>
   )
}
export default Card;