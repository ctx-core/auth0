import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { validate_auth0_password_confirmation } from '../index.js'
test('validate_auth0_password_confirmation', ()=>{
	equal(validate_auth0_password_confirmation({
		password: 'password0',
		password_confirmation: 'password0'
	}), null)
	equal(validate_auth0_password_confirmation({
		password: 'password0',
		password_confirmation: 'different password'
	}), { password_confirmation: 'Your passwords do not match.' })
})
test.run()
