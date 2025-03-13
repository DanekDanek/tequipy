import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserOffboard } from '@shared/user-offboard.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersHttpService {
  http = inject(HttpClient);

  offboardUser(userOffboard: UserOffboard, userId: string) {
    return this.http.post(`/api/users/${userId}/offboard`, { ...userOffboard });
  }
}
