import React from "react";

const Card = ({nombre, deporteFavorito}) => {
return (
    <div>
        <h5 style={{color: "green"}}>Hola {nombre} Sabemos que tu deporte favorito es {deporteFavorito}</h5>
    </div>
   )
}
export default Card;