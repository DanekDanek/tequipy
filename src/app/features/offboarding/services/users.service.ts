import { inject, Injectable } from '@angular/core';
import { UsersHttpService } from './users-http.service';
import { UserOffboard } from '../../../shared/interfaces/user-offboard.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersHttpService = inject(UsersHttpService);

  offboardUser(userOffboard: UserOffboard, userId: string) {
    this.usersHttpService.offboardUser(userOffboard, userId).subscribe();
  }
}
