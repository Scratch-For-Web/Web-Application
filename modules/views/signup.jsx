function signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [error, setError] = useState({ error: '', type: '' });
    let [loginState, setLoginState] = useState(false);
    const handleSubmit = (event) => {
      event.preventDefault();
      let isValid = true;
  
      if (!username) {
        setUsernameError('Please enter a username');
        isValid = false;
      }
      if(!email) {
        setEmailError('Please enter an email');
        isValid = false;
      }
      const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
        };
        if (!validateEmail(email)) {
        setEmailError('Please enter a valid email address');
        isValid = false;
        }
  
      if (!password) {
        setPasswordError('Please enter a password');
        isValid = false;
      }
  
      if (!confirmPassword) {
        setConfirmPasswordError('Please confirm your password');
        isValid = false;
      }
  
      if (password !== confirmPassword) {
        setConfirmPasswordError('Passwords do not match');
        isValid = false;
      }
  
      if (isValid) {
        console.log('submitting');
         

        const data = {
            "username": username,
            "email":  email,
            "emailVisibility": true,
            "password":  password,
            "passwordConfirm":  password,
        };
        
         api.collection('users').create(data).then((response) => {
            alert('User created successfully');
            window.location.hash = '#/login';
         }).catch((error) => {
            let data = error.data.data
            if(data.error.password){
                setPasswordError(data.error.password)
            }else if (data.error.username){
                setUsernameError(data.error.username)
            }
                else if (data.error.email){
                    setEmailError(data.error.email)
                }
                else{
                    setError({
                        error: data.error,
                        type: 'unknown'
                     })
                }

         });
      }

    };
  
    return (
      <>
       <div className="w-full  mt-20 max-w-xl justify-center items-center h-screen mx-auto  ">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <h1  className="text-3xl font-bold text-center mb-8"> Create Account</h1>
          <div className="alert alert-error hidden">
            {
              error.type === 'unknown' ? <p className="text-red-500 text-xs italic">Likely your username or password is incorrect!</p> :
                <p className="text-red-500 text-xs italic">{JSON.stringify(error.error)}</p>

            }
          </div>
          <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input  className={
              emailError ? "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" :
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          }
            id="email" type="email" placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

          <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input  className={
             usernameError ? "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" :
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          }
            id="username" type="text" placeholder="Username" 
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
       
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="password">

            Password
          </label>
          <input  className={
              passwordError ? "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" :
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          }
            id="password" type="password" placeholder="******************"
            onChange={(e) => setPassword(e.target.value)}
          />
           
         
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="confirmPassword">
            Confirm Password
          </label>
          <input  className={
              confirmPasswordError ? "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" :
                "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          }
            id="confirmPassword" type="password" placeholder="******************"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-500   hover:bg-blue-700 text-white font-bold py-2 px-4 rounded

            focus:outline-none focus:shadow-outline"
            type="submit"
            
          >
           {
              loginState ? <span className="loading loading-dots loading-md"></span>
             : 'Sign Up'
           }
          </button>
          <a href="#/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"

          >
            Already have an account? Login
          </a>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#">
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2023 Scratch 4 Web. All rights reserved.
      </p>
    </div>
      </>
    );
  }
  
