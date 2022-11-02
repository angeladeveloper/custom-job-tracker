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

const estimate ={
  jobLayers:{
    isPickup:Boolean,
    isPacking:Boolean,
    isShipping:Boolean,
    isWhiteGlove:Boolean
  },
  jobNotes:{
    shortDescription: String,
    shippingNotes: String,
    inventoryNotes: String,
  },
  inventory:[Object]
}

inventory={
  name: String,
  value: String,
  length: String,
  width: String,
  height: String,
  weight: String,
  cPack: String,
  qty: String,
  isInsured: Boolean,
  isHighValue:Boolean,
  isHighlyFragile: Boolean,
  specialPackInstructions:{
    isSPack:Boolean,
    packDescription: String
  }
}