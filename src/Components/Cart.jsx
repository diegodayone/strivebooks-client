import React from 'react';
import BASE_URL from "../Data/config"
import SingleBook from './SingleBook';

class Cart extends React.Component {
    state = { 
        total: 0,
        cart: []
     }
    render() { 
        return ( 
        <div className="container mt-5">
            {this.state.cart.length > 0 && 
                <h2>You have {this.state.cart.map(x => x.Quantity).reduce((x,y) => x+y, 0)} elements in your Shopping cart for a total of {this.state.total}
            </h2>}

            {this.state.cart.map(cart =>
                <SingleBook book={cart} />)}
        </div> );
    }

    componentDidMount = async()=>{

        var res = await fetch(BASE_URL + "cart/diego");
        var cartElements = await res.json();

        this.setState({ cart: cartElements.books, total: cartElements.total})
    }
}
 
export default Cart;