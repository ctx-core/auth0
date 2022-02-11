import { computed$ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_token_json$_ } from './auth0_token_json$_.js'
/** @type {import('./in_auth0_token$_.d.ts').in_auth0_token$_} */
export const in_auth0_token$_ = be_('in_auth0_token$', ctx=>
	computed$(auth0_token_json$_(ctx), $=>{
		if ($ && typeof $ === 'string') {
			try {
				return JSON.parse($) || null
			} catch (err) {
				queueMicrotask(()=>auth0_token_json$_(ctx).$ = null)
				throw err
			}
		}
		return null
	}))
