import React, { useState } from 'react'
import { PaymentElement, LinkAuthenticationElement } from '@stripe/react-stripe-js'
import { useStripe, useElements } from '@stripe/stripe-js'

function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet load
            // Make sure to disable form submission until Stripe.js has load
            return;
        }
        setIsLoading(true)

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/completion`,
            },
        });

        // This point will only be reached if there is an immediate error w
        // confirming the payment. Otherwise, your customer will be redirect to return_url.
        // For some payment method like ideal, be redirect to an intermediate site first to authorize the pay redirected to the return _url
        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message)
        } else {
            setMessage("An unexpected error occur");
        }

        setIsLoading(false)
    }
    return (
        <form id='payment-form' onSubmit={handleSubmit}>
            <LinkAuthenticationElement id="link-authentication-element" />
            <PaymentElement id="payment-element" />
            <button disabled={isLoading || !stripe || !elements} id="submit">
                <span id="button-text">
                    {isLoading ? <div className='spinner' id='spinner'></div> : "Pay now"}
                </span>
            </button>
            {message && <div id="payment-message">{message}</div>}
        </form>
    )
}

export default CheckoutForm

