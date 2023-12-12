const express = require('express');
const router = express.Router();
const InvoiceController = require('../controllers/invoices');
const bodyParser = require('body-parser').json();

// Create a new invoice
router.post('/', bodyParser, InvoiceController.createInvoice);

// Delete an invoice by invoice_number
router.delete('/:invoice_number', InvoiceController.deleteInvoice);

// Edit an invoice by invoice_number
router.put('/:invoice_number', bodyParser, InvoiceController.editInvoice);

// View an invoice by invoice_number
router.get('/:invoice_number', InvoiceController.viewInvoice);

// View all invoices
router.get('/', InvoiceController.viewInvoices);

module.exports = router;
