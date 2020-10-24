import { Api } from "./api.js";
import Cookies from "js-cookie";
import { RoutinesApi } from "@/api/routines";

export { UserApi, Credentials };

class UserApi {
    static get url() {
        return `${Api.baseUrl}/user`;
    }

    static async login(credentials, controller) {
        const result = await Api.post(
            `${UserApi.url}/login`,
            false,
            credentials,
            controller
        );
        Api.token = result.token;
        localStorage.setItem("SavedToken", "Bearer " + Api.token);
        return result;
    }

    static async logout(controller) {
        await Api.post(`${UserApi.url}/logout`, true, null, controller);
        Api.token = undefined;
        localStorage.removeItem("SavedToken");
    }

    static async register(userData) {
        let user = await Api.post(this.url, false, userData);
        let routineRepository = {
            name: "MyRepository",
            detail: "Exercise Repository",
            isPublic: false,
            difficulty: "rookie",
            category: {
                id: 1
            }
        };
        let cycleRepository = {
            name: "Cycle Repository",
            detail: "None",
            type: "warmup",
            order: 1,
            repetitions: 1
        };
        let responseRoutine = await RoutinesApi.addRoutine(routineRepository);
        let id = responseRoutine.id;
        let cycleid = await RoutinesApi.addCycle(id, cycleRepository);
        cycleid = cycleid.id;
        delete user.dateCreated;
        delete user.dateLastActive;
        delete user.deleted;
        delete user.verified;
        delete user.id;
        user.phone = `${id}|${cycleid}`;
        console.log(id, cycleid);
        console.log(user);
        await this.updateCurrentUser(user);
    }

    static async validate(data) {
        return await Api.post(`${UserApi.url}/verify_email`, false, data);
    }

    static async getCurrentUser() {
        return await Api.get(`${UserApi.url}/current`, true);
    }

    static async updateCurrentUser(userData) {
        return await Api.put(`${UserApi.url}/current`, true, userData);
    }

    static async getCurrentUserRoutines(page, size) {
        return await Api.get(
            `${UserApi.url}/current/routines/?page=${page}&size=${size}&orderBy=dateCreated&direction=asc`,
            true
        );
    }

    static async getCurrentUserGodIds() {
        let user = await this.getCurrentUser();
        console.log(user.phone);
        return user.phone.split("|");
    }

    static setUserLogged(userLogged) {
        Cookies.set("userLogged", userLogged);
    }

    static getUserLogged() {
        return Cookies.get("userLogged");
    }

    static deleteUserLogged() {
        Cookies.remove("userLogged");
    }
}

class Credentials {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
