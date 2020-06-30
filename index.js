const app = require('./api/server')

// Settings
app.set('port', process.env.PORT || 7000)

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})