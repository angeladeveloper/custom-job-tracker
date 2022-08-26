const { randomUUID } = require('crypto');
const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});



const job = {
  _id: randomUUID(),
  customer_id: {
    type: String,
  },
  origin: {
    isPickup: {
      type: String,

    },
    isReceiving: {
      type: String,

    },
    isDropOff: {
      type: String,

    },
    isPacking: {
      type: String,

    },
    isShipping: {
      type: String,

    },
    isWhiteGlove: {
      type: String,
    },
    isCustomerPickUp: {
      type: String,
    },
  },
  payee: {
    type: String,
    default: 'customer_id'
  },
  hasPaid: {
    type: String,
    default: "Needs-invoiced",
    enum: ["Not Paid", "Paid", "Past-Due", "Partial", "Care-needed", "Needs-invoiced"]
  },
  status: {
    type: String,
    enum: ["Active", "Upcoming", "Flagged", "Completed", "Past-Due", "Urgent-Care"]
  },
  timeFrames: {
    created_at: {
      type: Date,
      default: Date.now()
    },
    completeBy: {
      type: Date,
    },
    receiveBy: {
      type: Date,
    }
  },
  addresses: {
    originAdress: {
      city: String,
      street: String,
      houseNumber: String,
    },
    shippingAdress: {
      city: String,
      street: String,
      houseNumber: String,
    },
    deliveryAdress: {
      city: String,
      street: String,
      houseNumber: String,
    },
  },
  notes: {
    estimateNotes: String,
    onsiteNotes: String,
    shippingNotes: String,
    internalNotes: String,
  }

}

const customer = {
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
}