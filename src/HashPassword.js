import { sha256 } from "js-sha256";
export function hash_password(password)
{
    return sha256.hmac('example_key', password)
}