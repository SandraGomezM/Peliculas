import React from 'react'

const Movie = (props) => (
    <div className="product-card">
                <h2>{props.p.Titulo}</h2>
                <p>Duración: {props.p.Duracion}</p>
                <p>Productor: {props.p.Productor}</p>
                <img 
                    src={props.p.imagen} 
                    alt="Harry Potter." 
                    width="200" 
                    height="275" 
                />
                
            </div>
)

export default Movie