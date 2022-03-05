const sql = require('mssql')
const config = {
 
  server: 'localhost\SQLEXPRESS',
user: "root",
  password: "root",
  database: "clauses",
  options: {
    enableArithAbort:true,
  },
connectionTimeout: 150000,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
 
};
sql.on("error",err=>{
console.log(error)
})

async function getDb(){
 try {
  // make sure that any items are correctly URL encoded in the connection string
  let pool=await sql.connect(config)
  let result = await pool.request().query("select * from student ")
  console.log(result)
sql.close()
 } catch (error) {
  console.log(error)
  sql.close()
 }
}
getDb();