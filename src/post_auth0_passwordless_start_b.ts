import { _b, assign, B } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { get } from '@ctx-core/store'
import { AUTH0_DOMAIN_b } from './AUTH0_DOMAIN_b'
import type { auth0_client_id_optional_body_type } from './auth0_client_id_body_type'
export const post_auth0_passwordless_start_b:post_auth0_passwordless_start_b_type = _b('post_auth0_passwordless_start', (ctx)=>{
	const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
	return post_auth0_passwordless_start as post_auth0_passwordless_start_type
	function post_auth0_passwordless_start(body:post_auth0_passwordless_start_body_type) {
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
export interface post_auth0_passwordless_start_optional_body_type extends auth0_client_id_optional_body_type {
	connection:string
	send:string
	email:string
}
export interface post_auth0_passwordless_start_body_type extends post_auth0_passwordless_start_optional_body_type {
	client_id:string
}
export type post_auth0_passwordless_start_type =
	(body:post_auth0_passwordless_start_body_type)=>Promise<Response>
export interface post_auth0_passwordless_start_b_type extends B<post_auth0_passwordless_start_type> {}
