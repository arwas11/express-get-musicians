// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");


describe('./musicians endpoint', () => {
    // Write your tests here
    
    test("Testing musicians endpoint", async () => {
        // Sends request to `/bakedGoods` endpoint
        const response = await request(app).get("/musicians");
        expect(response.statusCode).toBe(200);
    })

    test("Testing musician name", async () => {
        // Sends request to `/bakedGoods` endpoint
        const response = await request(app).get("/musicians");
        const responseData = await JSON.parse(response.text);
        expect(responseData[2].name).toBe("Jimi Hendrix");

    })



    
})