export function checkPhone(parent, phone) {
	let field = document.querySelector(`${parent} input[type="tel"]`)

	if (phone.length < 16) {
		field.setCustomValidity('Пожалуйста, введите телефон полностью!')
		field.reportValidity()
		return false
	}

	field.setCustomValidity('')
}

export function checkEmail(parent, email) {
	let field = document.querySelector(`${parent} input[type="email"]`)

	if (!email.includes('@')) {
		field.setCustomValidity('Адрес электронной почты должен содержать символ "@"')
		field.reportValidity()
		return false
	} else if (!email.includes('.')) {
		field.setCustomValidity('Адрес электронной почты должен содержать символ "."')
		field.reportValidity()
		return false
	}

	field.setCustomValidity('')
}
