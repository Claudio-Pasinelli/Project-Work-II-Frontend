export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  recipes: Recipe[];
  // passwordConfirm?: string;
  // firstName: string;
  // lastName: string;
  // phone?: string;
  // resourceId: number;
  // id?: number;
  // createdAt?: Date;
  // role?: string;
  // uid?: string;
  // updatedAt?: Date;
}

export interface Message {
  name: string;
  email: string;
  message: string;
}
export interface Recipe {
  id?: number;
  idUser: string;
  title: string;
  ingredients: string;
  process: string;
  bgColor?: string;
  type: string;
}

export type IErrorFullContacts = {
  email: string | null;
  message: string | null;
};

export type IError = {
  name: string | null;
  email: string | null;
  message: string | null;
  termsOfService: string | null;
};

// export type ReturnContacts = TypedResponse<{
//   success: boolean;
//   errorsContacts?: IErrorFullContacts;
//   errors?: IError;
//   resendError?: ErrorResponse;
//   data?: unknown;
// }>;
