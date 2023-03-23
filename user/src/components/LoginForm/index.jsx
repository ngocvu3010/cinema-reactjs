import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { toast, ToastContainer } from 'react-toastify';


const LoginForm = ({activeTab}) => {
  const navigate = useNavigate();
  const Schema = yup
  .object({
    email: yup.string().required("Email không được để trống"),
    password: yup
    .string()
    .required("Mật khẩu không thể để trống")
  })
  .required();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(Schema),
  });

  const handleLogin = async (data) => {
    const url = process.env.REACT_APP_HOST + `/users?email=${data.email}&password=${data.password}`
    await fetch(url)
    .then(res => res.json())
    .then((user) => {
      if (Object.keys(user).length === 0) {
        toast.error('email or password are wrong!')
      } else {
        sessionStorage.setItem('user_id', user[0].id)
        navigate("/movies");
      }
    })
    .catch((err) => {
      toast.error("Login failed!")
    })
}

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(handleLogin)}
        className={
          activeTab === "login"
            ? "tab-pane fade in active"
            : "tab-pane fade"
        }
        id="login"
      >
        <div className="form-group">
          <div className="col-md-16 margin-bottom-10">
            <label className="control-label font-16">Email</label>
            {errors?.email && (
              <span className="d-block color-red">
                {errors?.email?.message}
              </span>
            )
            }
            <div className="input-icon">
              <i className="fa fa-user" />
              <input
                {...register("email")}
                type="text"
                id="txtLoginName"
                className="form-control"
                placeholder="Email"
              />
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="form-group">
          <div className="col-md-16 margin-bottom-20">
            <label className="control-label font-16">Mật khẩu</label>
            {errors?.password && (
              <span className="d-block color-red">
                {errors?.password?.message}
              </span>
            )
            }
            <div className="input-icon">
              <i className="fa fa-lock" />
              <input
                {...register("password")}
                type="password"
                id="txtLoginPassword"
                className="form-control"
                placeholder="Mật khẩu"
              />
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="form-group">
          <div className="col-md-16 margin-bottom-20">
            <a href="#doimatkhau-pop-up" className="fancybox-fast-view">
              Quên mật khẩu?
            </a>
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-16 text-center">
            <div className="form-group">
              <input
                type="submit"
                style={{ minWidth: 220 }}
                id="btnLogin"
                className="btn btn-3 btn-mua-ve"
                value="Đăng nhập bằng tài khoản"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default LoginForm
