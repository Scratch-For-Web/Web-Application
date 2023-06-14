
/**
 * @imports -> toolbox, main imports, tailwindcss
 */
import{ toolbox } from "./modules/blockly/main/toolbox.js"
import "./modules/blockly/main/imports.js"
import pocketbase from "https://unpkg.com/pocketbase"
import { ReactRouter } from "./modules/assets/visi.min.js"
const app = new ReactRouter()
const api = new pocketbase("https://shaggy-denmark.pockethost.io")
 
if(api.authStore.isValid){
    console.log("User is logged in")
}else{
    api.authStore.clear()
    console.log("User is not logged in")
    window.location.hash = "#/login"
}
lib('@tailwind/daisyui@3.0.22')
window.toolbox = toolbox // global variable for toolbox
window.api = api
window.app = app
api.autoCancellation(false)
updateCacheVersion('v1.0.0') // update cfr cache to use next version!
app.bindRoot("root")
app.use('/dash')
app.use('/editor')
app.use('/login')
app.root("/dash", (req, res) =>{
    dispose('./modules/views/dash.jsx', async ( Dash ) => {
        res.jsx(<Dash/>)
    })
 res.return()
})

app.on("/dash", (req, res) =>{
    dispose('./modules/views/dash.jsx', async ( Dash ) => {
        res.jsx(<Dash/>)
    })
 res.return()
})

app.on("/editor/:project_id/:owner_id", (req, res) =>{
    res.title("Dashboard")
    res.return()
     api.collection('projects').getOne(req.params.project_id, {
        owner: req.params.owner_id,
    }).then((project) => {
       dispose('./modules/views/editor.jsx', async ( Editor ) => {
        res.jsx(<Editor project={project}/>)
       }, {
              project_id: project.id,
              project_name: project.name,
              workspaceCode: project.workspace
       })
    })
 
    res.return()
})
 
app.on('/login', (req, res) => {
    res.title("Login")
    res.return()
    dispose('./modules/views/Login.jsx', async ( Login ) => {
        console.log(Login)
        res.jsx(<Login/>)
    })
    res.return()
})
app.get('/login', (req, res) => {
    res.title("Login")
    res.return()
    dispose('./modules/views/Login.jsx', async ( Login ) => {
        console.log(Login)
        res.jsx(<Login/>)
    })
    res.return()
    app.listen('/login', (data) => {
        let msg  = JSON.parse(data.data)

        api.collection("users").authWithPassword(msg.username, msg.password).then((user) => {
            
            res.return()
            res.redirect("/dash")
            res.return()
            app.stopListening('/login')
          
        }).catch((err) => {
             let data  = err.data.data
            if(data.password){
                
                app.post('/login_response', (res) => {
                    res.set('Content-Type', 'application/json')
                    res.json({error: data.password, type: "password"})
                     
                })
            }else if(data.username){
                app.post('/login_response', (res) => {
                    res.set('Content-Type', 'application/json')
                    res.json({error: err.data.username, type: "username"})
                    
                })
            }else{
                app.post('/login_response', (res) => {
                    res.set('Content-Type', 'application/json')
                    res.json({error: "Unknown error"})
                    
                })
            }
             
        })
    })
})
app.on('/register', (req, res) => {
    res.title("Register")
    res.return()
    dispose('./modules/views/signup.jsx', async ( Register ) => {
        res.jsx(<Register/>)
    })
    res.return()
})

app.on('/settings', (req, res) => {
    res.title("Settings")
    res.return()
    dispose('./modules/views/Settings.jsx', async ( Settings ) => {
        res.jsx(<Settings/>)
    })
    res.return()
})
app.listen('/projects', (data) => {
    let msg  = JSON.parse(data.data)
    console.log(msg)
    let project_name = msg.name
    let project_desc = msg.desc
    let owner_id = msg.owner
    let ddata = {
        "name": project_name,
        "owner": owner_id,
        "desc": project_desc,
        "workspace": ""
    }
    api.collection("projects").create(ddata).then((project) => {
       window.location.href = `#/editor/${project.id}/${project.owner}`
    }
    ).catch((err) => {
            console.log(err.data)
            alert('Error creating project, name already exists')
        }
    )
})
app.on('/createproject/:project_name/:project_desc/:owner_id', (req, res) => {
    let project_name = req.params.project_name
    let project_desc = req.params.project_desc
    let owner_id = req.params.owner_id
    let data = {
        "name": project_name,
        "owner": owner_id,
        "desc": project_desc,
        "workspace": ""
    }
    api.collection("projects").create(data).then((project) => {
        res.redirect(`/editor/${project.id}/${project.owner}`)
    }).catch((err) => {
         console.log(err.data)
         alert('Error creating project, name already exists')
    })
})
app.onload(() => {
    console.log("Router is ready")
})

