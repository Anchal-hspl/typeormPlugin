import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";

// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Ashish ";
//     user.lastName = "user";
//     user.age = 32;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Running Migration......: ");
//     // run migration command
//    // await connection.runMigrations();

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));

const getUserList = () =>{
    createConnection().then(async connection => {
    
        console.log("Loading users from the database...");
        const users = await connection.manager.find(User);
        console.log("Loaded users: ", users);
    
    }).catch(error => console.log(error));
}

getUserList()

export default getUserList