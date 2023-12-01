const http = require('http')
const bl = require('bl')

let result = ["", "", ""]
let counter = 0

for(let i = 0; i < 3; i++){
    http.get(process.argv[2 + i], function (response) {
        response.pipe(bl(function (err, data) {
            if(err){
                return console.error(err)
            }
            result[i] = data.toString()

            counter++
            if(counter >= 3){
                result.forEach(data =>{
                    console.log(data)
                })
            }
        }))
    })
}