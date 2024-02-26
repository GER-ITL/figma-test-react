import React from 'react'
import classes from './Header.module.scss'
const Header = () => {
	return (
		<div className={classes.header}>
			<h1>
				LOREMIPSUM.<span>NET</span>
			</h1>
			<nav className={classes.header__nav}>
			<a href="/some/valid/uri">БИЗНЕС</a>
			<a href="/some/valid/uri#top">О НАС</a>
			<a href="#top">ЦЕНЫ</a>
			<a href="#top">ОФОРМИТЬ ЗАКАЗ</a>
			</nav>
		</div>
	)
}

export default Header
