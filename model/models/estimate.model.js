const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Estimate extends Model { }

Estimate.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        is_new_customer: {
            type: DataTypes.BOOLEAN
        },
        estimate_details: {
            type: DataTypes.TEXT
        },
        estimate_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        is_receiving: {
            type: DataTypes.BOOLEAN
        },
        is_pickup: {
            type: DataTypes.BOOLEAN
        },
        is_packing: {
            type: DataTypes.BOOLEAN
        },
        is_delivery: {
            type: DataTypes.BOOLEAN
        },
        is_white_glove: {
            type: DataTypes.BOOLEAN
        },
        is_other: {
            type: DataTypes.BOOLEAN
        },
        other_type_details: {
            type: DataTypes.STRING
        },
        customer_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'customer',
                key: 'id'
            }
        },
        estimated_values: {
            type: DataTypes.STRING
        },
        location_type: {
            type: DataTypes.STRING
        },
        needs_delivery_service: {
            type: DataTypes.BOOLEAN
        },
        pickup_zipcode: {
            type: DataTypes.STRING
        },
        shipping_zipcode: {
            type: DataTypes.STRING
        },
        final_destination_zipcode: {
            type: DataTypes.STRING
        },
        pickup_street_address: {
            type: DataTypes.STRING
        },
        shipping_street_address: {
            type: DataTypes.STRING
        },
        final_destination_street_address: {
            type: DataTypes.STRING
        },
        pickup_city: {
            type: DataTypes.STRING
        },
        shipping_city: {
            type: DataTypes.STRING
        },
        final_destination_city: {
            type: DataTypes.STRING
        }, 
        pickup_state: {
            type: DataTypes.STRING
        },
        shipping_state: {
            type: DataTypes.STRING
        },
        final_destination_state: {
            type: DataTypes.STRING
        }, 
        referral: {
            type: DataTypes.STRING
        }, 
        timeframe_needed: {
            type: DataTypes.STRING
        }, 
        more_information_needed: {
            type: DataTypes.STRING
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'project'
    }
);

module.exports = Project;
