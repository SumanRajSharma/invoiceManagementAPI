# Invoice Management API

## Overview
This project is an API developed using Node.js and MongoDB, leveraging the Mongoose library. It is specifically designed to assist in creating and managing invoices, tailored to specific business needs. This document outlines the structure and functionalities of the API, showcasing the API building skills and approach to problem-solving.

## Features
- Create, view, edit, and delete invoices
- Detailed invoice structure including dates, rates, and services
- Pagination for viewing multiple invoices

## Technology Stack
- **Node.js**: JavaScript runtime for building the server-side application
- **MongoDB**: NoSQL database for storing invoice data
- **Mongoose**: MongoDB object modeling tool for Node.js

## Project Structure
### Models
- **InvoiceSchema**: Defines the structure of invoice data including fields for dates, rates, services, and more.

### API Endpoints
1. **Create Invoice**
   - Endpoint: `/createInvoice`
   - Method: `POST`
   - Description: Creates a new invoice.

2. **Delete Invoice**
   - Endpoint: `/deleteInvoice/:invoice_number`
   - Method: `DELETE`
   - Description: Deletes an invoice based on the invoice number.

3. **Edit Invoice**
   - Endpoint: `/editInvoice/:invoice_number`
   - Method: `PUT`
   - Description: Updates an invoice based on the invoice number.

4. **View Invoice**
   - Endpoint: `/viewInvoice/:invoice_number`
   - Method: `GET`
   - Description: Retrieves a specific invoice by invoice number.

5. **View Invoices**
   - Endpoint: `/viewInvoices`
   - Method: `GET`
   - Description: Lists all invoices with pagination options.

## Usage Examples
### Creating an Invoice
```javascript
POST /createInvoice
{
  "invoice_number": 123,
  "issue_date": "2023-01-01",
  // additional fields...
}
```
### Deleting an Invoice
```javascript
DELETE /deleteInvoice/123
```

### Editing an Invoice
```javascript
PUT /editInvoice/123
{
  // updated fields...
}
```

### Viewing a Specific Invoice
```javascript
GET /viewInvoice/123
```

### Viewing All Invoices
```javascript
GET /viewInvoices?page=1&limit=10
```


