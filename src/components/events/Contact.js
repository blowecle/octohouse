import React from 'react'

const Contact = () => {
  return (
    <form method="POST" data-netlify="true" name="contact" className='contact-form'>
    <input
    type="hidden"
    name="form-name"
    value="contact"
    />
    <input
    className='name-input'
    name="name"
    type="text"
    placeholder="Your name"
    required
    />
    <input
    className='email-input'
    name="email"
    type="email"
    placeholder="Your email"
    required
    />
    <textarea
    className='message-input'
    name="message"
    placeholder="Further information"
    required
    ></textarea>
    <div className='button-wrapper'>
      <button type="submit">Send</button>
    </div>
</form>
  )
}

export default Contact;