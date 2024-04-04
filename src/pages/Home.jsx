import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import caro1 from "../assets/Sajek.png";
import caro2 from "../assets/Sreemongol.png";
import caro3 from "../assets/sundorbon.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="my-28 mx-auto container grid grid-cols-1 md:grid-cols-2 gap-3 ">
      <div className="w-[450px] mx-5">
        <h1 className=" text-4xl font-bold z-20 py-5">Cox's bazar</h1>
        <p className="mt-12">
          <small className="font-semibold">
            Cox's Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ...
          </small>
        </p>
        <Link to='/booking'>
          <button className="btn btn-warning btn-sm mt-16">
            Booking
            <FaArrowRight />
          </button>
        </Link>
      </div>
      <div className="mx-5">
        <AwesomeSlider>
          <div>
            <img src={caro1} alt="" />
          </div>
          <div>
            <img src={caro2} alt="" />
          </div>
          <div>
            <img src={caro3} alt="" />
          </div>
        </AwesomeSlider>
      </div>
    </div>
  );
};

export default Home;
