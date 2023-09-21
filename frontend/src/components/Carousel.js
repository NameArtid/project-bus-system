import Carousel from "react-bootstrap/Carousel";
import car1 from "../images/-1h_NN3nqzI.jpg";
import car2 from "../images/e1NRHsCgFAg.jpg";
import car3 from "../images/ytZOB9FLIqk.jpg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={car3} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 " src={car2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={car1} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
