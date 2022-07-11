import { has_dom } from '@ctx-core/dom'
import { jwt_token_exp_ } from '@ctx-core/jwt'
import { sync_localStorage } from '@ctx-core/local-storage'
import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0_token_json__ } from '../auth0_token_json__/index.js'
import { clear_auth0_token } from '../clear_auth0_token/index.js'
import { in_auth0_token__ } from '../in_auth0_token__/index.js'
import { logout_auth0_token_error } from '../logout_auth0_token_error/index.js'
import { validate_auth0_token } from '../validate_auth0_token/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @type {import('./auth0_token__.d.ts').auth0_token__} */
export const auth0_token__ = be_('auth0_token__', ctx=>{
	const auth0_token_ = computed_(in_auth0_token__(ctx), $=>$?.error ? null : $)
	auth0_token_json__(ctx).subscribe($=>{
		if ($ == null) {
			clear_auth0_token(ctx)
			return
		}
		if (has_dom) {
			sync_localStorage('auth0_token_json', $)
			if ($) queueMicrotask(()=>schedule_validate_auth0_token_current(ctx))
		}
	})
	if (has_dom) {
		window.addEventListener('storage', $=>set_auth0_token_json(ctx, $))
	}
	return auth0_token_
	function schedule_validate_auth0_token_current(ctx) {
		const auth0_token = auth0_token__(ctx).$
		const id_token = auth0_token === null || auth0_token === void 0 ? void 0 : auth0_token.id_token
		if (!id_token) return
		const jwt_token_exp_millis = jwt_token_exp_(id_token) * 1000
		const now = Date.now()
		const validate_millis = now - jwt_token_exp_millis
		setTimeout(async ()=>{
			try {
				validate_auth0_token(auth0_token)
			} catch (error) {
				if (error.type === 'bad_credentials') {
					console.error(error)
					logout_auth0_token_error(ctx, error)
					return
				}
				throw error
			}
		}, validate_millis)
	}
})
/**
 * @param {Ctx}ctx
 * @param {StorageEvent}event
 */
function set_auth0_token_json(ctx, event) {
	if (event.key === 'auth0_token_json') {
		auth0_token_json__(ctx).$ = event.newValue
	}
}
export { auth0_token__ as auth0_token$_ }
