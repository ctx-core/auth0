import { waitfor_fibonacci_backoff } from '@ctx-core/fetch-undici'
import { nullish__check_ } from '@ctx-core/function'
import { atom_, setter_computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { AUTH0_DOMAIN__ } from '../AUTH0_DOMAIN__/index.js'
import { auth0__token__ } from '../auth0__token__/index.js'
import { auth0__userinfo_token__ } from '../auth0__userinfo_token__/index.js'
import { auth0__userinfo__fetch_get } from '../auth0__userinfo__fetch_get/index.js'
/** @typedef {import('@ctx-core/nanostores').WritableAtom_}WritableAtom_ */
/** @typedef {import('@ctx-core/object').Be}Be */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('./index.d.ts').auth0__userinfo__response_pair_T}auth0__userinfo__response_pair_T */
/** @type {Be<WritableAtom_<auth0__userinfo__response_pair_T>>} */
const custom__auth0__userinfo__response_pair__ = be_(
	'custom__auth0__userinfo__response_pair__', ()=>
		atom_())
/** @type {typeof import('index.d.ts').auth0__userinfo__response_pair__} */
export const auth0__userinfo__response_pair__ = be_(
	'auth0__userinfo__response_pair__',
	ctx=>setter_computed_([
		custom__auth0__userinfo__response_pair__(ctx),
		AUTH0_DOMAIN__(ctx), auth0__token__(ctx), auth0__userinfo_token__(ctx),
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
				set(await auth0__userinfo__fetch_get({ auth0__token, AUTH0_DOMAIN }))
			}).then()
		})
	}))
/**
 * @param ctx{Ctx}
 * @returns {auth0__userinfo__response_pair_T}
 */
export function auth0__userinfo__response_pair_(ctx) {
	return auth0__userinfo__response_pair__(ctx).$
}
/**
 * @param ctx{Ctx}
 * @param auth0__userinfo__response_pair{auth0__userinfo__response_pair_T}
 */
export function auth0__userinfo__response_pair__set(
	ctx, auth0__userinfo__response_pair
) {
	custom__auth0__userinfo__response_pair__(ctx).$ = auth0__userinfo__response_pair
}