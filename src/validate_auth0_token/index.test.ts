import { test } from 'uvu'
import { is } from 'uvu/assert'
import { validate_auth0_token } from '../index.js'
test('validate_auth0_token', ()=>{
	is(validate_auth0_token({
		access_token: '',
		token_type: ''
	}), undefined)
})
test.run()
