import { btoa } from '@ctx-core/btoa'
import FakeTimers, { InstalledClock } from '@sinonjs/fake-timers'
import { test } from 'uvu'
import { equal, is } from 'uvu/assert'
import { auth0__token__is_valid_ } from '../index.js'
let clock:InstalledClock
test.before(()=>{
	clock = FakeTimers.install()
})
test.after(()=>{
	clock.uninstall()
})
test('auth0__token__is_valid_|no value', ()=>{
	is(auth0__token__is_valid_({
		access_token: '',
		token_type: ''
	}), false)
})
test('auth0__token__is_valid_|valid', ()=>{
	clock.now = 10_000
	const valid_token = `expired_token.${btoa(JSON.stringify({ exp: 100 }))}`
	equal(auth0__token__is_valid_({
		access_token: valid_token,
		token_type: ''
	}), true)
})
test('auth0__token__is_valid_|expired_token', ()=>{
	clock.now = 10_000
	const expired_token = `expired_token.${btoa(JSON.stringify({ exp: 2 }))}`
	equal(auth0__token__is_valid_({
		access_token: expired_token,
		token_type: ''
	}), false)
})
test.run()
