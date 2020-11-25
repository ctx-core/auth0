import { _b } from '@ctx-core/object'
import { get } from '@ctx-core/store'
import { fetch } from '@ctx-core/fetch'
import { AUTH0_DOMAIN_b } from './AUTH0_DOMAIN_b'
export const post_auth0_dbconnections_change_password_b = _b(
	'post_auth0_dbconnections_change_password', (ctx)=>{
		const AUTH0_DOMAIN = AUTH0_DOMAIN_b(ctx)
		return function post_auth0_dbconnections_change_password(body) {
			const promise =
				fetch(
					`https://${get(AUTH0_DOMAIN)}/dbconnections/change_password`,
					{
						method: 'POST',
						headers:
							{ 'Content-Type': 'application/json' },
						body: JSON.stringify(body)
					})
			return promise
		}
	})
