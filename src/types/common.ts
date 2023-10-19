export interface IMeta {
  limit: number;
  page: number;
  size: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  contactNo: string;
  address: string;
  profileImg: string;
  createdAt: string;
  updatedAt: string;
  data: string | any;
}
export interface IService {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  availability: string;
  createdAt: string;
  updatedAt: string;
  data: string | any;
}
