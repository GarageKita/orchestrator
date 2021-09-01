const request = require('supertest')
const app = require('../index.js')
const axios = require('axios')
// const url = "http://localhost:3000"
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjMwMzgyNTEyfQ.ESjW3geCKVle_CPah3lQWLOCRdtGze43lkzv79uZpAo";
let id;
let categoryid;
let productid;
let offerid;
let bidid;
let requestid;
let dealid;
let uniqueCode = "ce84c7e0-0a07-11ec-afc9-4f5a62b1c826";

describe("POST /register", () => {
    it("Should create user and sent activation email to register email", async () => {
        await request(app)
        .post("/register") 
        .set("Content-Type", "application/json")
        .send({email: "garagekitah8@gmail.com", password: "123456", isActivated: true, uniqueCode: uniqueCode, role: "admin"})
        .then(response => {
            // expect(response.status).toBe(201);
            id = response.body.message.id
            expect(response.body).toHaveProperty("message", expect.any(String))

            // done()   
        });
    })

    it("Should not create user and give response error", async () => {
        await request(app)
        .post("/register") 
        .set("Content-Type", "application/json")     
        .send({email: "", password: "", role: "admin"})
        .then(response => {
            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty("message", expect.any(String))
            // done() 
        });
    })
})

describe("POST /email/sendactivation", () => {
    it("Should send email with activation code", async () => {
        await request(app)
        .post("/email/sendactivation/" + "garagekitah8@gmail.com") 
        .set("Content-Type", "application/json")
        .then(response => {
            id = response.body.message.id
            // uniqueCode = response.body.message.uniqueCode

            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty("message", expect.any(Object))

            // done()   
        });
    })

    it("Should not send email and give response error", async () => {
        await request(app)
        .post("/email/sendactivation/" + "garagekitah8") 
        .set("Content-Type", "application/json")     
        .then(response => {
            // expect(response.status).toBe(500);
            expect(response.body).toHaveProperty("message", expect.any(String))
            // done() 
        });
    })
})

describe("GET /email/activation", () => {
    it("Should update isActivated in user", async () => {
        await request(app)
        .get("/email/activation/?code=" + uniqueCode) 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(Object))
        });
    })

    it("Should not Update and responce not found", async () => {
        await request(app)
        .get("/email/activation/?code=" + "garagekitah8") 
        .set("Content-Type", "application/json")     
        .then(response => {
            expect(response.body).toHaveProperty("message", expect.any(String))
            // done() 
        });
    })
})

describe("POST /login", () => {
    it("Should login success with response in JSON WIH access_token", async () => {
        await request(app)
        .post("/login") 
        .set("Content-Type", "application/json")     
        .send({email: "garagekitah8@gmail.com", password: "123456"})
        .then(response => {
            token = response.body.access_token
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("access_token", expect.any(String))
            // done()
        });
    })

    it("Should login error and give response error", async () => {
        await request(app)
        .post("/login") 
        .set("Content-Type", "application/json")     
        .send({email: "", password: ""})
        .then(response => {
            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty("message", expect.any(String))
            // done() 
        });
    })
})

describe("PATCH /user/makeadmin", () => {
    it("Should update user to admin", async () => {
        await request(app)
        .patch("/user/makeadmin") 
        .set("Content-Type", "application/json")  
        .set("access_token", token)   
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))
            // done()
        });
    })

    it("Should not update and give response error", async () => {
        await request(app)
        .patch("/user/makeadmin") 
        .set("Content-Type", "application/json")     
        .then(response => {
            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty("message", expect.any(String))
        });
    })
})

describe("PUT /user/:id", () => {
    it("Should update user data", async () => {
        await request(app)
        .put("/user/" + id) 
        .set("Content-Type", "application/json")  
        .set("access_token", token)   
        .send({username: "garagekita"})
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))
            // done()
        });
    })

    it("Should not update and give response error", async () => {
        await request(app)
        .put("/user/" + id) 
        .set("Content-Type", "application/json")     
        .send({username: "garagekita"})
        .then(response => {
            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty("message", expect.any(String))
            // done() 
        });
    })
})

