import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [submissionError, setSubmissionError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form));

    setIsSubmitting(true);
    setSubmissionMessage("");
    setSubmissionError(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/nidhinnavandar@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: formData.subject,
          _replyto: formData.email,
        }),
      });
      const result = await response.json();

      if (!response.ok || (result.success !== "true" && result.success !== true)) {
        throw new Error(result.message || "Your message could not be sent. Please try again.");
      }

      form.reset();
      setSubmissionMessage("Thanks! Your message has been sent.");
    } catch (error) {
      setSubmissionError(true);
      setSubmissionMessage(
        error instanceof Error
          ? error.message
          : "Your message could not be sent. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            Send me a message directly at nidhinnavandar@gmail.com. 👋
          </p>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
                aria-label="Your name"
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
                aria-label="Your email"
                required
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              name="subject"
              className="contact__form-input"
              placeholder="Insert your subject"
              aria-label="Subject"
              required
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
              aria-label="Your message"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {submissionMessage && (
            <p
              className={`contact__form-status${submissionError ? " contact__form-status--error" : ""}`}
              role={submissionError ? "alert" : "status"}
            >
              {submissionMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
