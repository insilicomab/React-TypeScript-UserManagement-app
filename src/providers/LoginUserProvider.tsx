import { createContext, useState } from "react";

import { LoginUserContextType } from "../types/loginUserContextType";
import { LoginUserType } from "../types/loginUser";

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
); // 強制的に型（LoginUserContextType）を指定

export const LoginUserProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const [loginUser, setLoginUser] = useState<LoginUserType | null>(null);

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
