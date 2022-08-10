const job = {
  customer: [{
    type: Schema.Types.ObjectId,
    ref: 'customer'
  }],
  estimate: [
    {
      type: Schema.Types.ObjectId,
      ref: 'estimate',
    }],
  layers: {
    pickup: {
      isTrue: Boolean,
      address: {
        streetAddress: String,
        zipCode: String,
        city: String,
        state: String,
        default: this.customer.address
      },
      numberOfHands: Number,
      truck: String,
      employees: [String]
    },
    packing: {
      isTrue: Boolean,
      employees: [String]
    },
    shipping: {
      isTrue: Boolean,
      address: {
        streetAddress: String,
        zipCode: String,
        city: String,
        state: String,
        default: this.customer.address
      },
      shippingCompany: String
    },
    whiteGlove: {
      isTrue: Boolean,
      address: {
        streetAddress: String,
        zipCode: String,
        city: String,
        state: String,
        default: this.customer.address
      },
      numberOfHands: Number,
      truck: String,
      employees: [String]
    },
  }
}


const customer = {
  firstName: String,
  lastName: String,
  company: String,
  careOf: String,
  address: {
    streetAddress: String,
    zipCode: String,
    city: String,
    state: String,
  },
  phoneNumber: String,
  email: String,
  referredBy: String,
  referredBy: String,
}