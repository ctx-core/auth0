import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_token_json$_ } from './auth0_token_json$_.js'
/** @type {import('./in_auth0_token$_.d.ts').in_auth0_token$_} */
export const in_auth0_token$_ = be_('in_auth0_token$', ctx=>{
	let in_auth0_token
	const in_auth0_token$ = computed$(auth0_token_json$_(ctx), $=>{
		if ($ && typeof $ === 'string') {
			try {
				const current_in_auth0_token_json = JSON.stringify(in_auth0_token)
				if (current_in_auth0_token_json !== $) {
					in_auth0_token = JSON.parse($) || null
				}
				return in_auth0_token
			} catch (err) {
				queueMicrotask(()=>auth0_token_json$_(ctx).$ = null)
				throw err
			}
		}
		return null
	})
	return in_auth0_token$
})
