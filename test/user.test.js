const request = require('supertest');
const app = require('../index')

describe('POST /user/register', () => {
    it('Should create user and send email for activation', function(done) {
        request(app)
        .post('/users/register')
        .set("Content-Type", "application/json")
        .send({email: "budi@gmail.com", password: "123456"})
        .then((response) => {
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('access_token', expect.any(String));
            done();
        })
    })
})