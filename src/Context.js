import React from "react";

export const UserAuthContext = React.createContext({
  auth: false,
  userAuth: () => {},
});
