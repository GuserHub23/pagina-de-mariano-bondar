
const SectionVideos = () => {

    const videos = [
        {
            id: 500, 
            img: 'https://i.ytimg.com/vi_webp/_oqY23h3CCU/hqdefault.webp',
            titulo: 'MERCADO LIBRE #17',
            tiempo : 'hace 2 semanas', 
            href: 'https://www.youtube.com/watch?app=desktop&v=_oqY23h3CCU'
        },
        {
            id: 501, 
            img: 'https://i.ytimg.com/vi_webp/xiOkHXC8qt8/hqdefault.webp',
            titulo: 'ME BUSQUE EN GOOGLE',
            tiempo : 'hace 3 semanas', 
            href: 'https://www.youtube.com/watch?app=desktop&v=xiOkHXC8qt8'
        },
        {
            id: 502, 
            img: 'https://i.ytimg.com/vi_webp/DnhPWMa24vU/hqdefault.webp',
            titulo: 'TIK TOKS EPICOS',
            tiempo : 'hace 1 mes', 
            href: 'https://www.youtube.com/watch?app=desktop&v=DnhPWMa24vU'
        },
        {
            id: 503, 
            img: 'https://i.ytimg.com/vi_webp/U7FSPkNa5kM/hqdefault.webp',
            titulo: 'COMPRANDO TODO GRATIS EN MARKETPLACE',
            tiempo : 'hace 1 mes', 
            href: 'https://www.youtube.com/watch?app=desktop&v=U7FSPkNa5kM'
        },
        {
            id: 504, 
            img: 'https://i.ytimg.com/vi/wWSWB46SgEE/hqdefault.jpg',
            titulo: 'solo el 1% puede ver este video',
            tiempo : 'hace 2 meses', 
            href: 'https://www.youtube.com/watch?app=desktop&v=wWSWB46SgEE'
        },
        {
            id: 505, 
            img: 'https://i.ytimg.com/vi_webp/N4JGAg4oZqI/hqdefault.webp',
            titulo: 'ME TESTIE LOS OJOS',
            tiempo : 'hace 2 meses', 
            href: 'https://www.youtube.com/watch?app=desktop&v=N4JGAg4oZqI'
        },
    ]

    return (
        <>
            <div className="min-vh-100 bg-dark text-light mb-3 py-3">
                <h2 className="text-center py-2">RECIENTES</h2>
                <hr/>
        
                <div className="row col">
                    <div className="row row-cols-md-4 row-cols-sm-2 gap-1 m-auto justify-content-center">
                        {
                        videos.map( ({id, img, titulo, tiempo,href}) => (

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
                                                <span className="text-muted">{tiempo}</span>
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
        </>
  )
}

export default SectionVideos
