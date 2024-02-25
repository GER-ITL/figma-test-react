import React from 'react'
import background from '../../assets/back.jpg'
import c from './Body.module.scss'
const Body = () => {
	return (
		<div className={c.body}>
			<img src={background} alt='back' />
			<div className={c.body__intro}>
				<h1>
					<span>LOREM IPSUM</span> DOLOR SIT AMETCONSECTETUR{' '}
					<span>ADIPISCING</span>
				</h1>
				<h6>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
					magnam?
				</h6>
				<ul>
					<li> Lorem ipsum dolor sit amet consectetur.</li>
					<li> Lorem ipsum dolor sit amet consectetur.</li>
					<li> Lorem ipsum dolor sit amet consectetur.</li>
				</ul>
				<div className={c.body__introButtons}>
					<button>ЗАКАЗАТЬ</button>
					<button>ПОДРОБНЕЕ</button>
				</div>
			</div>
		</div>
	)
}

export default Body
