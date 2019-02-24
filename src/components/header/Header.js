import React from 'react';
import './Header.scss';

const Header = () => (
	<header className="header">
		<a href="/" className="header__logo">Testio</a>
		<section className="header__account">
			<button className="account-container" id="userAccount">
				<i className="fa fa-user account-container__avatar"></i>
				<span>Jorah Mormont</span>
				<i className="fa fa-caret-down account-container__arrow"></i>
			</button>
			<nav className="account-actions" id="userAccountActions">
				<a href="/" className="account-actions__row">
					<i className="fa fa-users row-icon"></i>
					Groups
				</a>
				<a href="/" className="account-actions__row">
					<i className="fa fa-comments row-icon"></i>
					Frequently contacted
				</a>
				<a href="/" className="account-actions__row">
					<i className="fa fa-wrench row-icon"></i>
					Prefences
				</a>
				<a href="/" className="account-actions__row">
					<i className="fa fa-power-off row-icon"></i>
					Log out
				</a>
			</nav>
		</section>
	</header>
);

export default Header;
