const app = new Router()
app.bindRoot('app')
app.use('/')

app.get('/', (req, res) => {
    res.render('main')
    res.return()
})

app.on('/', (req, res) =>{
    res.render('main')
    res.return()
})

app.root('/', (req, res) =>{
    res.render('main')
    res.return()
})
app.listen('/', (res) =>{
    console.log(res)
    
})
 
 