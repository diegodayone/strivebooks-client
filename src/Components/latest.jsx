import React, { Component } from "react";
import MyBadge from "./BadgeBook";
import items from "../Data/fantasy.json";
import fantasy from "../Data/fantasy.json";
import horror from "../Data/horror.json";
import history from "../Data/history.json";
import romance from "../Data/romance.json";
import scifi from "../Data/scifi.json";
import Single from "./BookList";
import BookPagination from "./pagination";
import FilterBar from "./filterBar";

class Latest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageId: ""
    };
  }

  render() {
    return (
      <div className="container-fluid title-genres">
        <h2 className="mb-2">{this.state.pageId}</h2>
        <div className="row">
          <div className="col-2">
            <FilterBar />
          </div>
          <div className="col-10">
            <BookPagination genre={this.props.match.params.genre} />
          </div>
        </div>
      </div>
    );
  }
}
export default Latest;
