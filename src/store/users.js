import { createContext } from "react";

export const UserContext = createContext(null);

const UserStore = (props) => {
  const users = {
    name: "번듯한호랑이",
    job: "developer",
  };

  return (
    <UserContext.Provider value={users}>{props.children}</UserContext.Provider>
  );
};

export default UserStore;
