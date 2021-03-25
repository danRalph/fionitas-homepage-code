const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const CORS_WHITELIST = require('./constants/frontend');

const corsOptions = {
  origin: (origin, callback) =>
    (CORS_WHITELIST.indexOf(origin) !== -1)
      ? callback(null, true)
      : callback(new Error('Not allowed by CORS'))
};

const configureServer = app => {
  app.use(cors());

  app.use(bodyParser.json());
};




module.exports = configureServer;






// const path = require('path')
// const express = require('express')
// const bodyParser = require('body-parser')
// const postCharge = require('stripe')
// require('dotenv').config()


// const app = express()
// const router = express.Router()
// const port = process.env.PORT || 7000


// // router.post('/stripe/charge', postCharge)
// // router.all('*', (_, res) => 
// //     res.json({ message: 'please make a POST request to /stripe/charge'})
// // )

// const configureStripe = require('stripe');

// require('dotenv').config();

// const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
//     ? 'sk_live_MY_SECRET_KEY'
//     : 'sk_test_51HihsDEOGtlYkxQ01tJ4elq0aiYuPHzuccEPZWL9PPIgQc3mpqXQlo95ALAf1pbFBckk8tqp2HIdYVgh1axabSUO00ssagE5Fl';

// const stripe = configureStripe(STRIPE_SECRET_KEY);

// const postStripeCharge = res => (stripeErr, stripeRes) => {
//     if (stripeErr) {
//       res.status(500).send({ error: stripeErr });
//     } else {
//       res.status(200).send({ success: stripeRes });
//     }
//   }
//   const configureRoutes = app => {
//     paymentApi(app);
//   };

// const paymentApi = app => {
//     app.get('/', (req, res) => {
//       res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
//     });
  
//     app.post('/', (req, res) => {
//       stripe.charges.create(req.body, postStripeCharge(res));
//     });
  
//     return app;
//   };

// app.use((_, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//     )
//     next()
//   })
//   app.use(bodyParser.json())
//   app.use('/api', router)


// app.use(express.static(path.join(__dirname, 'build')))

// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// })

// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// })
