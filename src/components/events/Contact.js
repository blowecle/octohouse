import React from 'react'

import '../../css/contact.css'

//any modificationis here must also be made to form.html in the public folder
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
        placeholder="name"
        required
        />
        <input
        className='email-input'
        name="email"
        type="email"
        placeholder="email"
        required
        />
        <textarea
        className='message-input'
        name="message"
        placeholder="further information"
        required
        ></textarea>
        <div className='form-button-wrapper'>
          <button type="submit">Send</button>
        </div>
    </form>
  )
}

export default Contact;