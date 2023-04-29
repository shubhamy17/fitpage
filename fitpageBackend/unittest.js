const request = require('supertest');
const app = require('./index');
const { describe } = require('mocha');
describe('GET /data', () => {
  it('should return a list of Stock Scan Parser ', async () => {
    const res = await request(app).get('/data');
    expect(res.statusCode).toEqual(200)
  });
});
