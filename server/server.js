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
    }
  },

  isPacking: {
    type: String,
  },
  shipping:{
    isShipping: {
      type: String,
      default: addresses.shippingAddress
    },
    isWhiteGlove: {
      type: String,
    },
    isCustomerPickUp: {
      type: String,
    },
    trackingNumber:{
      type: String
    },
    referenceNumber:{
      type: String
    },
    bolNumber:{
      type: String
    },
    podNumber:{
      type: String
    }
  },
  item:{
    itemName:{
      type: String
    },
    itemQty:{
      type: Number
    }
  },
  payment:{
    payee: {
      type: String,
      default: 'customer_id'
    },
    hasPaid: {
      type: String,
      default: "Needs-invoiced",
      enum: ["Not Paid", "Paid", "Past-Due", "Partial", "Care-needed", "Needs-invoiced"]
    },
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
    customerReceiveBy: {
      type: Date,
    },
    packBy: {
      type: Date,
    },
    receiveBy: {
      type: Date,
    },
    shipBy: {
      type: Date,
    }
  },
  addresses: {
    originAddress: {
      city: String,
      streetAddress: String,
      zipCode: String,
    },
    shippingAddress: {
      city: String,
      streetAddress: String,
      zipCode: String,
    },
    deliveryAddress: {
      city: String,
      streetAddress: String,
      zipCode: String,
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
  phone: {
    type: String,
    required: true,
    unique: true,
    match: [/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
    , 'Must be valid phone number'],
  },
  primaryAddress: {
    type: String,
  },
  secondaryAddress: {
    type: String,
  },
  previousCust:{
    type: Boolean
  },
  jobIds:{
    type: Array
  }
}


{
  "origin": {
      "isPickup":true ,
      "isReceiving": true,
      "isDropOff":true
    },
    "isPacking": true,
    "shipping":{
      "isShipping": true,
      "isWhiteGlove": true,
      "isCustomerPickUp": false,
      "trackingNumber":"jfj344ji5j941noe",
      "referenceNumber":"4934fgfg",
      "bolNumber":"4823849-44",
      "podNumber" :"563jk"
    },
    "item":{
      "itemName":"Painting",
      "itemQty":3
    },
    "payment":{
      "payee": "0001",
      "hasPaid": "Needs-invoiced"
    },
    "status":"Active",
    "timeFrames": {
      "created_at": "08-21-2022",
      "completeBy": "08-30-2022",
      "customerReceiveBy":"08-30-2022",
      "packBy": "08-25-2022",
      "receiveBy":"08-21-2022",
      "shipBy": "08-29-2022"
    },
    "addresses": {
      "originAddress": {
        "city": "Auburn",
        "streetAddress": "123 Main St",
        "zipCode": "98002"
      },
      "shippingAddress": {
        "city": "Kent",
        "streetAddress": "344 String Ave",
        "zipCode": "98032"
      },
      "deliveryAddress": {
        "city": "Kent",
        "streetAddress": "4 Hydrope Hill",
        "zipCode": "98032"
      },
    "notes": {
      "estimateNotes": "This is an easy job",
      "onsiteNotes": "Customwe has 3 cats",
      "shippingNotes": ""
   }
  
    "_id": {
      "$oid": "63085b800af6d37ef44c74e4"
    }
  }