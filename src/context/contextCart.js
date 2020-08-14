import React, { Component } from 'react'

export const Context = React.createContext();

export class ContextCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            cart: []
        };
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart(product){
        console.log(this.state.cart);
        this.setState({
            cart: this.state.cart.concat(product)
        });
    }
    render() {
        return (
            <Context.Provider 
                value={{
                    cart: this.state.cart,
                    addToCart: this.addToCart
                }}
            >
                {this.props.children}
            </Context.Provider>
        )
    }
}
