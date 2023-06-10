///public
import { import_meta_env_ } from '@ctx-core/env'
import { AUTH0_CLIENT_ID__set } from '../AUTH0_CLIENT_ID/index.js'
import { AUTH0_CLIENT_SECRET__set } from '../AUTH0_CLIENT_SECRET/index.js'
import { AUTH0_DOMAIN__set } from '../AUTH0_DOMAIN/index.js'
/**
 * @param {import('@ctx-core/object').Ctx}ctx
 * @param {import('./index.d.ts').auth0__init__props_T}props
 */
export function auth0__init(
	ctx,
	props = {}
) {
	AUTH0_CLIENT_ID__set(ctx,
		props.AUTH0_CLIENT_ID
		|| import_meta_env_().AUTH0_CLIENT_ID)
	AUTH0_CLIENT_SECRET__set(ctx,
		props.AUTH0_CLIENT_SECRET
		|| import_meta_env_().AUTH0_CLIENT_ID)
	AUTH0_DOMAIN__set(ctx,
		props.AUTH0_DOMAIN
		|| import_meta_env_().AUTH0_DOMAIN)
}
