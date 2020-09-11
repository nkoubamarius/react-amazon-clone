import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './DeliverHeader.css';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

function DeliverHeader() {
    return (
        <div className="header__d">
            <div className="header__deliver">
                <LocationOnOutlinedIcon />
            </div>
            <div className="header__option">
                <span className="header__optionLineOne">Deliver to</span>
                <span className="header__optionLineTwo">Morocco</span>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineTwo">Today's Deals</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineTwo">Customer Service</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineTwo">Gift Cards</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineTwo">Registry</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineTwo">Sell</span>
                </div>
            </div>

        </div>
    )
}

export default DeliverHeader
