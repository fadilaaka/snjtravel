import React from "react";
import ImageHero from "assets/images/picture-hero.png";
import ImageHeroFrame from "assets/images/hero-frame.png";
import IconTravelers from "assets/images/icons/icon-travelers.svg";
import IconCities from "assets/images/icons/icon-cities.svg";
import IconSpotphoto from "assets/images/icons/icon-spotphoto.svg";
import Button from "components/Button";
import { numberFormat } from "utilities/formatNumber";
import { Fade } from "react-reveal";

export default function Hero({ refMostPicked, data }) {
  const showMostPicked = () => {
    window.scrollTo({
      top: refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div
            className="hero-text col-12 col-lg-auto mx-auto"
            style={{ width: 530 }}
          >
            <h1 className="fw-bold lh-sm mb-3">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p className="mb-5 fw-light text-gray-500 w-75">
              We provide what you need to enjoy your holiday with family. Time
              tomake another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>
            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-6 col-lg-auto" style={{ marginRight: 30 }}>
                <img
                  width="36"
                  height="36"
                  src={IconTravelers}
                  alt={`${data.travelers} travelers`}
                />
                <h6 className="mt-3">
                  {numberFormat(data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Travelers
                  </span>
                </h6>
              </div>
              <div className="col-4 col-lg-auto" style={{ marginRight: 30 }}>
                <img
                  width="36"
                  height="36"
                  src={IconSpotphoto}
                  alt={`${data.spotphoto} Spot`}
                />
                <h6 className="mt-3">
                  {numberFormat(data.spotphoto)}{" "}
                  <span className="text-gray-500 font-weight-light">Spot</span>
                </h6>
              </div>
              <div className="col-12 col-lg-auto">
                <img
                  width="36"
                  height="36"
                  src={IconCities}
                  alt={`${data.cities} Cities`}
                />
                <h6 className="mt-3">
                  {numberFormat(data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-auto mx-auto">
            <div
              className="hero-image-placeholder"
              style={{ width: 540, height: 370 }}
            >
              <img
                width={500}
                className="img-fluid position-absolute"
                src={ImageHero}
                alt="Hotel Picture"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                width={500}
                className="img-fluid position-absolute"
                src={ImageHeroFrame}
                alt="Hotel Picture Frame"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
