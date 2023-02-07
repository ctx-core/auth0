import { fetch } from '@ctx-core/fetch-undici'
import { AUTH0_DOMAIN__ } from '../AUTH0_DOMAIN__/index.js'
export async function auth0__dbconnections_change_password__fetch_post(ctx, body) {
	const res = await fetch(`https://${AUTH0_DOMAIN__(ctx).$}/dbconnections/change_password`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	})
	return [await res.text(), res]
}
export {
	auth0__dbconnections_change_password__fetch_post as post_auth0_dbconnections_change_password,
}
