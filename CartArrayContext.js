import React, {useState, createContext} from 'react';

export const CartArrayContext = createContext();

export const CartArrayProvider = props => {
    const [cartArray, setCartArray] = useState([]);
    return (
        <CartArrayContext.Provider value={[cartArray, setCartArray]}>
            {props.children}
        </CartArrayContext.Provider>
    )
}