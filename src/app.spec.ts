import request  from 'supertest';
import { App } from './app';

describe('first test', () => {
    const app = new App().app;
    it('should test the server runnig', async () => {
        const response = await request(app).get('/');
        expect(response.body).toStrictEqual({ ok: true })
    });

    it('should check if create user', async () => {
        const response = await request(app).post('/user').send({
            name: 'Lucas',
            email: 'Teste@teste.com',
            password: '123456',
        });
        // console.log("🚀 ~ response ~ response:", response)
        expect(response.statusCode).toEqual(201);
        expect(response.body).toHaveProperty('id');
    });

    it('should check if get users', async () => {
        const response  = await request(app).get('/users');
        console.log("🚀 ~ it ~ response:", response);
        

        expect(response.statusCode).toEqual(200);
    })
    
})