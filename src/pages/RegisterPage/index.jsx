

const RegisterPage = () => {
  return (
    <section>
      <div>
        <h1 className="text-3xl font-semibold text-center">
          회원가입
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-800">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 mt-2 bg-white border rounded-md"></input>
          </div>

          <div className="mb-2">
            <label htmlFor="name" className="text-sm font-semibold text-gray-800">Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 mt-2 bg-white border rounded-md"></input>
          </div>

          <div className="mb-2">
            <label htmlFor="password" className="text-sm font-semibold text-gray-800">Password</label>
            <input type="password" id="password" className="w-full px-4 py-2 mt-2 bg-white border rounded-md"></input>
          </div>

          <div className="mt-6">
            <button type="submit" className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 duration-200">회원가입</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default RegisterPage