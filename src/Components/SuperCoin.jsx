import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const SuperCoin = () => {
    const [superCoins, setSuperCoins] = useState({});
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount2 = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    useEffect(() => {
    if (totalAmount2 >= 100 && totalAmount2 < 200) {
        setSuperCoins(10);
    } else if (totalAmount2 >= 200 && totalAmount2 < 300) {
        setSuperCoins(20);
    } else if (totalAmount2 >= 300 && totalAmount2 < 400) {
        setSuperCoins(30);
    } else if (totalAmount2 >= 400) {
        setSuperCoins(Math.round(10*totalAmount2/100));
    } else {
        setSuperCoins(0);
    }
    }, [totalAmount2]);

    return (
        <>
        <div className="super-coins" style={{textAlign:'center'}}>
            <h2 className="super-coins-title">Super Coins</h2>
            <p className="super-coins-info">You will earn {superCoins} super coins with this purchase.</p>
        </div>
        </>
    )
} 

export default SuperCoin