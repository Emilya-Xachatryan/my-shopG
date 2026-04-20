import Slider from "react-slick";
import styles from "./Slider.module.css";

function MySlider({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className={styles.slider}>
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i}>
            <img src={img} alt="slide" className={styles.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MySlider;