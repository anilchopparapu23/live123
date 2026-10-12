import {test,expect} from '@playwright/test';
test('Get the Employe data',async function({request}){
    const response = await request.get('/api/v1/employee/1');
    expect(response.status()).toBe(200);
    const ResponseBody = await response.json();
    expect(ResponseBody.id).toBe(1);
    // expect(ResponseBody.first_name).toBe('George');
    // expect(ResponseBody.last_name).toBe('Bluth');
    console.log('Status:', response.status());
    console.log('Response', ResponseBody);
});