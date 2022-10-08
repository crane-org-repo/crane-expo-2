import { createContext } from "react";

type SetValue = (value: { accessToken: string; signedIn: boolean }) => void;

type AuthContextInterface = {
  authState: { accessToken: string; signedIn: boolean };
  setAuthState: SetValue;
};

export const AuthContext = createContext<AuthContextInterface>({
  authState: { accessToken: "", signedIn: false },
  setAuthState: () => {},
});
