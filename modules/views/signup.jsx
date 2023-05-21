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
            alert('An error occurred');
         });
      }

    };
  
    return (
      <>
       <div className="flex justify-center items-center h-screen  ">
         <div className="w-full max-w-sm p-4  rounded-lg  ">
              <h1 className="text-3xl font-bold text-center mb-8">Scratch 4 Web</h1>
           
              <div className="hero min-h-screen   ">
      <div className="hero-content flex-col lg:flex-row-reverse">
       
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  ">
          <div className="card-body">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input type="text" placeholder="username" className="input input-bordered"
              onChange={(e) => setUsername(e.target.value)}
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" 
              onChange={(e) =>  setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" 
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type="password" placeholder="Confirm password" className="input input-bordered" 
              onChange={(e) =>  setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-ghost border-1 border-accent"
              onClick={handleSubmit}
              >Signup</button>
              <a href="#/login" className="btn btn-ghost border-1 border-black mt-2">
                 Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
           
        </div>
        </div>
      </>
    );
  }
  