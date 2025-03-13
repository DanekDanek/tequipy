export interface UserOffboard {
  address: {
    streetLine1: string;
    country: string;
    postalCode: string;
    receiver: string;
  };
  notes: string;
  phone: string;
  email: string;
}
