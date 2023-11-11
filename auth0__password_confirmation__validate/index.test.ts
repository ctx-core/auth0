import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { auth0__password_confirmation__validate } from '../index.js'
test('auth0__password_confirmation__validate', ()=>{
	equal(auth0__password_confirmation__validate({
		password: 'password0',
		password_confirmation: 'password0'
	}), null)
	equal(auth0__password_confirmation__validate({
		password: 'password0',
		password_confirmation: 'different password'
	}), { password_confirmation: 'Your passwords do not match.' })
})
test.run()
