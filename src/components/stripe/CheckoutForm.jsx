import React, { useState } from 'react'
import { PaymentElement, LinkAuthenticationElement} from '@stripe/react-stripe-js'
import { useStripe, useElements } from '@stripe/stripe-js'

function CheckoutForm() {
  const stripe = useStripe();
  const element = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !element) {
      // Stripe.js has not yet load
      // Make sure to disable form submission until Stripe.js has load
      return;
    }
    setIsLoading(true)
  }
  return (
    <div>
      
    </div>
  )
}

export default CheckoutForm

