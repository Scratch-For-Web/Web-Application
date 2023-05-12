const projectcard = (props) => {
    let url = `#/editor/${props.project_id}/${JSON.parse(localStorage.getItem('pocketbase_auth')).model.id}`
    return (
      <div className='bg-white rounded shadow-lg p-6 my-4'>
        <button className='text-sm text-gray-500 hover:text-red-500 hover:cursor-pointer'>Delete</button>
        <h2 className='text-lg font-bold'>{props.name}</h2>
        <p className='text-sm text-gray-500 mt-2'>somedata</p>
        <a  href={url} className='text-sm text-blue-500 hover:text-blue-600'>Open</a>
        <div className='flex justify-between items-center mt-4'>
          <p className='text-sm font-medium text-gray-700'>{props.created}</p>
           
        </div>
      </div>
    )
  }