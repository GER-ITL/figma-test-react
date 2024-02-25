import React, { useState } from 'react'
import c from './FormData.module.scss'

const FormScheme = () => {
	const [value, setValue] = useState(50)
	return (
		<form action='' className={c.form__input}>
			<select defaultValue={`Def`} name='typeSystem'>
				<option value='' selected>
					Выберите тип системы
				</option>
				<option value=''>Lorem ipsum dolor sit amet.</option>
				<option value=''>Lorem, ipsum dolor.</option>
				<option value=''>Lorem ipsum dolor sit.</option>
				<option value=''>Lorem, ipsum dolor.</option>
				<option value=''>Lorem ipsum dolor sit.</option>
			</select>
			<input name='emailInput' type='email' placeholder='Ваш e-mail' />
			<input name='nameInput' type='text' placeholder='Ваше имя' />
			<div className={c.form__inputRange}>
				<div className={c.form__inputInfo}>
					Lorem ipsum dolor sit amet.
					<span className={c.range__value}>{value} %</span>
				</div>
				<input
					name='rangeInput'
					type='range'
					value={value}
					onChange={e => {
						setValue(e.target.value)
					}}
				/>
			</div>

			<label className={c.input__file}>
				<input type='file' name='file' />
				<span>ПРИКРЕПИТЬ ФАЙЛ</span>
			</label>
			<button className={c.form__btn} type='submit'>
				ОТПРАВИТЬ
			</button>
		</form>
	)
}

export default FormScheme
