# Invoice App

Invoice App is an invoice management system. It allows users to create and view their invoices. The app is built using React and Node.js.

Payment using Razorpay. payment link is sent to user's email. User can click on payment link to pay invoice. Payment link is valid for 5 minutes.

## Links

First start the backend API and then start the frontend app.

[Invoice Frontend APP](https://invoice-blog.netlify.app/)

[Invoice Backend APP](https://invoice-backend-ruln.onrender.com/)

## Testing

    - npm install
    - npm run dev

## .env

    VITE_WIP=false
    VITE_RAZORPAY_KEY_ID=
    VITE_BACKEND_URL=<https://invoice-backend-ruln.onrender.com/>
    VITE_BACKEND_URL_LOCAL=<http://localhost:5000>
    VITE_isLOCAL=true

## Page URLs

    - "/" - Home
    - "/login" - Login
    - "/signup" - Signup
    - "/dashboard" - User Dashboard

## Functionality

    - Login - with email and password
    - Registration - with name, email and password
    - User Dashboard
    - Manage invoices - create, edit, delete

## Git Repository

[Backend Repository](https://github.com/automationblog/invoice_backend)

[Frontend Repository](https://github.com/automationblog/invoice_frontend)
