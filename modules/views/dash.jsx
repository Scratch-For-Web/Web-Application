
function dash() {
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName ] = useState('');
  const [projectDesc, setProjectDesc ] = useState('');
  const [commits, setCommits] = useState([]);
  const [projects, setProjects] = useState([]);
 
  
  useEffect(() => {
    if (!localStorage.getItem('pocketbase_auth')) {
      window.location.hash = '#/login';
      return;
    }

    const currentUser = JSON.parse(localStorage.getItem('pocketbase_auth')).model;

    api.collection("projects")
    .getList(1, 50, {
      owner: currentUser.id,
      filter: `owner="${currentUser.id}"`
    })
    .then((res) => {
      const newProjects = [...projects];
      res.items.forEach((item) => {
        dispose('./modules/components/projectcard.jsx', (Project)=>{
          newProjects.push(<Project name={item.name} created={item.created} project_id={item.id} />);
          setProjects(newProjects);
        }, {id: item.id, name: item.name, created: item.created, desc: item.desc}) 
      });
    });
  }, []);

   function handleCreateProject(e) {
    
    // TODO: handle project creation
    if (projectName.length < 1) {
      alert('Please enter a project name');
      return;
    }
    setShowModal(false);
 
    var user = JSON.parse(localStorage.getItem('pocketbase_auth')).model;
   app.post('/projects', (res) => {
    res.set('Content-Type', 'application/json');
    res.json({ name: projectName, desc: projectDesc, owner: user.id});
   })
   let url = `#/editor/${projectName} /${user.id}`;
    if(!window.location.hash == url)     window.location.hash = url;
  };

  return (
    <>
      <div className='flex flex-col justify-center mx-6 sm:mx-16'>
        <div className='flex flex-col sm:flex-row'>
          <input className='mt-12 border focus:outline-none shadow-lg w-full sm:w-4/6 px-2 py-2 rounded mb-4 sm:mb-0' placeholder='Search for a project' />
          <label htmlFor="my-modal-3" className="md:mt-12 border focus:outline-none shadow-lg md:w-1/6 mx-2 sm:w-full  btn btn-outline hover:bg-transparent hover:text-black rounded mb-4 sm:mb-0">Add Project</label>

        </div>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8'>
          {
            projects.length > 0 ?   projects.map((project) => {
                return project;
            }) :
               
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">No projects found</h2>
                  <p>Click the button above to create a new project</p>
                </div>
              </div>

              


          }
        </div>


      </div>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        
            <div className="mb-4">
              <label htmlFor="projectName" className="block font-medium mb-2">Project Name</label>

               
              <input
                type="text"
                id="projectName"
                name="projectName"
                placeholder="Your project name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="border-gray-400 border-2 rounded-md px-3 py-2 w-full
                focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none
                "
                required
              />
               <input
                type="text"
                id="projectDec"
                name="projectName"
                placeholder="Your project description"
                value={projectDesc}
                onChange={(e) => setProjectDesc(e.target.value)}
                className="border-gray-400 border-2 rounded-md px-3 mt-2 py-2 w-full
                 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none
                "
                required
              />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full rounded-md hover:bg-blue-600"
              onClick={handleCreateProject }
              >Create</button>
            </div>
          
        </div>
        
      </div>
      { 
        localStorage.getItem('pb_cookie') ? '' :   <div className="alert shadow-lg "
        style={{position: 'fixed', bottom: '1rem', right: '1rem', width: '30rem',  }}
            >
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span className="w-full">We use cookies to  improve your experience on our site. To find out more, read our <a href="#" className="underline">cookie policy</a>.</span>
        </div>
        <div className="flex-none">
          <button className="btn btn-sm btn-ghost"
          onClick={() => {
            document.querySelector('.alert').style.display = 'none';
          }}
          >Deny</button>
          <button className="btn btn-sm btn-ghost  border-accent hover:bg-accent"
          onClick={() => {
            document.querySelector('.alert').style.display = 'none';
            localStorage.setItem('pb_cookie', true);
          }}
          >Accept</button>
        </div>
      </div>
      }
     
    </>
  )
}
