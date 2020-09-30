import { assign } from '@ctx-core/object'
import { fetch } from '@ctx-core/fetch'
import { get } from '@ctx-core/store'
import { throw_unauthorized } from '@ctx-core/error'
import {
	_jwt_token__authorization__header, validate__current__jwt,
} from '@ctx-core/jwt'
import {
	__AUTH0_CLIENT_ID, __AUTH0_DOMAIN, __token__auth0, set__error__token__auth0,
} from './store--base'
import {
	_authorization__header__access_token, _authorization__header__access_token__verify,
	get__userinfo__auth0, Opts__get__userinfo__auth0, validate__current__token__auth0,
} from './fetch--base'
import type { auth0_error_ctx_type } from './auth0_error_ctx_type'
export {
	_authorization__header__access_token, _authorization__header__access_token__verify,
	Opts__get__userinfo__auth0, get__userinfo__auth0,
}
export async function get__jwks__json() {
	return fetch(`https://${get(__AUTH0_DOMAIN)}/.well-known/jwks.json`)
}
export function post__signup__dbconnections__auth0(body) {
	return (
		fetch(
			`https://${get(__AUTH0_DOMAIN)}/dbconnections/signup`,
			{
				method: 'POST',
				headers:
					{ 'Content-Type': 'application/json' },
				body: JSON.stringify(body)
			})
	)
}
export function post__start__passwordless__auth0(body) {
	const { hostname, pathname } = window.location
	const redirect_uri = `https://${hostname}/auth?url__redirect=${pathname}`
	assign(body, { authParams: { redirect_uri } })
	return (
		fetch(
			`https://${get(__AUTH0_DOMAIN)}/passwordless/start`,
			{
				method: 'POST',
				headers:
					{ 'Content-Type': 'application/json' },
				body: JSON.stringify(body)
			})
	)
}
export async function post__change_password__auth(password) {
	const body = { password }
	const Authorization = await _authorization__header__id_token__verify(get(__token__auth0))
	return (
		fetch(
			'/auth/change_password',
			{
				method: 'POST',
				headers:
					{
						'Content-Type': 'application/json',
						Authorization,
					},
				body: JSON.stringify(body)
			})
	)
}
export function post__change_password__dbconnections__auth0(body) {
	const promise =
		fetch(
			`https://${get(__AUTH0_DOMAIN)}/dbconnections/change_password`,
			{
				method: 'POST',
				headers:
					{ 'Content-Type': 'application/json' },
				body: JSON.stringify(body)
			})
	return promise
}
export function post__token__oauth__auth0(body) {
	return (
		fetch(`https://${get(__AUTH0_DOMAIN)}/oauth/token`, {
			method: 'POST',
			headers:
				{ 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
		})
	)
}
export async function _authorization__header__id_token__verify(auth0_token) {
	const authorization__header__id_token = _authorization__header__id_token(auth0_token)
	try {
		if (!authorization__header__id_token) {
			throw_unauthorized(auth0_token as auth0_error_ctx_type)
		}
		await validate__current__token__auth0(auth0_token)
		const jwt_token = _jwt_token__authorization__header(authorization__header__id_token)
		validate__current__jwt(jwt_token)
	} catch (err) {
		console.error(err)
		set__error__token__auth0(err)
		throw_unauthorized(err)
	}
	return authorization__header__id_token
}
function _authorization__header__id_token(auth0_token) {
	const token_type = auth0_token && auth0_token.token_type
	const id_token = auth0_token && auth0_token.id_token
	return (
		token_type && id_token
		? `${token_type} ${id_token}`
		: null
	)
}
export function _body__password_realm(...form) {
	const body__password_realm =
		_body(
			{
				grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
				realm: 'Username-Password-Authentication',
				connection: 'Username-Password-Authentication'
			},
			...form)
	return body__password_realm
}
export function _body(...form) {
	return assign({ client_id: get(__AUTH0_CLIENT_ID) }, ...form)
}
