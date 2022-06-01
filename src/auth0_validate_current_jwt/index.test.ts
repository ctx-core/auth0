import { btoa } from '@ctx-core/btoa'
import { bad_credentials_error_ } from '@ctx-core/error'
import FakeTimers, { InstalledClock } from '@sinonjs/fake-timers'
import { test } from 'uvu'
import { throws } from 'uvu/assert'
import { auth0_validate_current_jwt } from '../index.js'
let clock:InstalledClock
test.before(()=>{
	clock = FakeTimers.install()
})
test.after(()=>{
	clock.uninstall()
})
test('auth0_validate_current_jwt: valid', ()=>{
	clock.now = 10_000
	const valid_token = `expired_token.${btoa(JSON.stringify({ exp: 100 }))}`
	auth0_validate_current_jwt(valid_token)
})
test('auth0_validate_current_jwt: expired_token', ()=>{
	clock.now = 10_000
	const expired_token = `expired_token.${btoa(JSON.stringify({ exp: 2 }))}`
	throws(()=>auth0_validate_current_jwt(expired_token), bad_credentials_error_({
		jwt_token: expired_token, error_message: 'Session Expired'
	}))
})
test.run()
