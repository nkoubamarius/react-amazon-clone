import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import {useHistory} from 'react-router-dom';

function Subtotal() {

    const history=useHistory();

    const [{basket}, dispatch] =useStateValue();

    const getBasketTotal=(basket)=>{
        const total = basket.reduce((totalPrices, bask) => totalPrices + bask.price, 0);
        //return 5;
        return total
    }


    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value)=>
            <>
                <p>
                    Subtotal ({basket.length} items):
                    <strong>{`${value}`}</strong>
                </p>
                {/* <p>
                    Subtotal (0 items):
                    <strong>0</strong>
                </p> */}
                <small className="subtotal__gift">
                    <input type="checkbox"/>This order contains a gift
                </small>
            </>
            }
            decimalScale={2}
            //value={basket.length}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button onClick={e=>history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
