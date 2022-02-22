function getempId(){
console.log("getting empid")}
function showEmpdetails(){
    console.log("showing employee details")
}
getempId();
showEmpdetails();


/*using setTimeout delay getempid details so first it runs 
showing details*/

{function getempId(){
    setTimeout(()=>{
    console.log("getting empid")},5000);
}
    function showEmpdetails(){
        console.log("showing employee details")
    }
    getempId();
    showEmpdetails();}