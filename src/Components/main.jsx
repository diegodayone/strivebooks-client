import React, { Component } from "react";
import NavBook from "./navbar";
import JumbBook from "./jumbotron";
import Latest from "./latest";
import Warn from "./warningSign";
import InfoNav from "./infoNav";
import NewsBox from "./newsBox";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewBooks from "./newBooks";
import Footer from "./footer";
import BookDetails from "./BookDetails"
import Cart from "./Cart";

class MyBook extends Component {
  render() {
    return (
      <Router>
        <InfoNav />

        <Route
          exact
          path="/"
          render={() => (
            <>
              <div className="container">
                <JumbBook />
                <hr />
                <NewsBox />
                <hr />
                <NewBooks />
                <hr />
              </div>
              <Footer />
            </>
          )}
        />
        <Route path="/genre/:genre" component={Latest} />
        <Route path="/bookdetails/:asin" component={BookDetails} />
        <Route path="/shoppingcart" component={Cart} />
      </Router>
    );
  }
}
export default MyBook;
