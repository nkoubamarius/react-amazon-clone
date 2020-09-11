import React, { forwardRef } from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

const CheckoutProduct= forwardRef(({id,image,title,price, rating, hideButton},ref)=> {
    const [{basket}, dispatch] =useStateValue();

    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <div className="checkoutProduct" ref={ref}>
            <img className="checkoutProduct__image" src={image} />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                {Array(rating)
                .fill().map((_,i)=>(
                    <p>⭐</p>
                ))}
            </div>
            {!hideButton && (
                <button onClick={removeFromBasket}>remove from basket</button>
            )}      
           
            </div>
            
        </div>
    )
})

export default CheckoutProduct
