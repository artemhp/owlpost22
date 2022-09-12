import Student from '../models/Student';
import CoreApi from './core-api';

class StudentsService extends CoreApi {
  async getStudents() {
    const response = await this.http.get<Student[]>('/students');
    return response.data;
  }

  async getStudent(id: number) {
    const response = await this.http.get<Student>('/students', {
      params: { id: id }
    });
    return response.data;
  }
}

export default new StudentsService();