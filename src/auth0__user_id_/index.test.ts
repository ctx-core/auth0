import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { auth0__user_id_ } from '../index.js'
test('auth0__user_id_', ()=>{
	equal('user_id', auth0__user_id_({ user_id: 'user_id'}))
	equal('sub', auth0__user_id_({ sub: 'sub'}))
})
test.run()
