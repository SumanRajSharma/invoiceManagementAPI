const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String }
});

const InvoiceSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        invoice_number: {
            type: Number,
            required: true,
            unique: true
        },
        issue_date: {
            type: Date,
            required: true
        },
        start_of_week: {
            type: Date,
            required: true
        },
        rates: {
            friday: { type: Number },
            monday: { type: Number },
            saturday: { type: Number },
            sunday: { type: Number },
            thursday: { type: Number },
            tuesday: { type: Number },
            wednesday: { type: Number }
        },
        services: [serviceSchema],
        days: {
            monday: {
                amount: { type: Number },
                service: serviceSchema,
                date: { type: Date },
                hours: { type: Number },
                is_public_holiday: { type: Boolean },
                is_day_off: { type: Boolean },
                is_sleep_over: { type: Boolean },
                rate: { type: Number }
            },
            tuesday: {
                amount: { type: Number },
                service: serviceSchema,
                date: { type: Date },
                hours: { type: Number },
                is_public_holiday: { type: Boolean },
                is_day_off: { type: Boolean },
                is_sleep_over: { type: Boolean },
                rate: { type: Number }
            },
            wednesday: {
                amount: { type: Number },
                service: serviceSchema,
                date: { type: Date },
                hours: { type: Number },
                is_public_holiday: { type: Boolean },
                is_day_off: { type: Boolean },
                is_sleep_over: { type: Boolean },
                rate: { type: Number }
            },
            thursday: {
                amount: { type: Number },
                service: serviceSchema,
                date: { type: Date },
                hours: { type: Number },
                is_public_holiday: { type: Boolean },
                is_day_off: { type: Boolean },
                is_sleep_over: { type: Boolean },
                rate: { type: Number }
            },
            friday: {
                amount: { type: Number },
                service: serviceSchema,
                date: { type: Date },
                hours: { type: Number },
                is_public_holiday: { type: Boolean },
                is_day_off: { type: Boolean },
                is_sleep_over: { type: Boolean },
                rate: { type: Number }
            },
            saturday: {
                amount: { type: Number },
                service: serviceSchema,
                date: { type: Date },
                hours: { type: Number },
                is_public_holiday: { type: Boolean },
                is_day_off: { type: Boolean },
                is_sleep_over: { type: Boolean },
                rate: { type: Number }
            },
            sunday: {
                amount: { type: Number },
                service: serviceSchema,
                date: { type: Date },
                hours: { type: Number },
                is_public_holiday: { type: Boolean },
                is_day_off: { type: Boolean },
                is_sleep_over: { type: Boolean },
                rate: { type: Number }
            }
        },
        weekly_hours: {
            type: Number,
            required: true
        },
        weekly_amount: {
            type: Number,
            required: true
        }
    },
    { timestamps: true },
);

module.exports = InvoiceSchema;
