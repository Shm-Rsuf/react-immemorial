import { useRef } from "react";
import { useGsapShutterUnvail } from "../hooks/gsap";

const Hero = () => {
  const heroRef = useRef(null);

  const shutter1 = useRef(null);
  const shutter2 = useRef(null);

  useGsapShutterUnvail(shutter1, 0, heroRef);
  useGsapShutterUnvail(shutter2, 0.2, heroRef);

  return (
    <section className="hero wrapper" ref={heroRef}>
      <h1 className="ethereal">
        Ethereal <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas">
        Canvas <span ref={shutter2}></span>
      </h1>
    </section>
  );
};

export default Hero;
