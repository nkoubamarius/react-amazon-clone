import React, {useState, useEffect} from 'react'
import './Payment.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import {Link} from 'react-router-dom';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import axios from './axios';
import {useHistory} from 'react-router-dom';
import {db} from './firebase';

function Payment() {

    const history=useHistory();
    const [{basket,user},dispatch] = useStateValue();

    const [error, setError] = useState(null);
    const [disabled,setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);
    const stripe=useStripe();
    const elements=useElements();


    const getBasketTotal=(basket)=>{
        const total = basket.reduce((totalPrices, bask) => totalPrices + bask.price, 0);
        //return 5;
        return total
    }

    useEffect(() => {
       const getClientSecret = async ()=>{
           const response=await axios({
               method:'post',
               url: `/payments/create?total=${getBasketTotal(basket)*100}`
           });
           setClientSecret(response.data.clientSecret);
       }
       getClientSecret();
    }, [basket]);

    console.log('THE SECRET is',clientSecret)

    
    const handleSubmit=async (event)=>{
        event.preventDefault();
        setProcessing(true);

        const payload=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            //payment intent =payment confirmation
            db.collection('users')
            .doc(user?.uid).collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket:basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })


            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type:'EMPTY_BASKET'
            })

            history.replace('/orders')

        })
    }

    const handleChange=event=>{
        setDisabled(event.empty);
        setError(event.error ? event.error.message:"");
    }

    return (
        <div className="payment">
            <div className="payment__container">

                <h1>Checkout (<Link to="/checkout">{basket?.length} Items)</Link></h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Adress</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Agdal</p>
                        <p>Morocco</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item=>(
                            <CheckoutProduct 
                                id={item.id}
                                rating={item.rating}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>


                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat renderText={(value)=>
                                    <>
                                        <p>
                                        <strong>Order Total : &nbsp;
                                            {`${value}`}</strong>
                                        </p>
                                        
                                    </>
                                    }
                                    decimalScale={2}
                                    //value={basket.length}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    />
                                <button disabled={processing || disabled || succeeded}> 
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
