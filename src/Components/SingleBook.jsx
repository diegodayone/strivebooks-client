import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import BASE_URL from "../Data/config.js";
// import fantasy from "../Data/fantasy.json";
// import horror from "../Data/horror.json";
// import history from "../Data/history.json";
// import romance from "../Data/romance.json";
// import scifi from "../Data/scifi.json";
import GetB from "./ToggleComments.jsx";
import { type } from "os";
import { throwStatement } from "@babel/types";
import BookPagination from "./pagination.jsx";
import { Link } from "react-router-dom"

let shows;
let lat;
// let db = {
//   fantasy: fantasy,
//   romance: romance,
//   scifi: scifi,
//   horror: horror,
//   history: history
// };

class BookList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      nComments: 0,
      asin: "",
      books: []
    };
  }

  loadComment = async id => {
    var getId = id;
    console.log(getId);
    var response = await fetch("https://strive-books-api.herokuapp.com/books/"+getId +"/comments/" , {
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    var json = await response.json();
    this.setState({
      nComments: json.length
    });
    this.setState({
      comments: json
    });
    console.log(json);
    return json;
  };

  render() {
    console.log(this.props.genre);

    shows = this.state.books.slice(this.props.min, this.props.max).map((item, index) => {
      return (
        <div key={index}>
          <div className="row mb-2 pb-1">
            <div className="col-4 col-sm-4">
              <div className="">
                <Link to={"/bookdetails/" + item.asin } >
                <img className="" src={item.img} alt={item.title} />
                </Link>
              </div>
            </div>
            <div className="col-8 col-sm-8 info-book">
              <h3>{item.title}</h3>
              <p>
                <strong>Price: </strong>$ {item.price}
              </p>
              <Button onClick={() => this.loadComment(item.asin)}>Show Comments</Button>
            </div>
          </div>
          <hr />
        </div>
      );
    });

    return (<>
    {this.state.comments && this.state.comments.map(x => <div>
      {x.UserName} : {x.Text} -- {x.Date}
    </div>)}
    {shows}
    </>);
  }

  componentDidMount = async () => {
    var res = await fetch(BASE_URL + "books?category=" + this.props.genre);
    var books = await res.json();
    this.setState({ books: books });
  };

  componentDidUpdate = async oldProps => {
    console.log(oldProps);
    if (oldProps.genre != this.props.genre || oldProps.searchQuery != this.props.searchQuery) {
      var url = BASE_URL + "books?category=" + this.props.genre;
      if (this.props.searchQuery && this.props.searchQuery.length >= 3) url += "&title=" + this.props.searchQuery;

      var res = await fetch(url);
      var books = await res.json();
      this.setState({ books: books });
    }
  };
}

export default BookList;
