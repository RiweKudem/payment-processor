# Payment Processor
================

A secure and efficient payment processing system for handling various payment methods.

## Description
------------

The payment-processor is a Python-based, open-source software designed to facilitate secure and efficient payment processing for various payment methods. It provides a robust and scalable solution for merchants to integrate payment processing into their applications.

### Key Features
---------------

*   **Multi-Payment Gateway Support**: Supports multiple payment gateways, including Stripe, PayPal, and Authorize.net
*   **Payment Method Encryption**: Ensures secure payment method encryption to protect sensitive customer data
*   **Transaction History**: Provides a comprehensive transaction history for merchants to track payments
*   **Real-time Notifications**: Sends real-time notifications for payment successes, failures, and cancellations
*   **Payment Confirmation**: Verifies payment confirmations to prevent unauthorized transactions

## Technologies Used
-----------------

*   **Python 3.9**
*   **Flask**: For building the web application
*   **SQLite**: For storing payment information and transaction history
*   **Stripe API**: For payment gateway integration
*   **PyJWT**: For JSON Web Token (JWT) generation and verification
*   **requests**: For making HTTP requests to the payment gateways

## Installation
------------

### Prerequisites

*   Install Python 3.9 or later
*   Install the required dependencies using pip:

    ```bash
    pip install Flask sqlite3 requests stripe pyjwt
    ```

### Running the Application

*   Clone the repository and navigate to the project directory
*   Create a new `config.py` file with your Stripe API keys and other configuration settings
*   Run the application using the following command:

    ```bash
    python app.py
    ```

### Testing the Application

*   Send a POST request to the `/process_payment` endpoint with the required payment information to simulate a payment transaction
*   Use a tool like Postman or cURL to send the request

## Usage
-----

### Payment Processing

To process a payment, send a POST request to the `/process_payment` endpoint with the following JSON payload:

```json
{
    "payment_method": "stripe",
    "amount": 10.99,
    "currency": "USD",
    "payment_gateway_token": "stripe_payment_token"
}
```

Replace `stripe_payment_token` with the actual payment token received from the Stripe payment gateway.

### Retrieving Transaction History

To retrieve the transaction history, send a GET request to the `/transactions` endpoint:

```bash
GET /transactions
```

### Retrieving Payment Confirmation

To retrieve the payment confirmation, send a GET request to the `/confirm_payment` endpoint with the payment ID:

```bash
GET /confirm_payment?payment_id=12345
```