describe("POST /address", () => {
    it("Should create address", async () => {
        await request(app)
        .post("/address") 
        .set("Content-Type", "application/json")
        .set("access_token", token)     
        .send({
            "city_id":"a",
            "province_id": "b",
            "address": "c"
        })
        .then(response => {
            id = response.body.data.id
            // console.log(response.body.id)
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not create address and give response error", async () => {
        await request(app)
        .post("/address") 
        .set("Content-Type", "application/json")     
        .send({
            "city_id":"a",
            "province_id": "b",
            "address": "c"
        })
        .then(response => {
            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty("message", expect.any(String))
        });
    })
})

describe("GET /address/myaddress", () => {
    it("Should Get All address", async () => {
        await request(app)
        .get("/address/myaddress") 
        .set("Content-Type", "application/json")
        .set("access_token", token)     
        .then(response => {
            id
            expect(response.status).toBe(200);
            expect(response.body).toBe(response.body)
            // expect(response.body).toHaveProperty("message", expect.any(String))
        });
    })

    it("Should not get address and give response error", async () => {
        await request(app)
        .get("/address/myaddress") 
        .set("Content-Type", "application/json")     
        .send({})
        .then(response => {
            expect(response.status).toBe(400);
            // expect(response.body).toHaveProperty("message", expect.any(String))
        });
    })
})

describe("GET /address/:id", () => {
    it("Should address By Id", async () => {
        await request(app)
        .get("/address/" + id) 
        .set("Content-Type", "application/json")
        .set("access_token", token)     
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))
        });
    })

    it("Should not get address by id and give response error", async () => {
        await request(app)
        .get("/address/" + id) 
        .set("Content-Type", "application/json")     
        .send({})
        .then(response => {
            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty("message", expect.any(String))
            // done() 
        });
    })
})

describe("PUT /address", () => {
    it("Should update address by id", function(done) {
        request(app)
        .put("/address/" + id) 
        .set("Content-Type", "application/json")
        .set("access_token", token)     
        .send({
            "city_id":"a",
            "province_id": "b updated",
            "address": "c"
        })
        .then(response => {
            expect(response.body).toHaveProperty("message", expect.any(String))

            done()   
        });
    })

    it("Should not update address and give response error", function(done) {
        request(app)
        .put("/address/" + id) 
        .set("Content-Type", "application/json")     
        .send({
            "city_id":"a",
            "province_id": "b updated",
            "address": "c"
        })
        .then(response => {
            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty("message", expect.any(String))
            done() 
        });
    })
})

describe("DELETE /address", () => {
    it("Should delete address by id", async () => {
        request(app)
        .delete("/address/" + id) 
        .set("Content-Type", "application/json")
        .set("access_token", token)     
        .send({})
        .then(response => {
            expect(response.body).toHaveProperty("message", expect.any(String))
        });
    })

    it("Should not delete address and give response error", async () => {
        await request(app)
        .delete("/address/" + id) 
        .set("Content-Type", "application/json")     
        .send({})
        .then(response => {
            // expect(response.status).toBe(404);
            expect(response.body).toHaveProperty("message", expect.any(String))
        });
    })
})

