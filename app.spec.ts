import app from './src/app';
import { calculateDiscount } from './src/utils';
import request from 'supertest';

describe('App', () => {
  it('should return correct discounted price', () => {
    const res = calculateDiscount(100, 10);
    expect(res).toBe(90);
  });

  it('should return 200 status code', async () => {
    const res = await request(app).get('/').send();
    expect(res.statusCode).toBe(200);
  });
});
