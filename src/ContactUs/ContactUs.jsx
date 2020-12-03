import React, { useState } from 'react'
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  
  const [formData, setFormData] = useState({})
  const [displayForm, setDisplayForm] = useState(true);

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  
  const handleSubmit = event => {
    event.preventDefault()
    setDisplayForm(false);
  }
  
  const displayContent = () => {
    if (displayForm) {
      return (
      <div className={styles.contactus}>
        <h1 className={styles.contactustitle}>Contact Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            onChange={updateInput}
            value={formData.firstname || ''}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            onChange={updateInput}
            value={formData.lastname || ''}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={updateInput}
            value={formData.email || ''}
          />
          <div className={styles.select}>
            <label htmlFor="occupation">Occupation:</label>
            <select value={formData.occupation || ''} name="occupation" onChange={updateInput}>
              <option value="Professor">Professor</option>
              <option value="Student">Student</option>
            </select>
          </div>
          <div className={styles.select}>
            <label htmlFor="city">Your favorite City:</label>
            <select value={formData.city || ''} name="city" onChange={updateInput}>
              <option value="San Jose">San Jose</option>
              <option value="Santa Clara">Santa Clara</option>
            </select>
          </div>
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            onChange={updateInput}
            value={formData.message || ''}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>)
    } else {
      return (
        <div className={styles.contactus}>
        <div className={styles.userinfo}>
          <h2>Your contact infor</h2>
          <p>Firstname : {formData.firstname}</p>
          <p>Lastname: {formData.lastname}</p>
          <p>Email: {formData.email}</p>
          <p>Occupation: {formData.occupation}</p>
          <p>City: {formData.city}</p>
          <p>We will contact with you shortly.</p>
        </div>
      </div>
      )
    }
  };
  
  
  // render() {
    return (
      <div>{displayContent()}</div>
    )
  // }
}

export default ContactUs