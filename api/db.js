import mysql from "mysql"
export const db= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "harsh@123",
    database: "flightproject"
})