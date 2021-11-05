import { LoginUserType } from "./loginUser";

export type LoginUserContextType = {
  loginUser: LoginUserType | null;
  setLoginUser: React.Dispatch<React.SetStateAction<LoginUserType | null>>;
};
