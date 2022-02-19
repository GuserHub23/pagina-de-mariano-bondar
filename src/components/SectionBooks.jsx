import React from 'react'

const SectionBooks = () => {

    const books = [
        {
            id: 701, 
            titulo: 'DESCONECTADO', 
            href: 'https://articulo.mercadolibre.com.ar/MLA-789026937-desconectado-mariano-bondar-libro-_JM', 
            img: 'https://http2.mlstatic.com/D_NQ_NP_654326-MLA31356337307_072019-O.webp', 
            texto: 'En este libro, Mariano Bondar enhebra una serie de reflexiones -basadas en experiencias personales, íntimas- sobre grandes temas: APATÍA, ODIO, TRISTEZA, FELICIDAD, RESPETO, GRATITUD, VALOR, REALIDAD, ARTE y DIOS. Cada capítulo está acompañado por una fotografía intervenida por el artista JOAK, uno de sus más activos y creativos colaboradores en redes.'
        },
        {
            id: 700, 
            titulo: 'UNO IGUAL AL RESTO', 
            href: 'https://listado.mercadolibre.com.ar/uno-igual-al-resto-mariano-bondar#D[A:uno%20igual%20al%20resto%20mariano%20bondar]', 
            img: 'https://http2.mlstatic.com/D_NQ_NP_892112-MLA29186767904_012019-O.jpg', 
            texto: 'En este libro, Mariano Bondar reflexiona acerca de temas centrales como el amor, la amistad, la familia, el éxito, el desarrollo de la propia personalidad, la muerte, entre otros, y presenta relatos ficcionales de Manuel Pérez Campanela que muestran otros puntos de vista.'
        },
    ]

    return (
        <div className="min-vh-100 bg-dark text-light mb-3 py-3">
            <h2 className="text-center py-4">MIS LIBROS</h2>
            <hr/>
      
            <div className="row col">
                <div className="row row-cols-md-4 row-cols-sm-3 gap-1 m-auto justify-content-center">
                    {
                    books.map( ({id, img, titulo, texto, href}) => (

                        <a
                            className="text-decoration-none" 
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            key={id}
                            style={{width: 320}}
                        >
                            <div className="card bg-dark text-light">
                                <div className="row">
                                    <img
                                        className="card-img-top" 
                                        style={{height: 425, width:300}}
                                        src={img}
                                        alt={titulo} 
                                    />
                                        
                                    <div className="col-md-12">
                                        <div className="card-body">
                                            <h6 className="card-title">{titulo}</h6>
                                            <p className="card-text">{texto}</p>
                                        </div>
                                    </div>
                                </div>      
                            </div>
                        </a>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SectionBooks
