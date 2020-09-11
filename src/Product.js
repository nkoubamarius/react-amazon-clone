import React from 'react'
import "./Product.css"
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function Product({id,title, image, price, rating}) {

    const [{basket}, dispatch] =useStateValue();

    const addToBasket=()=>{
        //dispath the item into the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title: title,
                image: image,
                price:price,
                rating:rating
            },
        });
    }

    return (
        <div className="product">
            <div className="product__info">
                <p><strong>{title}</strong></p>
               
                <p className="product__price">
                    <small>$</small><strong>{price}</strong>
                </p>
                <div className="product_ratings">
                    {Array(rating).fill().map((_,i)=>(
                         "⭐"
                    ))}
                   
                </div>
            </div>
            <img src={image} 
            alt=""/>
            <button onClick={addToBasket}><strong>Add to basket</strong></button>

        </div>
    )
}

export default Product
