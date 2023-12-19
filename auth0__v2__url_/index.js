/// <reference types="ctx-core" />
import { AUTH0_DOMAIN_ } from '../AUTH0_DOMAIN/index.js'
/** @typedef {Ctx} */
/**
 * @param {Ctx}ctx
 * @return {string}
 */
export function auth0__v2__url_(
	ctx
) {
	return `https://${AUTH0_DOMAIN_(ctx)}/api/v2/`
}
