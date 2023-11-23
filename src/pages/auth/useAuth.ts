import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_AUTH } from "../../Store/action";
import useClientRequest from "../../service/useClientRequest";
import { LoginFields } from "./field";

export const useAuth = () => {
  const form = useForm<LoginFields>();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { handleSubmit, register } = form;

  const service = useClientRequest({
    endpoint: "oauth/client",
  });

  const mutateLogin = service.RequestPost({
    onSuccess: async (res: any) => {
      await dispatch(
        SET_AUTH({
          user_id: res.data.data.user_id,
          name: res.data.data.name,
          access_token: res.data.access_token,
          is_authenticate: true,
        })
      );
      navigation("/");
    },
    onError: (err: any) => console.log(err),
  });
  const onSubmit: SubmitHandler<LoginFields> = async (data) => {
    await mutateLogin.mutate(data);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
  };
};
