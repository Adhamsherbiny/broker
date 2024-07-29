import mysql from "mysql"

export const databaseConnet = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "broker"
})

databaseConnet.connect((err)=>{
    if(err) throw err;
    console.log("database is ready to use")
})