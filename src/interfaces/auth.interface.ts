export type ILoginInput = {
  email: string;
  password: string;
};

export type ISignupInput = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword: string;
};

export type IFormCheck = {
  isDone: number[];
  isActive: number;
};

export type IFormCheckProps = {
  formCheck: IFormCheck;
};
