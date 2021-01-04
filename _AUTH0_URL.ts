import { _package_version } from '@ctx-core/package'
export function _AUTH0_URL(): string {
  return `https://cdn.auth0.com/js/auth0/${_package_version('auth0-js')}/auth0.min.js`
}
