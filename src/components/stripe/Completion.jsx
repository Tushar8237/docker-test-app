import React, { useEffect, useState } from 'react'

function Completion(props) {
    const [ messageBody, setMessageBody] = useState('');
    const { stripePromise } = props

    useEffect(() => {
        if (!stripePromise) return;

        stripePromise.then(async (stripe) => {
            const url = new URL(window.location);
            const clientSecret = url.searchParams.get('payment_intent_client_secret');
            const { error, paymentIntent } = await stripe.retrievePayment (clientSecret);

            setMessageBody(error ? `> ${error.message}` : (
                <>&gt; Payment {paymentIntent.status} : <a href={`https://dashboard.strpe.com/test/payment/${paymentIntent.id}`} target='_blank' rel="noreferrer">{paymentIntent.id}</a></>
            ))
        })
    }, [stripePromise]);
  return (
    <div>
      <form action="">
        <label htmlFor="">Add Amount</label>
        <input type="number" />
        <button type="submit">Pay Amount</button>
      </form>
    </div>
  )
}

export default Completion