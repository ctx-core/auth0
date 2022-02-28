import { fetch, headers_ } from '@ctx-core/fetch-undici'
import { AUTH0_DOMAIN$_ } from './AUTH0_DOMAIN$_.js'
export async function post_auth0_dbconnections_change_password(ctx, body) {
	const res = await fetch(`https://${AUTH0_DOMAIN$_(ctx).$}/dbconnections/change_password`, {
		method: 'POST',
		headers: headers_({ 'Content-Type': 'application/json' }),
		body: JSON.stringify(body)
	})
	return [await res.text(), res]
}
