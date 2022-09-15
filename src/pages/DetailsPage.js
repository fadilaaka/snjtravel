import React, { Component } from "react";
import Header from "parts/Header";
import ItemDetails from "json/itemDetails.json";
import PageDetailsTitle from "parts/PageDetailsTitle";
import DetailImage from "parts/DetailImage";
import DetailDescription from "parts/DetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimonial from "parts/Testimonial";
import Footer from "parts/Footer";
import { Fade } from "react-reveal";
export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "/" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header></Header>
        <PageDetailsTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <DetailImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pe-5">
              <Fade bottom>
                <DetailDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm itemDetails={ItemDetails} />
              </Fade>
            </div>
          </div>
        </section>

        <Categories data={ItemDetails.categories} />
        <Testimonial data={ItemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}
