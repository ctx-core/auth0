import { _b, assign } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { get } from '@ctx-core/store'
import { AUTH0_DOMAIN_b, AUTH0_DOMAIN_ctx_I } from './AUTH0_DOMAIN_b'
import type { auth0_client_id_optional_body_I } from './auth0_client_id_body_I'
const key = 'post_auth0_passwordless_start'
export interface post_auth0_passwordless_start_ctx_I
	extends AUTH0_DOMAIN_ctx_I {
	post_auth0_passwordless_start?:post_auth0_passwordless_start_T
}
export const post_auth0_passwordless_start_b = _b<post_auth0_passwordless_start_ctx_I, typeof key>(key, ctx=>{
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return post_auth0_passwordless_start as post_auth0_passwordless_start_T
	function post_auth0_passwordless_start(body:post_auth0_passwordless_start_body_T) {
		const { hostname, pathname } = window.location
		const redirect_uri = `https://${hostname}/auth?redirect_url=${pathname}`
		assign(body, { authParams: { redirect_uri } })
		const $AUTH0_DOMAIN = get(AUTH0_DOMAIN)
		return (
			fetch(
				`https://${$AUTH0_DOMAIN}/passwordless/start`,
				{
					method: 'POST',
					headers:
						{ 'Content-Type': 'application/json' },
					body: JSON.stringify(body)
				})
		)
	}
})
export interface post_auth0_passwordless_start_optional_body_T extends auth0_client_id_optional_body_I {
	connection:string
	send:string
	email:string
}
export interface post_auth0_passwordless_start_body_T extends post_auth0_passwordless_start_optional_body_T {
	client_id:string
}
export type post_auth0_passwordless_start_T =
	(body:post_auth0_passwordless_start_body_T)=>Promise<Response>
