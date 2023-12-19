import { ctx__new } from 'ctx-core/be'
import { restore } from 'sinon'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { auth0__userinfo$_, auth0__userinfo_, auth0__userinfo__set } from '../index.js'
test.after.each(()=>restore())
test('auth0__userinfo', ()=>{
	const ctx = ctx__new()
	const auth0__userinfo = auth0__userinfo__new()
	equal(auth0__userinfo$_(ctx).$, undefined)
	equal(auth0__userinfo_(ctx), undefined)
	auth0__userinfo__set(ctx, auth0__userinfo)
	equal(auth0__userinfo$_(ctx).$, auth0__userinfo)
	equal(auth0__userinfo_(ctx), auth0__userinfo)
})
test.run()
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
