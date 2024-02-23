const app = require("./src/app")

const PORT = process.env.PORT || 3056

const server = app.listen(PORT, () => {
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log(PORT)
    console.log('WsV eCommerce start with ' + PORT)
})

// process.on('SIGINT', () => {
//     server.close( () => console.log('Exit server Express'))
// })