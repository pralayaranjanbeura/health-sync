import React from 'react'

const Contact = () => {
  return (
    <div className=' px-4 py-3 mx-auto  max-w-screen-md'>
      <h2 className='text-headingColor text-[27px] text-center'>Contact Us</h2>
      <p className='text__para mb-8 lg:mb-16 font-light text-center'>Got an technical issue ? Want to send feedback about a beta feature ? Let us know</p>
      <form action="" className='space-y-8'>
        <div>
          <label htmlFor="" className='form__label'>
            Your Email
          </label>
          <input type="email"
          id='email'
          placeholder='example@gmail.com'
          className='form__input mt-1'
          />
          <div className='mt-1'>
          <label htmlFor="" className='form__label'>
            Subject
          </label>
          <input type="text"
          id='subject'
          placeholder='let us know how we can help you'
          className='form__input mt-1'
          />
          </div >
          <div className='mt-1 sm:col-span-1'>
          <label htmlFor="" className='form__label'
            >
            Message
          </label>
          <textarea 
          rows='6'
          type="text"
          id='message'
          placeholder='leave your message'
          className='form__input mt-1'
          />
          </div>
        </div>
        <button type='submit' className='btn rounded'>submit</button>
      </form>
    </div>
  )
}

export default Contact