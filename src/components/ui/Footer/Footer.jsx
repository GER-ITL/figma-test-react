import React from 'react'
import webIcon from '../../../assets/webIcon.png'
import c from './Footer.module.scss'
const Footer = () => {
	return (
		<footer className={c.footer}>
			<div className={c.footer__info}>
				<label> © 2024 «LOREMIPSUM.NET» Все права защищены.</label>│
				<div className={c.footer__webItem}>
					<img src={webIcon} alt='' />
					<span>QIWI wallet</span>
				</div>
				<div className={c.footer__webItem}>
					<img src={webIcon} alt='' />
					<span>Yandex Money</span>
				</div>
				<div className={c.footer__webItem}>
					<img src={webIcon} alt='' />
					<span>Web Money</span>
				</div>
				<div className={c.footer__links}>
					│
					<div>
						<img src={webIcon} alt='' />
						<a href="#top">info@inpsum228.com</a>

					</div>
					<div>
						<img src={webIcon} alt='' />
						<a href="#top">Мы вконтакте</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
