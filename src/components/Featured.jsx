import { useRef } from "react";
import {
  useGsapFeatureLeftShutterUnvail,
  useGsapFeatureRightShutterUnvail,
} from "../hooks/gsap";

const Featured = () => {
  const featureRef = useRef(null);
  const featureLeftShutter = useRef(null);
  const featureRightShutter = useRef(null);

  useGsapFeatureLeftShutterUnvail(featureLeftShutter, featureRef);
  useGsapFeatureRightShutterUnvail(featureRightShutter, featureRef);

  return (
    <section className="featured wrapper" ref={featureRef}>
      <h2 className="section-title">featured</h2>
      <div className="features">
        <div className="feature-left">
          <span className="feature-text">90'S TELEPHONE</span>
          <img
            src="https://images.pexels.com/photos/2587464/pexels-photo-2587464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="90'S TELEPHONE"
          />
          <span
            className="feature-shutter-left"
            ref={featureLeftShutter}
          ></span>
        </div>
        <div className="feature-right">
          <span className="feature-text">90'S CASSETTE PLAYER</span>
          <img
            src="https://images.pexels.com/photos/6076410/pexels-photo-6076410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="90'S CASSETTE PLAYER"
          />
          <span
            className="feature-shutter-right"
            ref={featureRightShutter}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;
