import { useState } from "react";

const useInput = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    profileURL: "",
  });
  const updateUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: value,
      };
    });
  };

  return [userInfo, updateUserInfo];
};

export default useInput;
