import React from 'react'
import './Contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contact() {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a7f6cd9e-3095-458c-a773-c038f340853f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("E-mail send Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <i className="fa-solid fa-envelope-circle-check"></i></h3>
            <p> We are here to assist you with any questions or concerns you may have. Our dedicated team is available to provide support and ensure your experience with us is seamless and satisfactory. Reach out to us via phone, email, or visit our office at your convenience.</p>
            <ul>
                <li> <i className="fa-solid fa-envelope"></i> Contact@samra.dev</li>
                <li> <i className="fa-solid fa-phone"></i>+91 8364524017</li>
                <li><i className="fa-solid fa-location-dot"></i>Chinhat, Lucknow<br/>226001 Uttar Pradesh</li>
            </ul>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Enter your name" required/>
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter your phone number" required/>
                <label>Write Your message</label>
                <textarea name='message' id='' rows={6} placeholder='Enter your message' required></textarea>
                <button type='Submit' className='btn dark-btn'>Submit Now <i className="fa-solid fa-arrow-right"></i></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact