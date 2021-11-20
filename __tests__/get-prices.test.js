const request = require('supertest');
const app = require('../server');

it('returns 200 OK', (done) => {
    request(app)
    .get('/api/prices')
    .send()
    .then((response) => {
        expect(response.status).toBe(200);
        done();
    });
})

it('returns a list of objects with locations', (done) => {
    request(app)
    .get('/api/prices')
    .send()
    .then((response) => {
        const prices = JSON.parse(response.text)
        const firstPrice = prices[0]
        const count =  prices.length;
        const location = firstPrice['location']
        const price = firstPrice['price']
        expect(count).toBe(42);
        expect(location).not.toBeNull()
        expect(price).not.toBeNull()
        done();
    });
})