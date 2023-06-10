import { waitfor_fibonacci_backoff } from '@ctx-core/fetch-undici'
import { nullish__check_ } from '@ctx-core/function'
import { atom_, be_computed_pair_, setter_computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { auth0__token$_ } from '../auth0__token/index.js'
import { auth0__userinfo__GET__fetch2 } from '../auth0__userinfo__GET__fetch/index.js'
import { auth0__userinfo_token$_ } from '../auth0__userinfo_token/index.js'
import { AUTH0_DOMAIN$_ } from '../AUTH0_DOMAIN/index.js'
/** @typedef {import('@ctx-core/nanostores').WritableAtom_}WritableAtom_ */
/** @typedef {import('@ctx-core/object').Be}Be */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('./index.d.ts').auth0__userinfo__response_pair_T}auth0__userinfo__response_pair_T */
const custom__auth0__userinfo__response_pair__ =
	be_(()=>
		atom_())
export const [
	auth0__userinfo__response_pair$_,
	auth0__userinfo__response_pair_,
] = be_computed_pair_(ctx=>
	setter_computed_([
		custom__auth0__userinfo__response_pair__(ctx),
		AUTH0_DOMAIN$_(ctx),
		auth0__token$_(ctx),
		auth0__userinfo_token$_(ctx),
	], (
		[
			custom__auth0__userinfo__response_pair,
			AUTH0_DOMAIN,
			auth0__token,
			auth0_userinfo_auth0_token,
		],
		set
	)=>{
		if (custom__auth0__userinfo__response_pair) {
			set(custom__auth0__userinfo__response_pair)
			return
		}
		return nullish__check_([
			AUTH0_DOMAIN,
			auth0__token,
			auth0_userinfo_auth0_token,
		], ()=>{
			if (auth0__token === auth0_userinfo_auth0_token) {
				return
			}
			if (!auth0__token) {
				set(auth0__token === undefined ? undefined : null)
				return
			}
			set(auth0__token)
			waitfor_fibonacci_backoff(async ()=>{
				set(await auth0__userinfo__GET__fetch2({ auth0__token, AUTH0_DOMAIN }))
			}).then()
		})
	}))
export {
	auth0__userinfo__response_pair$_ as auth0__userinfo__response_pair__,
}
/**
 * @param ctx{Ctx}
 * @param auth0__userinfo__response_pair{auth0__userinfo__response_pair_T}
 */
export function auth0__userinfo__response_pair__set(
	ctx,
	auth0__userinfo__response_pair
) {
	custom__auth0__userinfo__response_pair__(ctx).$ =
		auth0__userinfo__response_pair
}
