import {test, expect} from '@playwright/test';

test('Get the Employe data',async function({request}){
    
    const response = await request.get('/api/users?page=2');
    console.log('Status:', response.status());
    console.log('Response', await response.json());
    expect(response.status()).toBe(200);
});