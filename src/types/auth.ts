export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}

export interface Company {
  id: string;
  name: string;
  industry: string;
  employees: number;
  address: string;
  website?: string;
}