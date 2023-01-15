import { createContext } from "react";

type SetValue = (value: {
  accessToken: string;
  signedIn: boolean;
  isLoading: boolean;
  isNewUser: boolean;
}) => void;

type AuthContextInterface = {
  authState: {
    accessToken: string;
    signedIn: boolean;
    isLoading: boolean;
    isNewUser: boolean;
  };
  setAuthState: SetValue;
};

export const AuthContext = createContext<AuthContextInterface>({
  authState: {
    accessToken: "",
    signedIn: false,
    isLoading: false,
    isNewUser: false,
  },
  setAuthState: () => {},
});
