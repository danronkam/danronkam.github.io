import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

  
    return (
        <>
            <Slider {...settings}>
                <div>
                    <img alt="" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
                </div>
                <div>
                    <img alt="" src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg" />
                </div>
            </Slider>
        </>

  );
};

export default Carousel