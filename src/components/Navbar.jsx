
const Navbar = () => {


    const redesNavBar = [
        {
            idNav: 20, 
            clase: 'fab fa-twitter', 
            href: 'https://twitter.com/Mariano_Bondar', 
            color: "#1d9bf0"},
        {
            idNav: 21, 
            clase: 'fab fa-instagram', 
            href: 'https://www.instagram.com/mariano_bondar/', 
            color: "#ea3690"
        },
        {
            idNav: 22, 
            clase: 'fab fa-facebook', 
            href: 'https://www.facebook.com/MarianoBondar1/', 
            color: "#1876f2"
        },
        {
            idNav: 23, 
            clase: 'fab fa-youtube', 
            href: 'https://www.youtube.com/user/mariianbonD', 
            color: "#ff0000"
        },
        {
            idNav: 25, 
            clase: 'fab fa-youtube', 
            href: 'https://www.youtube.com/channel/UCTymONk4rqQ8Fdn2YusZgkw', 
            color: "#ff0000"
        },
        {
            idNav: 24, 
            clase: 'fab fa-tiktok', 
            href: 'https://www.youtube.com/user/mariianbonD', 
            color: "#ffffff"
        },
    ]

    return (
        <nav className="b_ground text-light sticky-top">
            <div className="container py-2 d-flex justify-content-between flex-wrap gap-3">
                <a 
                    className="text-decoration-none"
                    href="/"
                >
                    <div className="d-flex">
                        <img
                            className="rounded-circle border border-danger my-auto"
                            style={{width: 45,height: 45}}
                            src="https://yt3.ggpht.com/AcpDGC5dgI0G5hW5m_vRjjchPRk-s_MnO5I1-2E24cE1nkYMrz-Boy2OlwF-cPjrYlfvIIntCm4=s176-c-k-c0x00ffffff-no-rj-mo" 
                            alt="mariano"
                        />
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <span className="my-auto fw-bold text-light">Mariano Bondar</span>
                    </div>
                </a>

                <div className="my-auto d-flex justify-content-between">

                    <div className="text-light">
                        {
                            redesNavBar.map(({idNav, clase, href, color}) => (
                                <a 
                                    className="px-2"
                                    key={idNav}
                                    href={href} 
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    <i className={clase} style={{color, fontSize: 20}}></i>
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
