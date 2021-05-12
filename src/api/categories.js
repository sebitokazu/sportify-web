import { Api } from "./api.js";

class CategoriesApi {
    static get url() {
        return `${Api.baseUrl}/categories`;
    }

    static async retrieveAllCategories(controller) {
        return await Api.get(CategoriesApi.url, true, controller);
    }

    static async addCategory(category){
        return await Api.post(CategoriesApi.url, true);
    }

    static async getCategoryById(id){
        return await Api.post(`${CategoriesApi.url}/${id}`, true);
    }

    static async updateCategoryById(category){
        return await Api.put(`${CategoriesApi.url}/${id}`, true, category);
    }

    static async deleteCategoryById(category){
        return await Api.delete(`${CategoriesApi.url}/${id}`, true);
    }
}