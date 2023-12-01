const net = require('net')

const port = process.argv[2]

function getDate(){
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    hours = date.getHours()
    if(hours < 10){
        hours = "0" + hours
    }
    const minutes = date.getMinutes()
    return `${year}-${month}-${day}` + " " + `${hours}:${minutes}`
}

const server = net.createServer(function (socket) {
    socket.end(getDate() + '\n')
})
server.listen(port)