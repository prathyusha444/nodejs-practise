//normal await program//
{var fs=require('fs')
console.log("program started")
let myData=fs.readFileSync('date.txt')
     console.log(myData.toString())
     console.log("program_ended")}

//callback used//
{var fs=require('fs')
console.log("program started")
fs.readFile('date.txt',function(err,mydata){
    if(err){
        return console.log(err)
    }
    else {
        console.log(mydata.toString())
    }
})
console.log("program_ended")
}