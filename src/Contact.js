import './App.css';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
    const [state, handleSubmit] = useForm("xjvlpnre");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return(
        <div>
        <div className='about text'>
            <h1>Do you have any questions? </h1>
            <h3>Do not hesitate to contact us via <br></br> <span>email </span> mochaberry@moccha.com <br></br> or give us a <span>phone call</span> via +1(365)880-26-31</h3>
        </div>
<div className='phrase'>
    <h3>Contact us</h3>

</div>
<form className='about' onSubmit={handleSubmit}>
<label className='message' htmlFor="email">
  Your email
</label>
<input
  id="email"
  type="email" 
  name="email"
/>
<ValidationError 
  prefix="Email" 
  field="email"
  errors={state.errors}
/>
<label className='message'>
  Your message
</label>
<textarea
  id="message"
  name="message"
/>
<ValidationError 
  prefix="Message" 
  field="message"
  errors={state.errors}
/>
<button className='btnsubmit' type="submit" disabled={state.submitting}>
  Send
</button>
</form>
<div className='end'>
    <h4>Monday-Sunday</h4>
    <h4>7 am - 8pm </h4>
    <h4>7700 Yonge st, Orangeville, ON </h4>
</div>

</div>
        
    )
}

export default Contact;

