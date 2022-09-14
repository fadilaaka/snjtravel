import React from "react";
import Button from "components/Button";
import { Fade } from "react-reveal";

export default function MostPicked({ refMostPicked, data }) {
  return (
    <section className="container" ref={refMostPicked}>
      <Fade>
        <h4 className="mb-3">Most Picked</h4>
        <div className="container-grid">
          {data.map((item, index) => {
            return (
              <div
                key={`mostpicked-${index}`}
                className={`item column-4 ${index === 0 ? "row-2" : "row-1"}`}
              >
                <Fade bottom delay={500 * index}>
                  <div className="card card-feature">
                    <div className="tag">
                      ${item.price}
                      <span className="fw-light"> per {item.unit}</span>
                    </div>
                    <figure className="img-wrapper">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        href={`/properties/${item._id}`}
                        className="stretched-link d-block text-white text-decoration-none"
                      >
                        <h5>{item.name}</h5>
                      </Button>
                      <span>
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
