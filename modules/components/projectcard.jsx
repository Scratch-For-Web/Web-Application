const projectcard = (props) => {
  console.log(props.id)
  let url = `#/editor/${props.id}/${JSON.parse(localStorage.getItem('pocketbase_auth')).model.id}`
  rmrf = () => {
    api.collection("projects").delete(props.id, {
      owner: JSON.parse(localStorage.getItem('pocketbase_auth')).model.id
    }
    ).then((res) => {
      document.getElementById(props.id).remove()

    })

  }
  let date = new  Date(props.created).toLocaleDateString()
  console.log(date)
  return (
    <div id={props.id} className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.desc}</p>
        <p className="text-sm text-gray-500">Project ID: {props.id}</p>
        <div className="divider">Created on {date}</div>
         
        <div className="card-actions justify-end">
          <a href={url} className="btn btn-ghost border border-black w-full">Open</a>
          <button onClick={rmrf} 
          className='text-sm btn btn-ghost hover:bg-transparent border border-black 
          w-full
          text-gray-500 hover:text-red-500 hover:cursor-pointer
          
          hover:border-red-500
          '>
            Delete
          </button>
        </div>
      </div>
    </div>

  )
}