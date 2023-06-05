import { ctx_ } from '@ctx-core/object'
import { restore, stub } from 'sinon'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { AUTH0_DOMAIN__set } from '../AUTH0_DOMAIN$_/index.js'
import { jwks__json__GET__fetch, jwks__json__GET__fetch2 } from '../index.js'
test.after.each(()=>{
	restore()
})
test('jwks__json__GET__fetch', async ()=>{
	const ctx = ctx_()
	AUTH0_DOMAIN__set(ctx, 'myapp.auth0.com')
	const _stub = stub(globalThis, 'fetch')
		.withArgs('https://myapp.auth0.com/.well-known/jwks.json')
	_stub.resolves(new Response(JSON.stringify({
		keys: ['foobar']
	}), {
		headers: {
			'Content-Type': 'application/json'
		}
	}))
	const response = await jwks__json__GET__fetch(ctx)
	equal(await response.json(), {
		keys: ['foobar']
	})
})
test('jwks__json__GET__fetch2', async ()=>{
	const ctx = ctx_()
	AUTH0_DOMAIN__set(ctx, 'myapp.auth0.com')
	const _stub = stub(globalThis, 'fetch')
		.withArgs('https://myapp.auth0.com/.well-known/jwks.json')
	_stub.resolves(new Response(JSON.stringify({
		keys: ['foobar']
	}), {
		headers: {
			'Content-Type': 'application/json'
		}
	}))
	const [payload, response] = await jwks__json__GET__fetch2(ctx)
	equal(response.ok, true)
	equal(payload, {
		keys: ['foobar']
	})
})
test.run()
