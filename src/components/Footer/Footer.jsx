import { useState } from 'react';
import './Footer.module.css';

const Footer = () => {
	const [inputValue, setInputValue] = useState('')

	const handleInput = (e) => {
		setInputValue(e.target.value)
	}

	const leBlur = () => {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={leBlur}
			/>
		</footer>
	)
}

export default Footer;
