import { useRef } from "react";
import {
  useGsapShutterUnvail,
  useGsapPhotoDropping,
  useGsapPhotoLevitate,
} from "../hooks/gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);

  const photoOneRef = useRef(null);
  const photoTwoRef = useRef(null);
  const photoThreeRef = useRef(null);
  const photoFourRef = useRef(null);
  const photoFiveRef = useRef(null);

  const photoArr = [
    photoOneRef,
    photoTwoRef,
    photoThreeRef,
    photoFourRef,
    photoFiveRef,
  ];

  useGsapShutterUnvail(shutter1, 0, heroRef);
  useGsapShutterUnvail(shutter2, 0.2, heroRef);
  useGsapPhotoDropping(photoArr);
  useGsapPhotoLevitate(photoArr, heroRef);

  return (
    <section className="hero wrapper" ref={heroRef}>
      <h1 className="ethereal">
        Ethereal <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas">
        Canvas <span ref={shutter2}></span>
      </h1>

      <div className="photos">
        <div
          ref={photoOneRef}
          className="photo one"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/10046283/pexels-photo-10046283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          ref={photoTwoRef}
          className="photo two"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/6577903/pexels-photo-6577903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          ref={photoThreeRef}
          className="photo three"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/4019766/pexels-photo-4019766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          ref={photoFourRef}
          className="photo four"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/7584538/pexels-photo-7584538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          ref={photoFiveRef}
          className="photo five"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/4836368/pexels-photo-4836368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
