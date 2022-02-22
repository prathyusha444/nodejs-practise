function getempId(){
    console.log("getting empid")}
    function showEmpdetails(){
        console.log("showing employee details")
    }
   var emp=new Promise((res,rej)=>{
       console.log("getting empid")
       res("emp details are received")
      // rej("emp details are not received")//
   })
   .then((data)=>{
       showEmpdetails()
   })
   .catch((err)=>{
       console.log("err while retriving empId"+err)
   })