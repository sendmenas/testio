import React from 'react';
import './Footer.scss';

const Footer = () => (
	<footer className="footer">
		<section className="footer__left">
			<nav className="left-links">
				<a>Dashboard</a>
				<a>Payments</a>
				<a>Contacts</a>
			</nav>
			<nav className="left-copyright">
				<span className="copyright-label">&copy; 2015 Contactify</span>
				<a>About</a>
				<a>Privacy</a>
			</nav>
		</section>
		<section className="footer__center">
			<div className="top-box">
				<i className="fa fa-cloud-upload fa-2x" aria-hidden="true"></i>
				<div>
					<p>Last synced:</p>
					<p id="syncTimeContainer">Not synced</p>
				</div>
				<button className="top-box__sync-container" id="syncButton">
					<i className="fa fa-refresh" aria-hidden="true" id="syncIndicator"></i>
					<span>Force sync</span>
				</button>
			</div>
			<div className="bottom-box">
				<i className="fa fa-stethoscope fa-2x"></i>
				<div>
					<p>Help Desk and Resolution center available:</p>
					<p>I-IV 8:00-18:00, V 8:00-16:45</p>
				</div>
			</div>
		</section>
		<section className="footer__right">
			<nav className="right-links">
				<a>Log out</a>
			</nav>
		</section>
	</footer>
);

export default Footer;