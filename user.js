"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._user_id = void 0;
function _user_id(decoded__token__jwt) {
    return (decoded__token__jwt
        && (decoded__token__jwt.user_id
            || decoded__token__jwt.sub));
}
exports._user_id = _user_id;
