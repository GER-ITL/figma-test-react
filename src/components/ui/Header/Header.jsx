import React from 'react'
import classes from './Header.module.scss'
const Header = () => {
	return (
		<div className={classes.header}>
			<h1>
				LOREMIPSUM.<span>NET</span>
			</h1>
			<nav className={classes.header__nav}>
				<a href='/'>БИЗНЕС</a>
				<a href='/'>О НАС</a>
				<a href='/'>ЦЕНЫ</a>
				<a href='/'>ОФОРМИТЬ ЗАКАЗ</a>
			</nav>
		</div>
	)
}

export default Header
