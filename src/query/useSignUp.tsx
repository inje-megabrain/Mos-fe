import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/signup";

export default function useSignUp() {
  const navigate = useNavigate();

  const mutation = useMutation(signup, {
    onSuccess: () => {
      navigate("/login");
    },
    onError: () => {
      console.log("err");
    },
  });
  return mutation;
}
