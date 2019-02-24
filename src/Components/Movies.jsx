import React, { Component } from 'react'
import Movie from './Movie'

class Movies extends Component {

    constructor(props){
        super(props)
        this.state = {
        pelicula:  [
            {
            Titulo: "Harry Potter y la piedra filosofal.",
            Duracion: "152 minutos.",
            Año: "2001",
            Director: "Chris Columbus.",
            Productor: "David Heyman.",
            imagen: "http://es.web.img3.acsta.net/c_215_290/pictures/14/04/30/11/55/592219.jpg"
            },
            {
            Titulo: "Harry Potter y la cámara secreta.",
            Duracion: "161 minutos.",
            Año: "2002",
            Director: "Chris Columbus.",
            Productor: "David Heyman.",
            imagen: "https://1.bp.blogspot.com/-ean731HCkZE/WBdzdJr1IdI/AAAAAAAAADE/ppiAu2Zb4T4stOGkz-_fesuboLeXgdMFwCLcB/s1600/ver%2Bharry%2Bpotter%2By%2Bla%2Bcamara%2Bsecreta%2Bonline.jpg"
            },
            {
            Titulo: "Harry Potter y el prisionero de Azkaban.",
            Duracion: "141 minutos.",
            Año: "2004",
            Director: "Alfonso Cuarón.",
            Productor: "David Heyman, Chris Columbus, Mark Radcliffe.",
            imagen: "https://images-na.ssl-images-amazon.com/images/I/518QoVXAvXL.jpg"
            },
            {
            Titulo: "Harry Potter y el cáliz de fuego.",
            Duracion: "157 minutos.",
            Año: "2005",
            Director: "Mike Newell.",
            Productor: "David Heyman.",
            imagen: "https://images-na.ssl-images-amazon.com/images/I/51zdKaKI1BL._SY445_.jpg"
            },
            {
            Titulo: "Harry Potter y la Orden del Fénix.",
            Duracion: "138 minutos.",
            Año: "2007",
            Director: "David Yates.",
            Productor: "David Heyman, David Barron.",
            imagen: "https://http2.mlstatic.com/harry-potter-y-la-orden-del-fenix-seminueva-D_NQ_NP_762182-MLM28298298674_102018-F.jpg"
            },
            {
            Titulo: "Harry Potter y el misterio del príncipe.",
            Duracion: "153 minutos.",
            Año: "2009",
            Director: "David Yates.",
            Productor: "David Heyman, David Barron.",
            imagen: "https://img.tviso.com/ES/poster/w430/08/a4/08a46f786f5dba47b9d200ff91ce56e7.jpg"
            },
            {
            Titulo: "Harry Potter y las Reliquias de la Muerte: parte 1.",
            Duracion: "146 minutos.",
            Año: "2010",
            Director: "David Yates.",
            Productor: "David Heyman, David Barron, J. K. Bowling.",
            imagen: "https://img.tviso.com/ES/poster/w430/66/59/66597262e0d9f447ab27ad4ab11edcd7.jpg"
            },
            {
            Titulo: "Harry Potter y las Reliquias de la Muerte: parte 2.",
            Duracion: "130 minutos.",
            Año: "2011",
            Director: "David Yates.",
            Productor: "David Heyman, David Barron, J. K. Bowling.",
            imagen: "https://http2.mlstatic.com/harry-potter-y-las-reliquias-de-la-muerte-parte-2-dos-dvd-D_NQ_NP_929247-MLM27851429204_072018-F.jpg"
            },
            
        ],
        newMovie: {
            Titulo: null,
            Duracion: null,
            imagen: null,
            Año: null,
            Director: null,
            Productor: null
        }
        }
    }

    changeName = (e) => {
        let new_movie = this.state.newMovie
        new_movie.Titulo = e.target.value
        this.setState({newMovie: new_movie})
    }

    changeDuracion = (e) => {
        let n = this.state.newMovie
        n.Duracion = e.target.value
        this.setState({newMovie: n})
    }

    changeImagen = (e) => {
        let nuevo = this.state.newMovie
        nuevo.imagen = e.target.value
        this.setState({newMovie: nuevo})
    }
    changeAño = (e) => {
        let nuevo = this.state.newMovie
        nuevo.Año = e.target.value
        this.setState({newMovie: nuevo})
    }
    changeDirector = (e) => {
        let nuevo = this.state.newMovie
        nuevo.Director = e.target.value
        this.setState({newMovie: nuevo})
    }
    changeProductor = (e) => {
        let nuevo = this.state.newMovie
        nuevo.Productor = e.target.value
        this.setState({newMovie: nuevo})
    }

    addProduct = (e) => {
        e.preventDefault();
        //let productos = this.state.productos
        let { pelicula } = this.state
        let new_movie = this.state.newMovie
        pelicula.push(new_movie)
        this.setState({pelicula})
    }
    render() {
        return (
            <div>
            <h1>Peliculas aun en cartelera.</h1>
            {
                this.state.pelicula.map((pelicula, index) => (
                    <div key={index}>
                    <h3>{pelicula.Titulo}</h3>
                    <img src={pelicula.imagen} alt={pelicula.Titulo} width="100" height="100" />
                    
                    <p>--------------------------------------------</p>

                   <Movie p={pelicula} />
                    </div>
                ))
            }
            
                </div>
        
    

        )
    }
}

export default Movies
