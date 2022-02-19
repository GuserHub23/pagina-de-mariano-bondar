
const SectionMusic = () => {

    const music = [
        {
            id: 200,
            titulo: 'Bondar - Buscándote (Official Video)', 
            fecha: '7 oct 2021', 
            img: 'https://i.scdn.co/image/ab67616d0000b273fbaa68ecfe12e2e12f96cb24', 
            href: 'https://www.youtube.com/watch?v=-_K3mA6tU38'
        },
        {
            id: 201, 
            titulo: 'Bondar - Libertad (Official Video)', 
            fecha: '30 jul 2021',
            img: 'https://i.scdn.co/image/ab67616d0000b2734dadeea728bc5e7130187b96', 
            href: 'https://www.youtube.com/watch?v=bmj-laPRe-0'
        },
        {
            id: 202, 
            titulo: 'Bondar - Soltera (Official Video)', 
            fecha: '2 jul 2021',
            img: 'https://i.scdn.co/image/ab67616d0000b2733a2c71485bca9f51de2d84dc', 
            href: 'https://www.youtube.com/watch?v=PGnavAxZVYg'
        },
        {   id: 203, 
            titulo: 'Bondar - Corazón', 
            fecha: '1 ene 2021',
            img: 'https://i.scdn.co/image/ab67616d0000b273d9c8f7d4933cb32dc85b5cf2', 
            href: 'https://www.youtube.com/watch?v=RmwFPPY83OU'
        },
    ]

    return (
        <div className="min-vh-100 bg-dark text-light mb-3 py-3">
            <h2 className="text-center py-4">MI MUSICA</h2>
            <hr/>
      
            <div className="row col">
                <div className="row row-cols-md-3 row-cols-sm-2 gap-2 m-auto justify-content-center">
                    {
                    music.map( ({id, img, titulo, fecha, href}) => (

                        <a
                            className="text-decoration-none" 
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            key={id}
                        >
                            <div className="card bg-dark text-light">
                                <div className="row">
                                    <img
                                        className="card-img-top" 
                                        src={img}
                                        alt={titulo} 
                                    />
                                    
                                    <div className="col-md-12">
                                        <div className="card-body">
                                            <h6 className="card-title">{titulo}</h6>
                                            <span className="text-muted">{fecha}</span>
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

export default SectionMusic
