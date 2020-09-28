import React, {useContext} from 'react';
import {CartArrayContext} from '../CartArrayContext.js'
import classNames from 'classnames'
import './Cart.css';

function Cart () {
    const [cartArray] = useContext(CartArrayContext);

    const finalPriceClasses = classNames({'noFinalPrice': cartArray.length === 0},
     {'finalPrice': cartArray.length > 0}
    )
    const checkOutButtonClasses = classNames({'noCheckOutButtonWrapper': cartArray.length === 0},
    {'checkOutButtonWrapper': cartArray.length > 0}
   )

    return (
        <div className="cart">
            <div className="leftPicture">
                <div className="picture" id="picture1"></div>
                <div className="picture" id="picture2"></div>
                <div className="picture" id="picture3"></div>
            </div>
            <div className="currentCartWrapper">
                <div className="cartCounter">Cart ({cartArray.length})</div>
                <div className="currentCart">
                    <div className="listOfSpecsWrapper">
                        {cartArray.map(item => {
                        return (<div className="listOfSpecs" key={item.id}>
                            <div className="clubImage" key={item.id}>
                                <img src={item.clubImage} alt={item.clubName} />
                            </div>
                            <div className="specs">
                                <div className="clubTitle">{item.clubName}</div>
                                <div className="clubSpec">{item.clubSet}</div>
                                <div className="clubSpec">{item.clubShaft}</div>
                                <div className="clubSpec">{item.clubGrip}</div>
                                <div className="clubSpec">{item.clubLieAngle}</div>
                            </div>
                        </div>)
                        })}
                    </div>
                    <div className={finalPriceClasses}>
                        <h4>Final Price: None. This is a fake site. It's free.</h4>
                    </div>
                    <div className={checkOutButtonClasses}>
                        <button className="checkOutButton" onClick={() => alert('Thank you so much for walking through this site!')} >Check Out Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;