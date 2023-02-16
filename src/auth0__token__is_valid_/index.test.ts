import { test } from 'uvu'
import { is } from 'uvu/assert'
import { auth0__token__is_valid_ } from './index.js'
test('auth0__token__validate', ()=>{
	is(auth0__token__is_valid_({
		access_token: '',
		token_type: ''
	}), true)
})
test.run()
