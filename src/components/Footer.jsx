
const Footer = () => {
  
  const redesFooter = [
    {
      id: 30, 
      clase: 'fab fa-twitter', 
      texto: 'Twitter',
      href: 'https://twitter.com/Mariano_Bondar', 
      color: "#1d9bf0"},
    {
      id: 31, 
      clase: 'fab fa-instagram', 
      texto: 'Instagram',
      href: 'https://www.instagram.com/mariano_bondar/', 
      color: "#ea3690"
    },
    {
      id: 32, 
      clase: 'fab fa-facebook', 
      texto: 'Facebook',
      href: 'https://www.facebook.com/MarianoBondar1/', 
      color: "#1876f2"
    },
    {
      id: 33, 
      clase: 'fab fa-youtube', 
      texto: 'YouTube',
      href: 'https://www.youtube.com/user/mariianbonD', 
      color: "#ff0000"
    },
    {
      id: 35, 
      clase: 'fab fa-youtube', 
      texto: 'Canal secundario',
      href: 'https://www.youtube.com/channel/UCTymONk4rqQ8Fdn2YusZgkw', 
      color: "#ff0000"
    },
    {
      id: 34, 
      clase: 'fab fa-tiktok', 
      texto: 'TikTok',
      href: 'https://www.youtube.com/user/mariianbonD', 
      color: "#ffffff"
    },
]

    return (

      <footer className="min-vw-100 bg-warning py-4 d-flex justify-content-center">
        <div>
          <h5>
            SEGUIME EN MIS REDES
          </h5>
          <hr/>
          <ul className="col list-group d-flex">
            {
              redesFooter.map(({id, texto, clase, href, color}) => (
                <div key={id}>
                  <a 
                    href={href}
                    className="text-decoration-none"
                    target='_blank'
                    rel="noreferrer"
                  >
                    <i className={clase} style={{color, fontSize: 25}}></i>
                    &nbsp;
                    &nbsp;
                    <span className="text-dark">{texto}</span>
                  </a> 
                </div> 
              )
              )
            }
          </ul>
        <hr/>
        <span>@derechos reservados</span>
        </div>
      </footer>
    )
}

export default Footer
