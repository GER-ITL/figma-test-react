import React from 'react'
import addIcon from '../../assets/addIcon.png'
import emailIcon from '../../assets/emailIcon.png'
import lupaIcon from '../../assets/lupaIcon.png'
import procIcon from '../../assets/procIcon.png'

import c from './FormData.module.scss'

const FormList = () => {
	return (
		<div>
			<ul className={c.form__list}>
				<li>
					{' '}
					<div className={c.form__listItem}>
						<div className={c.form__listCircle}>
							<img src={lupaIcon} alt='icon1' />
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</li>
				<li>
					{' '}
					<div className={c.form__listItem}>
						<div className={c.form__listCircle}>
							<img src={procIcon} alt='icon2' />
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</li>{' '}
				<li>
					{' '}
					<div className={c.form__listItem}>
						<div className={c.form__listCircle}>
							<img src={addIcon} alt='icon3' />
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</li>{' '}
				<li>
					{' '}
					<div className={c.form__listItem}>
						<div className={c.form__listCircle}>
							<img src={emailIcon} alt='icon4' />
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</li>{' '}
				<li>
					{' '}
					<div className={c.form__listItem}>
						<div className={c.form__listCircle}>
							<img src={lupaIcon} alt='icon5' />
						</div>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</li>{' '}
			</ul>
		</div>
	)
}

export default FormList
