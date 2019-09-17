import React from "react";
import BookList from "./SingleBook";

export default class BookPagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 8,
      number: "",
      check: true,
      searchQuery: ""
    };
  }

  componentDidMount = () => {
    this.setState({ number: this.state.min + " - " + this.state.max });
    if (this.state.min == 0 && this.state.max == 8) {
      this.setState({ check: true });
    }
  };

  sliceBook = value => {
    switch (value.currentTarget.value) {
      case "0":
        if (this.state.min == 0 && this.state.max == 8) {
          this.setState({ check: true });
        } else {
          this.state.min -= 8;
          this.state.max -= 8;
          this.setState({ number: this.state.min + " - " + this.state.max });
          console.log(this.state.number);
        }

        break;
      case "1":
        this.state.min += 8;
        this.state.max += 8;
        this.setState({ number: this.state.min + " - " + this.state.max });
        this.setState({ check: false });
        console.log(this.state.number);
        break;
    }
  };

  count = ev => {
    switch (ev.currentTarget.value) {
      case "0":
        this.setState({ counter: this.state.counter - 1 });
        break;
      case "1":
        this.setState({ counter: this.state.counter + 1 });
    }
  };
  render() {
    return (
      <div className="mt-5">
        <input
          type="text"
          value={this.state.searchQuery}
          onChange={val => this.setState({ searchQuery: val.target.value })}
        />
        <h2>{this.props.genre}</h2>
        <BookList
          min={this.state.min}
          max={this.state.max}
          genre={this.props.genre}
          searchQuery={this.state.searchQuery}
        />

        <hr />
        <div className="d-flex justify-content-center mb-2">
          <button className="mr-3 btn-page" disabled={this.state.check} value={0} onClick={this.sliceBook}>
            Prev
          </button>
          <p>{this.state.number}</p>
          <button className="ml-3 btn-page" value={1} onClick={this.sliceBook}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
