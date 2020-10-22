import { Api } from './api.js';
import Cookies from "js-cookie";
import {RoutinesApi} from "@/api/routines";

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
        let routineRepository = {
            name: "MyRepository",
            detail: "Exercise Repository",
            isPublic: false,
            difficulty: "rookie",
            category: {
                id: 1
            }
        }
        let cycleRepository = {
            name: "Cycle Repository",
            detail: "None",
            type: "warmup",
            order: 1,
            repetitions: 1
        }
        let responseRoutine = await RoutinesApi.addRoutine(routineRepository);
        let id = responseRoutine.id;
        await RoutinesApi.addCycle(id,cycleRepository);

    }

    static async getCurrentUser(){
        return await Api.get(`${UserApi.url}/current`,true);
    }

    static async getCurrentUserRoutines(){
        return await Api.get(`${UserApi.url}/current/routines`,true);
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
