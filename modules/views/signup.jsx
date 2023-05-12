function signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
  
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
        const data = {
            "username": username,
            "email":  email,
            "emailVisibility": true,
            "password":  password,
            "passwordConfirm":  password,
            "name": "test"
        };
        
         api.collection('users').create(data).then((response) => {
            alert('User created successfully');
            window.location.hash = '#/login';
         }).catch((error) => {
            alert('An error occurred');
         });
      }

    };
  
    return (
      <>
       <div className="flex justify-center items-center h-screen bg-gray-100">
         <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow-md">
              <h1 className="text-3xl font-bold text-center mb-8">Scratch 4 Web</h1>
           
          {/* signup form */}
          <div className="flex flex-col justify-center items-center w-full">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full">
              <input 
                type="text"
                placeholder="Email"
                className={`w-full border-gray-300 rounded-md focus:outline-none px-5 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${emailError ? 'border-red-500' : ''}`}
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                    setEmailError('');
                }}
                />
                {emailError && <span className="text-red-500">{emailError}</span>}
              <input
                type="text"
                placeholder="Username"
                className={`w-full border-gray-300 rounded-md focus:outline-none px-5 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${usernameError ? 'border-red-500' : ''}`}
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                  setUsernameError('');
                }}
              />
              {usernameError && <span className="text-red-500">{usernameError}</span>}
              <input
                type="password"
                placeholder="Password"
                className={`focus:outline-none border-2 w-full rounded-md p-2 m-2 ${passwordError ? 'border-red-500' : ''}`}
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setPasswordError('');
                }}
              />
              {passwordError && <span className="text-red-500">{passwordError}</span>}
              <input
                type="password"
                placeholder="Confirm Password"
                className={`w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:outline-none px-5 py-2 focus:ring-blue-500 ${confirmPasswordError ? 'border-red-500' : ''}`}
                value={confirmPassword}
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                  setConfirmPasswordError('');
                }}
              />
              {confirmPasswordError && <span className="text-red-500">{confirmPasswordError}</span>}
              <button type="submit" className="border-2 bg-blue-500 text-white rounded-md p-2 m-2 w-full">Signup</button>
              <a href="#/login" className="border-2 bg-blue-500 text-center text-white rounded-md p-2 m-2 w-full">Or Login</a>
            </form>
          </div>
        </div>
        </div>
      </>
    );
  }
  