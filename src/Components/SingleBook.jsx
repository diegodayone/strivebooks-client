import React from 'react';
import BASE_URL from "../Data/config"

class SingleBook extends React.Component {
    state = {  }

    deleteFromCart = async asin =>{
        await fetch(BASE_URL + "cart/diego/delete/" + asin, {method:"DELETE"})
    }

    render() { 
        return (
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-md-4">
                        <img src={this.props.book.Image}></img>
                    </div>
                    <div className="col-md-8">
                    <h1>{this.props.book.Title}</h1>
                        <h3>{this.props.book.Genre}</h3>
                        <h4>Quantity: {this.props.book.Quantity} </h4>
                        <h4> {this.props.book.Price} </h4>
                        <h4>Total: {this.props.book.Total}</h4>
                        <button onClick={() => this.deleteFromCart(this.props.book.ASIN)}>Remove One from Cart</button>
                    </div>
                </div>
        </div>
     
        );
    }
}
 
export default SingleBook;