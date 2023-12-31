import React from "react";

const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    additems:(item) => {},
    removeItem : (id) => {}
})

export default CartContext