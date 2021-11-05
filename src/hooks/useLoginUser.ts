import { useContext } from "react";

import { LoginUserContextType } from "../types/loginUserContextType";
import { LoginUserContext } from "../providers/LoginUserProvider";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
