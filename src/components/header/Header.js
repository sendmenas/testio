import React from 'react';
import './Header.scss';

const Header = () => (
	<header className="header">
		<a className="header__logo">Testio</a>
		<nav className="header__tabs">
			<a className="header-tab">dashboard</a>
			<a className="header-tab selected-tab">payments</a>
			<a className="header-tab">contacts</a>
		</nav>
		<section className="header__account">
			<button className="account-container" id="userAccount">
				<i className="fa fa-user account-container__avatar"></i>
				<span>Jorah Mormont</span>
				<i className="fa fa-caret-down account-container__arrow"></i>
			</button>
			<nav className="account-actions" id="userAccountActions">
				<a className="account-actions__row">
					<i className="fa fa-users row-icon"></i>
					Groups
				</a>
				<a className="account-actions__row">
					<i className="fa fa-comments row-icon"></i>
					Frequently contacted
				</a>
				<a className="account-actions__row">
					<i className="fa fa-wrench row-icon"></i>
					Prefences
				</a>
				<a className="account-actions__row">
					<i className="fa fa-power-off row-icon"></i>
					Log out
				</a>
			</nav>
		</section>
	</header>
);

export default Header;
