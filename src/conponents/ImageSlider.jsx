import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import PropTypes from 'prop-types';

const ImageSlider = ({ images }) => {
    console.log(images)
  return (
        <Carousel autoPlay showThumbs={false} infiniteLoop>
            {images.map(image => (
                <div key={image}>
                    <img 
                        src={`${import.meta.env.VITE_SERVER_URL}/${image}`}
                        alt={image}
                        className="w-full max-h-[150px]"
                    />
                </div>
            ))}
        </Carousel>
  )
}

ImageSlider.propTypes = {
    images: PropTypes.array,
  };

export default ImageSlider