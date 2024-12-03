import React from 'react'

export default function Contact() {
  const handleFormSubmit = (formData) => {
    //console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
      console.log(formInputData);
      
  }
  return (
    <section className='section-contact'>
      <h2 className='container-title'>Contact Us</h2>
    
    <div className='contact-wrapper container'>
      <form action={handleFormSubmit}>
        <input 
        type="text"
        className='form-control'
        placeholder='enter your name'
        name='username'
        required
        autoComplete='false' 
        />

      <input 
        type="email"
        className='form-control'
        placeholder='enter your email'
        name='email'
        required
        autoComplete='false' 
        /> 

        <textarea 
        type="text"
        rows="10"
        placeholder='enter your message'
        name='message'
        required
        autoComplete='off' 
        /> 
        <button type='submit' value='send'>Send</button>
      </form>
    </div>
  </section>
)
}
