function getempId(){
    console.log("getting empid")}
    function showEmpdetails(){
        console.log("showing employee details")
    }
    try{
        console.log("getting empid")
    }
    catch(err){
        console.log("err while retriving data"+err)
    }
    finally{
        showEmpdetails()
    }
    
    