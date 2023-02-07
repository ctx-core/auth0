import { test } from 'uvu'
import { is } from 'uvu/assert'
import { auth0__token__validate } from '../index.js'
test('auth0__token__validate', ()=>{
	is(auth0__token__validate({
		access_token: '',
		token_type: ''
	}), undefined)
})
test.run()
