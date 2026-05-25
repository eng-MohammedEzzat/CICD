const request=require('supertest')
const app=require("../server")

describe('GET /health', () => {
  it('should return 200 and the { "status": "ok" }', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('ok');
  });
});
