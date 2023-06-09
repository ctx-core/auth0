import { type JwtToken } from '@ctx-core/jwt'
import { ctx_ } from '@ctx-core/object'
import { restore, stub } from 'sinon'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import type { auth0__userinfo_T } from '../_types/index.js'
import { AUTH0_DOMAIN__set } from '../AUTH0_DOMAIN$_/index.js'
import { auth0__userinfo__GET__fetch } from './index.js'
test.after.each(()=>{
	restore()
})
test('auth0__userinfo__GET__fetch|+ctx|- AUTH0_DOMAIN', async ()=>{
	const ctx = ctx_()
	AUTH0_DOMAIN__set(ctx, 'myapp.auth0.com')
	const auth0__token = auth0__token_()
	const userinfo = userinfo_()
	fetch__userinfo__stub()
	const response =
		await auth0__userinfo__GET__fetch(ctx, { auth0__token })
	equal(await response.json(), userinfo)
	equal(response.status, 200)
	function fetch__userinfo__stub() {
		stub(globalThis, 'fetch')
			.withArgs('https://myapp.auth0.com/userinfo', {
				headers: {
					'Content-Type': 'application/json',
					authorization: 'Bearer access_token',
				}
			})
			.resolves(new Response(JSON.stringify(userinfo), {
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				}
			}))
	}
})
test('auth0__userinfo__GET__fetch|+ctx|- AUTH0_DOMAIN', async ()=>{
	const ctx = ctx_()
	AUTH0_DOMAIN__set(ctx, 'notmyapp.auth0.com')
	const auth0__token = auth0__token_()
	const userinfo = userinfo_()
	fetch__userinfo__stub()
	const response =
		await auth0__userinfo__GET__fetch(ctx, {
			auth0__token,
			AUTH0_DOMAIN: 'myapp.auth0.com'
		})
	equal(await response.json(), userinfo)
	equal(response.status, 200)
	function fetch__userinfo__stub() {
		stub(globalThis, 'fetch')
			.withArgs('https://myapp.auth0.com/userinfo', {
				headers: {
					'Content-Type': 'application/json',
					authorization: 'Bearer access_token',
				}
			})
			.resolves(new Response(JSON.stringify(userinfo), {
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				}
			}))
	}
})
test('auth0__userinfo__GET__fetch|-ctx|+ AUTH0_DOMAIN', async ()=>{
	const auth0__token = auth0__token_()
	const userinfo = userinfo_()
	fetch__userinfo__stub()
	const response =
		await auth0__userinfo__GET__fetch({
			auth0__token,
			AUTH0_DOMAIN: 'myapp.auth0.com'
		})
	equal(await response.json(), userinfo)
	equal(response.status, 200)
	function fetch__userinfo__stub() {
		stub(globalThis, 'fetch')
			.withArgs('https://myapp.auth0.com/userinfo', {
				headers: {
					'Content-Type': 'application/json',
					authorization: 'Bearer access_token',
				}
			})
			.resolves(new Response(JSON.stringify(userinfo), {
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				}
			}))
	}
})
test.run()
function auth0__token_() {
	return {
		access_token: 'access_token',
		token_type: 'Bearer',
	} as JwtToken
}
function userinfo_() {
	return {
		'sub': '248289761001',
		'name': 'Jane Josephine Doe',
		'given_name': 'Jane',
		'family_name': 'Doe',
		'middle_name': 'Josephine',
		'nickname': 'JJ',
		'preferred_username': 'j.doe',
		'profile': 'http://exampleco.com/janedoe',
		'picture': 'http://exampleco.com/janedoe/me.jpg',
		'website': 'http://exampleco.com',
		'email': 'janedoe@exampleco.com',
		'email_verified': true,
		'gender': 'female',
		'birthdate': '1972-03-31',
		'zoneinfo': 'America/Los_Angeles',
		'locale': 'en-US',
		'phone_number': '+1 (111) 222-3434',
		'phone_number_verified': false,
		'address': {
			'country': 'us'
		},
		'updated_at': '1556845729'
	} as auth0__userinfo_T
}
