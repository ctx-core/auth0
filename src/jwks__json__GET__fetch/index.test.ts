import { ctx__new } from '@ctx-core/object'
import { restore, stub } from 'sinon'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { AUTH0_DOMAIN__set, jwks__json__GET__fetch, jwks__json__GET__fetch2 } from '../index.js'
test.after.each(()=>{
	restore()
})
test('jwks__json__GET__fetch', async ()=>{
	const ctx = ctx__new()
	AUTH0_DOMAIN__set(ctx, 'myapp.auth0.com')
	fetch__well_known_jwks_json__stub()
	const response = await jwks__json__GET__fetch(ctx)
	equal(await response.json(), {
		keys: ['foobar']
	})
	function fetch__well_known_jwks_json__stub() {
		stub(globalThis, 'fetch')
			.withArgs('https://myapp.auth0.com/.well-known/jwks.json')
			.resolves(new Response(JSON.stringify({
				keys: ['foobar']
			}), {
				headers: {
					'Content-Type': 'application/json'
				}
			}))
	}
})
test('jwks__json__GET__fetch2', async ()=>{
	const ctx = ctx__new()
	AUTH0_DOMAIN__set(ctx, 'myapp.auth0.com')
	fetch__well_known_jwks_json__stub()
	const [payload, response] = await jwks__json__GET__fetch2(ctx)
	equal(response.ok, true)
	equal(payload, {
		keys: ['foobar']
	})
	function fetch__well_known_jwks_json__stub() {
		stub(globalThis, 'fetch')
			.withArgs('https://myapp.auth0.com/.well-known/jwks.json')
			.resolves(new Response(JSON.stringify({
				keys: ['foobar']
			}), {
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				}
			}))
	}
})
test.run()
