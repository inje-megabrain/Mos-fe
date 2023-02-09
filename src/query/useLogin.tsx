import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../api/login";

export default function useLogin() {
  const navigate = useNavigate();

  const mutation = useMutation(login, {
    onSuccess: () => {
      navigate("/os");
    },
    onError: () => {
      console.log("err");
    },
  });
  return mutation;
}
