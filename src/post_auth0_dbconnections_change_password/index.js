import { fetch } from '@ctx-core/fetch-undici'
import { AUTH0_DOMAIN__ } from '../AUTH0_DOMAIN__/index.js'
export async function post_auth0_dbconnections_change_password(ctx, body) {
	const res = await fetch(`https://${AUTH0_DOMAIN__(ctx).$}/dbconnections/change_password`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	})
	return [await res.text(), res]
}
