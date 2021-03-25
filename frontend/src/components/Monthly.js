import React from 'react';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_XXXXXXXX8kCVHQLbZeXLrN4gx00Qs5Zc35n');

// const SUCCESS = process.env.NODE_ENV === 'production'
//   ? 'http://myapidomain.com'
//   : 'http://localhost:3000';

// const SUCCESS = 'http://localhost:7000';

const SUCCESS = 'https://test-fion.herokuapp.com/';


function Monthly() {
    const handleClick = async(event) => {

        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [
  
              {price: 'price_1IAZZCJTN8QkkE46mKHkikS7', quantity: 1}
            ],
            mode: 'subscription',
            successUrl: (SUCCESS),
            cancelUrl: 'https://example.com/cancel',
          });
          
    };  
    const handleClick2 = async(event) => {

        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [
  
              {price: 'price_1IAZZCJTN8QkkE46dkAAkxOU', quantity: 1}
            ],
            mode: 'subscription',
            successUrl: (SUCCESS),
            cancelUrl: 'https://example.com/cancel',
          });
          
    };  
    const handleClick3 = async(event) => {

        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [
  
              {price: 'price_1IAZZCJTN8QkkE46HtcCE2jk', quantity: 1}
            ],
            mode: 'subscription',
            successUrl: (SUCCESS),
            cancelUrl: 'https://example.com/cancel',
          });
          
    };
    const handleClick4 = async(event) => {

        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [
  
              {price: 'price_1IAZZCJTN8QkkE46lAJK2tgy', quantity: 1}
            ],
            mode: 'subscription',
            successUrl: (SUCCESS),
            cancelUrl: 'https://example.com/cancel',
          });
          
    }
    return (
        <div className="monthly">
        <button className="btn-child5" role="link" onClick={handleClick}>
          £5/Month
        </button>
        <button className="btn-child6" role="link" onClick={handleClick2}>
          £10/Month
        </button>
        <button className="btn-child7" role="link" onClick={handleClick3}>
          £15/Month
        </button>
        <button className="btn-child8" role="link" onClick={handleClick4}>
          £20/Month
        </button>
        </div>
      );
}

export default Monthly;