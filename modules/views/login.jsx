 function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = `#/gateway/${encodeURIComponent(username)}/${encodeURIComponent(password)}`;
    window.location.hash = url;
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8">Scratch 4 Web</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block font-medium mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full border-gray-300 rounded-md focus:outline-none px-5 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:outline-none px-5 py-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <button type="submit" className="w-full inline-flex items-center justify-center rounded-md border border-transparent shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Login
            </button>
            <a href="#/signup" className="w-full ml-4 inline-flex items-center justify-center rounded-md border border-transparent shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Signup
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
