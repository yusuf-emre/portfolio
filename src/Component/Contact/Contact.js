import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })
  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}.
      My phone number is ${data.phone}.
      My email address is ${data.email}.
      My subject is ${data.subject}.
      Here is my message "${data.message}".`
    )
  }

  return (
    <div>
      <section className="Contact" id='contact'>
        <div className="container">
          <div className="heading text-center">
            <h1>Contact</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shadow">
                <div className="img">
                  <img src="contact.jpg" alt="contact" className='image' />
                </div>
                <div className="details">
                  <h1>Yusuf Emre Velioglu</h1>
                  <p>Software Developer</p> <br />
                  <p>Send your message or call me!</p> <br />
                  <p>Phone: 076-950 63 28</p>
                  <p>Email: velioglu.ye@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="right box box_shadow">
              <form
                onSubmit={formSubmit}
                form-name='contact'
                method='post'
                data-netlify='true'>
                <input type="hidden" name="form-name" value="contact" />
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input type="text" name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className="input row">
                    <span>PHONE NUMBER</span>
                    <input type="number" name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className="input">
                  <span>EMAIL</span>
                  <input type="email" name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className="input">
                  <span>SUBJECT</span>
                  <input type="text" name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className="input">
                  <span>YOUR MESSAGE</span>
                  <textarea cols={30} rows={3} name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className="btn_shadow" type='submit'>
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact