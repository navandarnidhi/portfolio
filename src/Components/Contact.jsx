import React from 'react'

const Contact = () => {
  return (
    // <!-- ******************** contact ************************ -->
        <section className="contact-section flex-container snap-item" id="contact">
            <h2 className="section-heading">Let's get in contact <span> !</span></h2>
            <div className="flex-container contact-holder">
                <div className="contact-details">
                    <i className="fa fa-user"><a href="/"> Nidhi Navandar</a></i><br/>
                    <i className="fas fa-envelope"><a href="/"> navandarnidhi@gmail.com</a></i><br/>
                    <i className="fas fa-compass"><a href="/"> Mumbai, India</a></i>

                    <div className="icons">
                        <a href="https://github.com/navandarnidhi" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/nidhi-navandar/" target="_blank" rel="noreferrer"><i
                                className="fa fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/nidhi_navandar/" target="_blank" rel="noreferrer"><i
                                className="fa fa-instagram"></i></a>
                        
                        <a href="mailto:navandarnidhi@gmail.com" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a>
                    </div>
                </div>
                <div className="contact-form">
                    <form action="https://airform.io/navandarnidhi@gmail.com" id="contact-form" method="post">
                        <h3>Contact me</h3>
                        <div className="input-div">
                            <input type="text" id="name" name="name" placeholder="" required/>
                            <span></span>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input-div">
                            <input type="email" id="email" name="email" placeholder="" required/>
                            <span></span>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-div">
                            <input type="number" id="phone" name="phone" maxLength="10" placeholder="" required/>
                            <span></span>
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-div">
                            <input type="text" id="subject" name="subject" placeholder="" required/>
                            <span></span>
                            <label htmlFor="subject">Subject</label>
                        </div>
                        <div className="input-div">
                            <textarea name="message" id="messege" rows="5" placeholder=" "></textarea><br/>
                            <span className="textarea-span"></span>
                            <label className="textarea-label" htmlFor="message">Messege</label>
                        </div>
                        <div className="pass">
                            <button type="submit" form="contact-form" value="Submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
  )
}

export default Contact