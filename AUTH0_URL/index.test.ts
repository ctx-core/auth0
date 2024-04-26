import pkg from 'auth0-js/package.json'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { AUTH0_URL } from '../index.js'
test('invert_idx_a_', async ()=>{
	equal(AUTH0_URL, `https://cdn.auth0.com/js/auth0/${pkg.version}/auth0.min.js`)
})
test.run()
