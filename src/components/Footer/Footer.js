import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

const Footer = ({ lastSyncDate, refreshData, logout }) => (
	<footer className="footer">
		<section className="footer__left">
			<nav className="left-links">
				<a href="/">Dashboard</a>
				<a href="/">Payments</a>
				<a href="/">Contacts</a>
			</nav>
			<nav className="left-copyright">
				<span className="copyright-label">&copy; 2015 Contactify</span>
				<a href="/">About</a>
				<a href="/">Privacy</a>
			</nav>
		</section>
		<section className="footer__center">
			<div className="top-box">
				<i className="fa fa-cloud-upload fa-2x" aria-hidden="true"></i>
				<div>
					<p>Last synced:</p>
					<p>{ lastSyncDate }</p>
				</div>
				<button className="top-box__sync-container" onClick={refreshData}>
					<i className="fa fa-refresh" aria-hidden="true"></i>
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
				<button onClick={logout}>Log out</button>
			</nav>
		</section>
	</footer>
);

Footer.propTypes = {
	lastSyncDate: PropTypes.string,
	refreshData: PropTypes.func,
	logout: PropTypes.func
};

export default Footer;