import { JwtToken } from '@ctx-core/jwt'
import { ctx_ } from '@ctx-core/object'
import { stub } from 'sinon'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { auth0__token__set, auth0__userinfo_, auth0__userinfo__set } from '../index.js'
test('auth0__userinfo_', ()=>{
	const ctx = ctx_()
	auth0__token__set(ctx, auth0__token__new())
	const auth0__userinfo = auth0__userinfo_(ctx)
	fetch__userinfo__stub()
	equal(auth0__userinfo_(ctx), auth0__userinfo)
	function fetch__userinfo__stub() {
		stub(globalThis, 'fetch')
			.withArgs('https://myapp.auth0.com/userinfo', {
				headers: {
					'Content-Type': 'application/json',
					authorization: 'Bearer access_token',
				}
			})
			.resolves(new Response(JSON.stringify(auth0__userinfo), {
				status: 200,
				headers: {
					'Content-Type': 'application/json'
				}
			}))
	}
})
test('auth0__userinfo__set', ()=>{
	const ctx = ctx_()
	const auth0__userinfo = auth0__userinfo__new()
	auth0__userinfo__set(ctx, auth0__userinfo)
	equal(auth0__userinfo_(ctx), auth0__userinfo)
})
test.run()
function auth0__token__new() {
	return {
		access_token: 'access_token',
		token_type: 'Bearer',
	} as JwtToken
}
function auth0__userinfo__new() {
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
	}
}
