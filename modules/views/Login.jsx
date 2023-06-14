function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ error: '', type: '' });
  let [loginState, setLoginState] = useState(false);
 function handleSubmit(event) {
    event.preventDefault();
    console.log(username, password)
    app.post('/login', (res) => {
      res.set('Content-Type', 'application/json');
      res.json({ username: username, password: password});
     
    })
    app.listen('/login_response', (res) => {
      let data = JSON.parse(res.data)
      
       if(data.error){
         setError({
            error: data.error,
            type: data.type
         })
          setLoginState(false)
       }
       app.stopListening('/login_response')
    })
     setLoginState(true)
  };

  return (
    <div className="w-full  mt-20 max-w-xl justify-center items-center h-screen mx-auto  ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <h1  className="text-3xl font-bold text-center mb-8">Scratch 4 Web</h1>
          <div className="alert alert-error hidden">
            {
              error.type === 'unknown' ? <p className="text-red-500 text-xs italic">Likely your username or password is incorrect!</p> :
                <p className="text-red-500 text-xs italic">{JSON.stringify(error.error)}</p>

            }
          </div>
          <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Username" 
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="password">

            Password
          </label>
          <input className={
            error.type == 'password' ? "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" :
              "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          }
            id="password" type="password" placeholder="******************"
            onChange={(e) => setPassword(e.target.value)}
          />
           
         
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500   hover:bg-blue-700 text-white font-bold py-2 px-4 rounded

            focus:outline-none focus:shadow-outline"
            type="submit"
            
          >
           {
              loginState ? <span className="loading loading-dots loading-md"></span>
             : 'Sign In'
           }
          </button>
          <a href="#/register" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"

          >
            Sign Up
          </a>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#">
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Scratch 4 Web. All rights reserved.
      </p>
    </div>


  );
}