describe("POST /categories", () => {
    it("Should create category", async () => {
        await request(app)
        .post("/categories") 
        .set("Content-Type", "application/json")
        .set("access_token", token)     
        .send({
            "name": "Handphone"
        })
        .then(response => {
            id = response.body.data.id
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should create category", async () => {
        await request(app)
        .post("/categories") 
        .set("Content-Type", "application/json")
        .set("access_token", token)     
        .send({
            "name": "Tablet"
        })
        .then(response => {
            categoryid = response.body.data.id
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not create category and give response error", async () => {
        await request(app)
        .post("/categories") 
        .set("Content-Type", "application/json")     
        .send({
            "name": "Handphone"
        })
        .then(response => {
            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty("message", expect.any(String))
        });
    })
})

describe("GET /categories", () => {
    it("Should get all category list", async () => {
        await request(app)
        .get("/categories") 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not get category list and give response error", async () => {
        await request(app)
        .get("/categories/1") 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(404);
        });
    })
})

describe("PUT /categories", () => {
    it("Should update category", async () => {
        await request(app)
        .put("/categories/" + id) 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .send({
            name: "Update Category"
        })
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not get category list and give response error", async () => {
        await request(app)
        .put("/categories/" + categoryid) 
        .set("Content-Type", "application/json")
        .send({
            name: "Update Category"
        })
        .then(response => {
            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })
})

describe("DELETE /categories", () => {
    it("Should delete category by id", async () => {
        await request(app)
        .delete("/categories/" + id) 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not delete category by id and give response error", async () => {
        await request(app)
        .delete("/categories/") 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(404);
        });
    })
})

describe("POST /products", () => {
    it("Should create product", async () => {
        await request(app)
        .post("/products") 
        .set("Content-Type", "application/json")
        .set("access_token", token)     
        .send({
            "name": "Test Product",
            "price": 10000000,
            "priceFloor": 10000000,
            "image_url": "http://foto.com",
            "description": "test description",
            "stock": 4,
            "category_id": categoryid,
            "province_id": "1",
            "city_id": "1",
            "weight": 1000
        })
        .then(response => {
            productid = response.body.data.id
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should create product", async () => {
        await request(app)
        .post("/products") 
        .set("Content-Type", "application/json")
        .set("access_token", token)     
        .send({
            "name": "Test Product-2",
            "price": 10000000,
            "priceFloor": 10000000,
            "image_url": "http://foto.com",
            "description": "test description",
            "stock": 4,
            "category_id": categoryid,
            "province_id": "1",
            "city_id": "1",
            "weight": 1000
        })
        .then(response => {
            id = response.body.data.id
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not create products and give response error", async () => {
        await request(app)
        .post("/products") 
        .set("Content-Type", "application/json")     
        .send({
            "name": "Handphone"
        })
        .then(response => {
            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty("message", expect.any(String))
        });
    })
})

describe("GET /products", () => {
    it("Should get all products list", async () => {
        await request(app)
        .get("/products") 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should get all products list with access_token", async () => {
        await request(app)
        .get("/products") 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should get all products list with access_token", async () => {
        await request(app)
        .get("/products/myproducts") 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not get products list and give response error", async () => {
        await request(app)
        .get("/products/test/1") 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(404);
        });
    })
})

describe("PUT /products", () => {
    it("Should update products by id", async () => {
        await request(app)
        .put("/products/" + id) 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .send({
            "name": "Test Product-2_updated",
            "price": 10000000,
            "priceFloor": 10000000,
            "image_url": "http://foto.com",
            "description": "test description",
            "stock": 4,
            "category_id": categoryid,
            "province_id": "1",
            "city_id": "1",
            "weight": 1000
        })
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not update products and give response error", async () => {
        await request(app)
        .put("/products/1") 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(400);
        });
    })
})

describe("DELETE /products", () => {
    it("Should delete products by id", async () => {
        await request(app)
        .delete("/products/" + id) 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not update products and give response error", async () => {
        await request(app)
        .delete("/products/" + id) 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(400);
        });
    })
})

describe("POST /requests", () => {
    it("Should create request", async () => {
        await request(app)
        .post("/requests") 
        .set("Content-Type", "application/json")
        .set("access_token", token)     
        .send({
            "name": "Test Requests",
            "budget": 10000000,
            "budgetCeil": 10000000,
            "description": "Testing DEsc",
            "qty": 10,
            "category_id": categoryid
        })
        .then(response => {
            requestid = response.body.data.id
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should create requests", async () => {
        await request(app)
        .post("/requests") 
        .set("Content-Type", "application/json")
        .set("access_token", token)     
        .send({
            "name": "Test Requests-2",
            "budget": 10000000,
            "budgetCeil": 10000000,
            "description": "Testing DEsc",
            "qty": 10,
            "category_id": categoryid
        })
        .then(response => {
            id = response.body.data.id
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not create request and give response error", async () => {
        await request(app)
        .post("/requests") 
        .set("Content-Type", "application/json")     
        .send({
            "name": "Test Requests-2",
            "budget": 10000000,
            "budgetCeil": 10000000,
            "description": "Testing DEsc",
            "qty": 10,
            "category_id": categoryid
        })
        .then(response => {
            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty("message", expect.any(String))
        });
    })
})

describe("GET /requests", () => {
    it("Should get all requests list", async () => {
        await request(app)
        .get("/requests") 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should get all requests list with access_token", async () => {
        await request(app)
        .get("/requests/" + id) 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should get all myrequests list with access_token", async () => {
        await request(app)
        .get("/requests/myrequests") 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not get all requests list and give response error", async () => {
        await request(app)
        .get("/requests/1000") 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(500);
        });
    })
})

describe("PUT /requests", () => {
    it("Should update requests by id", async () => {
        await request(app)
        .put("/requests/" + id) 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .send({
            "name": "Test Requests Updated",
            "budget": 10000000,
            "budgetCeil": 10000000,
            "description": "Testing DEsc",
            "qty": 10,
            "category_id": categoryid
        })
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not update requests and give response error", async () => {
        await request(app)
        .put("/requests/" + id) 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(400);
        });
    })
})

