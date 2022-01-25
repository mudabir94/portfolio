const request = require('supertest')
const app = require('../app')
const jwt= require("jsonwebtoken")
const User = require("../models/user")
const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
const { response } = require('../app')

const userOneId = new mongoose.Types.ObjectId()

const userOne= {
    _id:userOneId,
    name:"Mike", 
    email:"mike@example.com",
    password:"MyPass777!",
    tokens: [{
        token:jwt.sign({_id:userOneId},"authtoken")
    }]
}

beforeEach(async ()=>{
    await User.deleteMany()
    await new User(userOne).save()
})

test("Should signup new user",async () =>{
    const response=await request(app).post("/users").send(
        {
            name:"Mudabir",
            email:"mud@example.com",
            password:"1234abcd"
        }).expect(201)

        const user = await User.findById(response.body.user._id)
        expect(user).not.toBeNull()
        // Assertion about the response
        expect(response.body).toMatchObject({
            user:{ name:"Mudabir",
            email:"mud@example.com"},
            token:user.tokens[0].token})
        expect(user.password).not.toBe("MyPass777!")
        expect(response.body.user.name).toBe('Mudabir')
})

test("Should login exsisting user",async () =>{
    
    
    const response= await request(app).post("/users/login").send({
        email:userOne.email,
        password:userOne.password
        }).expect(200)
        const user = await User.findById(userOneId)
        expect(response.body.token).toBe(user.tokens[1].token)
})


test("Should  not login nonexsistant user",async () =>{
   
    await request(app).post("/users/login").send({
            email: "sss@gmail.com",
            password: "MyPass777!"
        }).expect(400)
})
 
test("Should  get profile for user",async () =>{
    await request(app)
    .get("/users/me")
    .set('Autherization',`Auth ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
})
  
test("Should not get profile for unauthenticated user",async () =>{
    await request(app)
    .get("/users/me")
    .send()
    .expect(401)
})


test("Should delete account for user",async () =>{
    await request(app)
    .delete("/users/me")
    .set('Autherization',`Auth ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
    const user = await User.findById(userOneId)
    expect(user).toBeNull()
})

test("Should not delete account for unauthenticated user",async () =>{
    await request(app)
    .delete("/users/me")
    .send()
    .expect(401)
})


// test("Should update user fields",async () =>{
//     await request(app)
//     .patch("/users/me")
//     .set('Autherization',`Auth ${userOne.tokens[0].token}`)
//     .send({
//         name:'Jess'
//     })
//     .expect(200)
// })
