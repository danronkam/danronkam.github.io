import Slider from "react-slick";


const ClientSlider = () => {
    var settings = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        variableWidth: true

    };

    return(
        <>
        <div>
            <h2>Pause On Hover</h2>
            <Slider {...settings}>
                <div>
                    <img className="client-logo" src="https://derailed-seed.s3.us-west-1.amazonaws.com/ml.png" alt="" />
                </div>
                <div>
                    <img className="client-logo" src="https://derailed-seed.s3.us-west-1.amazonaws.com/cex.png" alt="" />
                </div>
                <div>
                    <img className="client-logo" src="https://derailed-seed.s3.us-west-1.amazonaws.com/BML.png" alt="" />
                </div>
                <div>
                    <img className="client-logo" src="https://derailed-seed.s3.us-west-1.amazonaws.com/BH.png" alt="" />
                </div>
                <div>
                    <img className="client-logo" src="https://derailed-seed.s3.us-west-1.amazonaws.com/multi.projects+(2).png" alt="" />
                </div>
                <div>
                    <img className="client-logo" src="https://derailed-seed.s3.us-west-1.amazonaws.com/KUIVA_logo.png" alt="" />
                </div>
            </Slider>
      </div>
        
        </>
    )
}

export default ClientSlider