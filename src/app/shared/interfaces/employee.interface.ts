import { Equipment } from './equipment.interface';

export interface Employee {
  id: string;
  name: string;
  department: string;
  status: string;
  email: string;
  equipments: Equipment[];
}