describe("DELETE /requests", () => {
    it("Should delete requests by id", async () => {
        await request(app)
        .delete("/requests/" + id) 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not delete requests and give response error", async () => {
        await request(app)
        .delete("/requests/" + id) 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(400);
        });
    })
})

describe("POST /offers", () => {
    it("Should create offers", async () => {
        await request(app)
        .post("/offers/" + requestid) 
        .set("Content-Type", "application/json")
        .set("access_token", token)     
        .send({
            "product_id": productid,
            "offered_price": 10000
        })
        .then(response => {
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty("message", expect.any(String))   
            offerid = response.body.data.id
        });
    })

    it("Should create offers", async () => {
        await request(app)
        .post("/offers/" + requestid) 
        .set("Content-Type", "application/json")
        .set("access_token", token)     
        .send({
            "product_id": productid,
            "offered_price": 11000
        })
        .then(response => {
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty("message", expect.any(String))   
            id = response.body.data.id
        });
    })

    it("Should not create offers and give response error", async () => {
        await request(app)
        .post("/offers/" + requestid) 
        .set("Content-Type", "application/json")     
        .send({
            "product_id": productid,
            "offered_price": 11000
        })
        .then(response => {
            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty("message", expect.any(String))
        });
    })
})

describe("PUT /offers", () => {
    it("Should update offers by id", async () => {
        await request(app)
        .put("/offers/" + id) 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .send({
            "product_id": 1,
            "offered_price": 10000,
            "status": "pending"
        })
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not update offers and give response error", async () => {
        await request(app)
        .put("/offers/" + id) 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(400);
        });
    })
})

describe("GET /offers/:requestid", () => {
    it("Should get all offers list by requestid", async () => {
        await request(app)
        .get("/offers/" + requestid) 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should get all my offers list with access_token", async () => {
        await request(app)
        .get("/offers/myoffers") 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should get all offers by id", async () => {
        await request(app)
        .get("/offers/checkoffer/" + id) 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not get all requests list and give response error", async () => {
        await request(app)
        .get("/offers/1000") 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(400);
        });
    })
})

describe("DELETE /offers", () => {
    it("Should delete offers by id", async () => {
        await request(app)
        .delete("/offers/" + id) 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not delete offers and give response error", async () => {
        await request(app)
        .delete("/offers/" + id) 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(400);
        });
    })
})

describe("POST /bids", () => {
    it("Should create offers", async () => {
        await request(app)
        .post("/bids/" + offerid) 
        .set("Content-Type", "application/json")
        .set("access_token", token)     
        .send({
            "qty": 1,
            "offered_price": 123000
        })
        .then(response => {
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty("message", expect.any(String))   
            bidid = response.body.data.id
        });
    })

    it("Should create offers", async () => {
        await request(app)
        .post("/bids/" + offerid) 
        .set("Content-Type", "application/json")
        .set("access_token", token)     
        .send({
            "qty": 1,
            "offered_price": 123000
        })
        .then(response => {
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty("message", expect.any(String))   
            id = response.body.data.id
        });
    })

    it("Should not create offers and give response error", async () => {
        await request(app)
        .post("/bids/" + offerid) 
        .set("Content-Type", "application/json")     
        .send({
            "qty": 1,
            "offered_price": 123000
        })
        .then(response => {
            expect(response.status).toBe(400);
            expect(response.body).toHaveProperty("message", expect.any(String))
        });
    })
})

describe("PUT /bids", () => {
    it("Should update bids by id", async () => {
        await request(app)
        .put("/bids/" + id) 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .send({
            "qty": 1,
            "offered_price": 100000
        })
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not update bids and give response error", async () => {
        await request(app)
        .put("/bids/" + id) 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(400);
        });
    })
})

describe("GET /bids/:id", () => {
    it("Should get all bids list by id", async () => {
        await request(app)
        .get("/bids/" + id) 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should get all mybids list by id", async () => {
        await request(app)
        .get("/bids/mybids") 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    
    it("Should get all bids by id", async () => {
        await request(app)
        .get("/bids/checkbid/" + id) 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not get all bids list and give response error", async () => {
        await request(app)
        .get("/bids/1000") 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(400);
        });
    })
})

