import React from 'react'
import c from './FormData.module.scss'
import FormList from './FormList'
import FormScheme from './FormScheme'
const FormData = () => {
	return (
		<div className={c.form__data}>
			<h1>
				ОФОРМЛЕНИЕ <span>ЗАКАЗА</span>
			</h1>
			<p>Перед заполнением формы ознакомьтесь с нашей схемой работы!</p>
			<FormList />
			<FormScheme />
		</div>
	)
}

export default FormData
