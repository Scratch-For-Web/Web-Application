const app = new ReactRouter()
 
/**
 * @imports -> toolbox, main imports, tailwindcss
 */
import{ toolbox } from "./modules/blockly/main/toolbox.js"
import "./modules/blockly/main/imports.js"
import pocketbase from "https://unpkg.com/pocketbase"
const api = new pocketbase("https://shaggy-denmark.pockethost.io")
lib('@tailwindcss/typography')
window.toolbox = toolbox // global variable for toolbox
window.api = api
api.autoCancellation(false)

app.bindRoot("root")

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
        res.jsx(<Login/>)
    })
    res.return()
})
app.on('/register', (req, res) => {
    res.title("Register")
    res.return()
    dispose('./modules/views/signup.jsx', async ( Register ) => {
        res.jsx(<Register/>)
    })
    res.return()
})

app.on('/gateway/:username/:password', (req, res) => {
    let password = req.params.password
    let username = req.params.username
    api.collection("users").authWithPassword(username, password).then((user) => {
        res.redirect("/dash")
    })
})
app.on('/settings', (req, res) => {
    res.title("Settings")
    res.return()
    dispose('./modules/views/Settings.jsx', async ( Settings ) => {
        res.jsx(<Settings/>)
    })
    res.return()
})
app.on('/createproject/:project_name/:owner_id', (req, res) => {
    let project_name = req.params.project_name
    let owner_id = req.params.owner_id
    let data = {
        "name": project_name,
        "owner": owner_id,
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

