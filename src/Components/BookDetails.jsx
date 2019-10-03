import React from 'react';

import BASE_URL from "../Data/config.js";

class BookDetails extends React.Component {
    state = {
        book: {},
        comments: [],
        UserName: "",
        Text: ""
      }
    render() { 
        return (<div className="container mt-5 pt-5">
            <div className="row  mt-5 pt-5">
            <div className="col-md-4">
                <img src={this.state.book.img}></img>
                <h1>{this.state.book.title}</h1>
                <h3>{this.state.book.category}</h3>
            </div>
            <div className="col-md-6">
                {this.state.comments.map((comment, index) => <div key={index}>
                    {comment.Reviewer} : {comment.Rate} -- {comment.Description}
                </div>)}

                <div>
                    <input type="text" placeholder="Your Name..." value={this.state.UserName} onChange={val => this.setState({ UserName: val.target.value})}></input>
                    <input type="text" placeholder="Your Comment..." value={this.state.Text} onChange={val => this.setState({ Text: val.target.value})}></input>
                    <input type="button" onClick={this.sendComment} value="Send" />
                </div>
            </div>
            </div>
        </div>  );
    }

    sendComment = async()=>{
        var newComment = {
            Description: this.state.Text,
            Reviewer: this.state.UserName,
            Rate: 3
        }

        var res = await fetch(BASE_URL+ "books/" + this.state.book.asin +"/comments/",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(newComment),
            method: "POST"
        })

        var id = await res.json()
        newComment.ReviewID = id.id;
        
        //var newComment = await res.json();
        var comments = this.state.comments;
        comments.push(newComment)
        this.setState({
            comments: comments
        })
    }

    componentDidMount = async() =>{
        console.log(this.props.match)
        var asin = this.props.match.params.asin;
        var res = await fetch(BASE_URL + "books/" + asin);
        var book = await res.json();

        var response = await fetch(BASE_URL + "books/" +asin +"/comments/" , {
            headers: new Headers({
              "Content-Type": "application/json"
            })
          });
        var comments = await response.json();
        this.setState({
        book: book ,
        comments:comments
        });
    }
}
 
export default BookDetails;