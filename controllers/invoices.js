const mongoose = require('mongoose');
const mongoConfig = require('../config/mongodb');
const InvoiceSchema = require('../models/invoice');


// Create the Invoice model
const Invoice = mongoose.model(mongoConfig.mongodb.collection, InvoiceSchema);

exports.createInvoice = (req, res) => {
    // Create a new invoice document
    const invoice = new Invoice({
        _id: new mongoose.Types.ObjectId(),
        invoice_number: req.body.invoice_number,
        issue_date: req.body.issue_date,
        start_of_week: req.body.start_of_week,
        rates: req.body.rates,
        days: req.body.days,
        weekly_hours: req.body.weekly_hours,
        weekly_amount: req.body.weekly_amount,
    });

    // Save the invoice to the database
    invoice.save((err, result) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
            return;
        }

        console.log('Created a new invoice');
        res.send(result);
    });
};

exports.deleteInvoice = (req, res) => {
    // Delete the invoice with the matching invoice_number
    Invoice.deleteOne({ invoice_number: req.params.invoice_number }, (err) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
            return;
        }

        console.log('Deleted an invoice');
        res.sendStatus(200);
    });
};

exports.editInvoice = (req, res) => {
    // Update the invoice with the matching invoice_number
    Invoice.updateOne({ invoice_number: req.params.invoice_number }, { $set: req.body }, (err) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
            return;
        }

        console.log('Updated an invoice');
        res.sendStatus(200);
    });
};

exports.viewInvoice = (req, res) => {
    // Find the invoice with the matching invoice_number
    console.log(req.params.invoice_number);
    Invoice.findOne({ invoice_number: req.params.invoice_number }, (err, result) => {
        if (err) {
            console.error(err);
            res.sendStatus(500);
            return;
        }

        console.log('Viewed an invoice');
        console.log(result);
        res.send(result);
    });
};

exports.viewInvoices = (req, res) => {
    // Find all invoices
    // Calculate the limit and skip values based on the page number and number of items per page
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const skip = (page - 1) * limit;

    Invoice.find({})
        .sort({ invoice_number: -1 })
        .skip(skip)
        .limit(limit)
        .exec((err, invoices) => {
            if (err) {
                return res.status(400).send(err);
            }

            // Calculate the total number of pages
            Invoice.countDocuments((err, count) => {
                if (err) {
                    return res.status(400).send(err);
                }

                res.send({
                    invoices: invoices,
                    totalPages: Math.ceil(count / limit)
                });
            });
        });
};
