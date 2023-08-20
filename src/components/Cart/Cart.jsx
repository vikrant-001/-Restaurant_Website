import { useContext } from 'react';
import classes from './Cart.module.css'
import Model from './Model';
import CartItems from './CartItems'
import CartContext from '../../store/Cart-context';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItem = cartCtx.items.length > 0;

    const cartItemAddHandler = (item) => {
        cartCtx.additems({...item,amount:1});
    }

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }

    const cartItems = <ul className={classes['cart-items']}>
    {cartCtx.items.map((item) => (
        <CartItems 
        key = {item.id}
        name={item.name}
        amount = {item.amount}
        price = {item.price}
        onRemove = {cartItemRemoveHandler.bind(null,item.id)}
        onAdd = {cartItemAddHandler.bind(null , item)}
        />))}
    </ul>;

    return <Model>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount </span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItem && <button className={classes.button}>Order</button>}
        </div>
    </Model>
}

export default Cart