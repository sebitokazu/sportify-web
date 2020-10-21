import { Api } from './api.js';
export { CyclesApi, Cycle };

class CylclesApi{
    static get url() {
        return `${Api.baseUrl}/cycles`;
    }

    static async get(routineId, controller) {
        return await Api.get(`${CylclesApi.url}/${routineId}`,true,  controller);
    }
}



