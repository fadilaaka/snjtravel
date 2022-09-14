import React, { Component } from "react";
import Header from "parts/Header";
import ItemDetails from "json/itemDetails.json";
import PageDetailsTitle from "parts/PageDetailsTitle";
import DetailImage from "parts/DetailImage";
import DetailDescription from "parts/DetailDescription";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header></Header>
        <PageDetailsTitle
          breadcrumb={breadcrumb}
          data={ItemDetails}
        ></PageDetailsTitle>
        <DetailImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pe-5">
              <DetailDescription data={ItemDetails}></DetailDescription>
            </div>
            <div className="col-5">Booking Form</div>
          </div>
        </section>
      </>
    );
  }
}
