import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { registerUser } from "../../store/thunkFunctions";


const RegisterPage = () => {
  const {register,handleSubmit,formState:{errors}, reset}= useForm({mode:'onChange'})
  const dispatch = useDispatch();

  const onSubmit = ({email,password,name}) => {
    const body = {
      email : email,
      password : password,
      name : name,
      image: 'data:image/jpeg;base64,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',
    }
    console.log(body);

    dispatch(registerUser(body));

    reset();
  }
  const userEmail = {
    required: "필수 필드"
  }
  const userName = {
    required: "필수 필드"
  }
  const userPassword = {
    required: '필수 필드',
    minLength: {
      value: 6,
      message: '최소 문자 6자'
    }
  }

  return (
    <section className="flex flex-col justify-center mt-20 max-w-[400px] m-auto">
      <div className="p-6 bg-white rounded-md shadow-md">
        <h1 className="text-3xl font-semibold text-center">
          회원가입
        </h1>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-800">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 mt-2 bg-white border rounded-md" 
            {...register('email', userEmail)}></input>
            {
              errors?.email && 
              <div>
                <span className="text-red-500">
                  {errors.email.message}
                </span>
              </div>
            }
          </div>

          <div className="mb-2">
            <label htmlFor="name" className="text-sm font-semibold text-gray-800">Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 mt-2 bg-white border rounded-md" 
            {...register('name', userName)}></input>
            {
              errors?.name && 
              <div>
                <span className="text-red-500">
                  {errors.name.message}
                </span>
              </div>
            }
          </div>

          <div className="mb-2">
            <label htmlFor="password" className="text-sm font-semibold text-gray-800">Password</label>
            <input type="password" id="password" className="w-full px-4 py-2 mt-2 bg-white border rounded-md" 
            {...register('password', userPassword)}></input>
            {
              errors?.password && 
              <div>
                <span className="text-red-500">
                  {errors.password.message}
                </span>
              </div>
            }
          </div>

          <div className="mt-6">
            <button type="submit" className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 duration-200">회원가입</button>
          </div>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            아이디가 있다면{" "}
            <a href="/login" className="font-medium hover:underline">로그인</a>
          </p>
        </form>
      </div>
    </section>
  )
}

export default RegisterPage