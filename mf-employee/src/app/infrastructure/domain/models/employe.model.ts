export interface IListEmployeeData {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

export interface IListEmployee {
  status: string;
  data: IListEmployeeData[];
  message: string;
}

export interface ICreateEmployee {
  name: string;
  salary: string;
  age: string;
}
