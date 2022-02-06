import { assign } from '@ctx-core/object'
import { AUTH0_CLIENT_ID$_ } from './AUTH0_CLIENT_ID$_.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {any}data
 * @return {import('./_types').auth0_client_id_body_I}
 */
export function auth0_body_(ctx, data) {
	return assign(
		{ client_id: AUTH0_CLIENT_ID$_(ctx).$ },
		data)
}
