import { fetch } from '@ctx-core/fetch'
import { B, be_, assign } from '@ctx-core/object'
import type { auth0_client_id_optional_body_I } from './auth0_client_id_body_I.js'
import { AUTH0_DOMAIN$_b } from './AUTH0_DOMAIN$_b.js'
const key = 'post_auth0_passwordless_start'
export const post_auth0_passwordless_start_b:B<post_auth0_passwordless_start_T> = be_(key, ctx=>{
	const AUTH0_DOMAIN$ = AUTH0_DOMAIN$_b(ctx)
	return post_auth0_passwordless_start as post_auth0_passwordless_start_T
	async function post_auth0_passwordless_start(
		body:post_auth0_passwordless_start_body_T
	):Promise<Response> {
		const { hostname, pathname } = window.location
		const redirect_uri = `https://${hostname}/auth?redirect_url=${pathname}`
		assign(body, { authParams: { redirect_uri } })
		const AUTH0_DOMAIN = AUTH0_DOMAIN$.$
		return (
			await fetch(
				`https://${AUTH0_DOMAIN}/passwordless/start`,
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
