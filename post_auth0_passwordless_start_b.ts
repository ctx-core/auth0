import { _b, assign } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { get } from '@ctx-core/store'
import { AUTH0_DOMAIN_b } from './AUTH0_DOMAIN_b'
export const post_auth0_passwordless_start_b = _b(
	'post_auth0_passwordless_start', (ctx)=>{
		const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
		return function post_auth0_passwordless_start(body) {
			const { hostname, pathname } = window.location
			const redirect_uri = `https://${hostname}/auth?url__redirect=${pathname}`
			assign(body, { authParams: { redirect_uri } })
			return (
				fetch(
					`https://${get(AUTH0_DOMAIN)}/passwordless/start`,
					{
						method: 'POST',
						headers:
							{ 'Content-Type': 'application/json' },
						body: JSON.stringify(body)
					})
			)
		}
	})
