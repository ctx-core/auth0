import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { AUTH0_URL_ } from '../index.js'
test('invert_idx_a_', ()=>{
	equal('https://cdn.auth0.com/js/auth0/9.19.0/auth0.min.js', AUTH0_URL_())
})
test.run()
