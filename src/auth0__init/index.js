///public
import { AUTH0_CLIENT_ID__ } from '../AUTH0_CLIENT_ID__/index.js'
import { AUTH0_DOMAIN__ } from '../AUTH0_DOMAIN__/index.js'
/**
 * @param ctx{import('@ctx-core/object').Ctx}
 * @param props{import('./index.d.ts').auth0__init__props_T}
 */
export function auth0__init(ctx, props = {}) {
	AUTH0_CLIENT_ID__(ctx).$ = props.AUTH0_CLIENT_ID || process.env.AUTH0_CLIENT_ID
	AUTH0_DOMAIN__(ctx).$ = props.AUTH0_DOMAIN || process.env.AUTH0_DOMAIN
}