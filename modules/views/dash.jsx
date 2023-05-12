
function dash() {
    const [showModal, setShowModal] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [projects, setProjects] = useState([]);
   
    if(!localStorage.getItem('pocketbase_auth')){
        window.location.hash = '#/login'
    }
    let currentUser = JSON.parse(localStorage.getItem('pocketbase_auth')).model
    const handleCreateProject = (e) => {
        e.preventDefault();
        // TODO: handle project creation
        setShowModal(false);
        setProjectName('');
        var user = JSON.parse(localStorage.getItem('pocketbase_auth')).model
        var url = `#/createproject/${projectName}/${user.id}`
        window.location.hash = url

    }
    useEffect(() => {
        api.collection("projects").getList(1, 50, {
            owner: currentUser.id,
            filter: `owner="${currentUser.id}"`
          }).then((res) => {
            const newProjects = [...projects];
            res.items.forEach((item) => {
              dispose('./modules/components/projectcard.jsx', (Card) => {
                newProjects.push(<Card name={item.name} project_id={item.id} />);
                setProjects(newProjects);
              }, {name: item.name, project_id: item.id});
            });
          });
          
    }, [])

    return (
        <>
            <div className='flex flex-col justify-center mx-6 sm:mx-16'>
                <div className='flex flex-col sm:flex-row'>
                    <input className='mt-12 border focus:outline-none shadow-lg w-full sm:w-4/6 px-2 py-2 rounded mb-4 sm:mb-0' placeholder='Search for a project' />
                    <button onClick={() => setShowModal(true)} className="md:mt-12 border focus:outline-none shadow-lg md:w-1/6 mx-2 sm:w-full  px-2 py-2 rounded mb-4 sm:mb-0">Add Project</button>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8'>
                    {
                        projects.length > 0 ? projects : <h1 className=" flex justify-center text-2xl ">Woops Nothing To See Here!</h1>
                    }
</div>


      </div>
            
      {/* add project modal */}
      {showModal && (
                 <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4 ">Create New Project</h2>
            <form onSubmit={handleCreateProject}>
              <div className="mb-4">
                <label htmlFor="projectName" className="block font-medium mb-2">Project Name</label>
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="border-gray-400 border-2 rounded-md px-3 py-2 w-full"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={() => setShowModal(false)} className="bg-gray-400 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-500">Cancel</button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Create</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
