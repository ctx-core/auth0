import pkg from 'auth0-js/package.json' assert { type: 'json' }
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { AUTH0_URL } from '../index.js'
test('invert_idx_a_', async ()=>{
	equal(`https://cdn.auth0.com/js/auth0/${pkg.version}/auth0.min.js`, AUTH0_URL)
})
test.run()
