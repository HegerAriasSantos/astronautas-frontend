import apiService from "../base";

class UsersService {
  static serviceUrl = "users";
  static async getAll() {
    const response = await apiService.get(this.serviceUrl);
    return response.data;
  }
  static async getOne(id: number) {
    const response = await apiService.get(`${this.serviceUrl}/${id}`);
    return response.data;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async create(user: any) {
    const response = await apiService.post(this.serviceUrl, {
      data: user,
    });
    return response.data;
  }

  static async delete(id: number) {
    const response = await apiService.delete(`${this.serviceUrl}/${id}`);
    return response.data;
  }
}

export default UsersService;
