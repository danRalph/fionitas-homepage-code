const configureStripe = require('stripe');
require('dotenv').config();

// const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
//     ? 'sk_live_MY_SECRET_KEY'
//     : 'sk_test_u2U6RqevSJh8VpJvWOMuHLbG00IzzEkEkv';

const STRIPE_SECRET_KEY = 'sk_test_XXXXXXXJh8VpJvWOMuHLbG00IzzEkEkv';


const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;