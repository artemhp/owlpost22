import Student, { THouse } from '../models/Student';
import CoreApi from './core-api';

class StudentsService extends CoreApi {
  async getStudents(house: THouse) {
    const response = await this.http.get<Student[]>('/students', {
      params: { house }
    });
    return response.data;
  }

  async getStudent(id: number) {
    const response = await this.http.get<Student>('/students', {
      params: { id }
    });
    return response.data;
  }
}

export default new StudentsService();