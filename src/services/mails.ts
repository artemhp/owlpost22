import Letter from '../models/Mail';
import CoreApi from './core-api';

class MailService extends CoreApi {
  async send(payload: Letter) {
    const response = await this.http.post<string>('/mail', payload);
    return response.data;
  }
}

export default new MailService();