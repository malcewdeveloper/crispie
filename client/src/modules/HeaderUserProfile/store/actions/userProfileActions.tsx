import fetchLogoutRequest from "../../api/fetchLogoutRequest";
import { AUTH_LOGOUT } from "../../../../store/types/types";

export async function logout() {
    await fetchLogoutRequest();

    return {
        type: AUTH_LOGOUT
    }
}