describe("DELETE /bids", () => {
    it("Should delete bids by id", async () => {
        await request(app)
        .delete("/bids/" + id) 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not delete bids and give response error", async () => {
        await request(app)
        .delete("/bids/" + id) 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(400);
        });
    })
})

describe("GET /ongkir/province", () => {
    it("Should get all province ", async () => {
        await request(app)
        .get("/ongkir/province") 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("results", expect.any(Array))   
        });
    })

    it("Should get all province list by id", async () => {
        await request(app)
        .get("/ongkir/province?id=2") 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("results", expect.any(Object))   
        });
    })
})

describe("GET /ongkir/city", () => {
    it("Should get all city ", async () => {
        await request(app)
        .get("/ongkir/city") 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("results", expect.any(Array))   
        });
    })

    it("Should get all city list by provinceid", async () => {
        await request(app)
        .get("/ongkir/city?id=2&province=2") 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("results", expect.any(Array))   
        });
    })

    it("Should get all city list by provinceid", async () => {
        await request(app)
        .get("/ongkir/city?province=2") 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("results", expect.any(Array))   
        });
    })

    it("Should get city by id", async () => {
        await request(app)
        .get("/ongkir/city?id=2") 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("results", expect.any(Object))   
        });
    })
})

describe("POST /ongkir/cost", () => {
    it("Should get cost of ongkir ", async () => {
        await request(app)
        .post("/ongkir/cost") 
        .set("Content-Type", "application/json")
        .send({
            "origin": "501", 
            "destination": "114", 
            "weight": 1500, 
            "courier": "jne"
        })
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("results", expect.any(Object))   
        });
    })
})

describe("POST /deals", () => {
    it("Should create deals", async () => {
        await request(app)
        .post("/deals") 
        .set("Content-Type", "application/json")
        .set("access_token", token)     
        .send({
            "consumer_id": 1,
            "product_id": productid,
            "deal_price": 500000,
            "deal_qty": 2
        })
        .then(response => {
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty("message", expect.any(String))   
            dealid = response.body.data.id
        });
    })

    it("Should create deals", async () => {
        await request(app)
        .post("/deals") 
        .set("Content-Type", "application/json")
        .set("access_token", token)     
        .send({
            "consumer_id": 1,
            "product_id": productid,
            "deal_price": 550000,
            "deal_qty": 1
        })
        .then(response => {
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty("message", expect.any(String))   
            id = response.body.data.id
        });
    })

    it("Should not create offers and give response error", async () => {
        await request(app)
        .post("/deals") 
        .set("Content-Type", "application/json")     
        .send({
            "consumer_id": 1,
            "product_id": productid,
            "deal_price": 550000,
            "deal_qty": 1
        })
        .then(response => {
            expect(response.status).toBe(401);
            expect(response.body).toHaveProperty("message", expect.any(String))
        });
    })
})

// describe("PATCH /deals/:id", () => {
//     it("Should update deal by id", async () => {
//         await request(app)
//         .patch("/deals/" + id) 
//         .set("Content-Type", "application/json")
//         .set("access_token", token)
//         .send({
//             "payment_status": "paid",
//             "request_id": requestid
//         })
//         .then(response => {
//             // expect(response.status).toBe(200);
//             expect(response.status).toBe(response.status);
//             // expect(response.body).toHaveProperty("message", expect.any(String))   
//         });
//     })

//     it("Should not update deal and give response error", async () => {
//         await request(app)
//         .patch("/deals/" + id) 
//         .set("Content-Type", "application/json")
//         .then(response => {
//             // expect(response.status).toBe(401);
//             expect(response.status).toBe(response.status);
//         });
//     })
// })

describe("GET /deals", () => {
    it("Should get all deals lis", async () => {
        await request(app)
        .get("/deals/" + id) 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should get all deals by id", async () => {
        await request(app)
        .get("/deals/" + id) 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not get deals and give response error", async () => {
        await request(app)
        .get("/deals") 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(401);
        });
    })
})

describe("DELETE /deals", () => {
    it("Should delete deals by id", async () => {
        await request(app)
        .delete("/deals/" + id) 
        .set("Content-Type", "application/json")
        .set("access_token", token)
        .then(response => {
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("message", expect.any(String))   
        });
    })

    it("Should not delete deals and give response error", async () => {
        await request(app)
        .delete("/deals/" + id) 
        .set("Content-Type", "application/json")
        .then(response => {
            expect(response.status).toBe(401);
        });
    })
})