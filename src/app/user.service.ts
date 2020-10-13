import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IUser } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  async getAllFilteredUsers(id: any, name: any): Promise<IUser[]> {
    const response = this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users').toPromise();
    const result = this.filter(await response, id, name)
    return result;
}

filter(users: IUser[], id, name): { id: number, name: string }[] {
  return users.filter(user => user.id === id && user.name.toLocaleLowerCase() === name.toLocaleLowerCase());

}


}
