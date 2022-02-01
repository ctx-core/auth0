import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_token_json$_ } from './auth0_token_json$_.js'
/** @type {import('./in_auth0_token$_.d.ts').in_auth0_token$_} */
export const in_auth0_token$_ = be_('in_auth0_token$', ctx=>computed$(
	auth0_token_json$_(ctx),
	auth0_token_json=>{
		if (auth0_token_json && typeof auth0_token_json === 'string') {
			const auth0_token_json$ = auth0_token_json$_(ctx)
			try {
				return JSON.parse(auth0_token_json) || false
			} catch (err) {
				console.warn(err)
				auth0_token_json = null
				setTimeout(()=>auth0_token_json$.$ = auth0_token_json
				)
			}
		}
		return auth0_token_json
	}))
