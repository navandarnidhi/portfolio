import "./about.css";

const AboutBox = () => (
	<section className="about-box" aria-label="Contact information">
		<div className="about-box__list">
			<p className="about-box__item">
				<span className="about-box__label">LinkedIn:</span>
				<a href="https://www.linkedin.com/in/nidhi-navandar/" target="_blank" rel="noopener noreferrer">View Profile</a>
			</p>
			<p className="about-box__item">
				<span className="about-box__label">GitHub:</span>
				<a href="https://github.com/navandarnidhi" target="_blank" rel="noopener noreferrer">View Profile</a>
			</p>
			<p className="about-box__item">
				<span className="about-box__label">Email:</span>
				<a href="mailto:nidhinnavandar@gmail.com">Send Email</a>
			</p>
			<p className="about-box__item">
				<span className="about-box__label">Phone:</span>
				<a href="tel:+7977565476">Get Connected</a>
			</p>
		</div>
	</section>
);

export default AboutBox;
