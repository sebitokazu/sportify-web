import { Api } from './api.js';
import Cookies from "js-cookie";

export { UserApi, Credentials };

class UserApi {
    static get url() {
        return `${Api.baseUrl}/user`;
    }

    static async login(credentials, controller) {
        const result = await Api.post(`${UserApi.url}/login`, false, credentials, controller);
        Api.token = result.token;
        return result;
    }

    static async logout(controller) {
        await Api.post(`${UserApi.url}/logout`, true,null, controller);
        Api.token = undefined;
    }

    static async register(userData){
        await Api.post(this.url, false, userData);
    }

    static setUserLogged(userLogged){
        Cookies.set("userLogged", userLogged);
    }

    static getUserLogged(){
        return Cookies.get("userLogged");
    }

    static deleteUserLogged(){
        Cookies.remove("userLogged");
    }

}

class Credentials {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}