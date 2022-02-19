import React from 'react'

const Hero = () => {
    return (
        <header className="row col">
            <div className="container my-5 d-flex justify-content-center row row-cols-md-3 row-cols-sm-2">
                <img 
                    style={{width:300}}
                    className="rounded-circle"
                    src="https://www.losandes.com.ar/resizer/B1lW3cI1P8vtiTwXO6rsfprXRdI=/1023x1023/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/2C6QVQ4OOBBS7NXNUT3K3C5N54.jpg" 
                    alt="Mariano Bondar" 
                />
                &nbsp;
                <div
                    className="my-auto"
                    style={{width: 600}}
                >
                    <h3 className="text-start text-light m-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Dicta nam amet ad ipsam blanditiis omnis accusantium, dolor aspernatur. 
                        Nemo, consequuntur. 
                        Eveniet enim consequuntur laudantium fugiat alias nemo dolorem voluptas quae.
                    </h3>
                </div>
            </div>
        </header>
    )
}

export default Hero
