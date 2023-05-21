function Settings() {
    const [username, setUsername] = useState('');
    const [newusername, setNewUsername] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
       
      let form = new FormData();
       if(newusername != '') {
        form.append('username', newusername);
       }
      form.append('avatar', avatar);
      api.collection('users').authWithPassword(username, password).then((user) => {
        api.collection('users').update(user.record.id, form).then(() => {
          alert('Saved!');
          api.collection('users').authRefresh();
          window.location.hash = '#/dash';
        });
      });
    };
  
    return (
      <div className="max-w-lg mx-auto mt-4">
        <h1 className="text-3xl font-bold mb-4">Settings</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-gray-400 border-2 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="newusername" className="block font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="newusername"
              name="username"
              placeholder="New Username"
              value={username}
              onChange={(e) =>  setNewUsername(e.target.value)}
              className="border-gray-400 border-2 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">
              Password
            </label>
            <input
            
              type="password"
              id="password"
              
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-gray-400 border-2 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="avatar" className="block font-medium mb-2">
              Avatar
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              
              onChange={(e) =>   setAvatar(e.target.files[0])}
              className="border-gray-400 border-2 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">
            Save
          </button>
        </form>
      </div>
    );
  }
  