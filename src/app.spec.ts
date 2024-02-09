import request from 'supertest';

describe('first test', () => {
    it('should test the server runnig', async () => {
        const resonse = await  request.get('/');


        expect()
    })
})