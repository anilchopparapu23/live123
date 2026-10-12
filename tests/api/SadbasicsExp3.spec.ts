import{test, expect} from '@playwright/test';

test('Create the new post',async function({request}){

    const requestBody = {
        Name: 'Akhil Chandra',
        Location:'Hyderabad',
        company_name:'TCS',
        userId:1
    };
    const response = await request.post('/posts',
         {
            data:requestBody
        });
        expect(response.status()).toBe(201);
        const ResponseBody = await response.json();
        expect(ResponseBody.Name).toBe('Akhil Chandra');
        expect(ResponseBody.Location).toBe('Hyderabad');
        expect(ResponseBody.company_name).toBe('TCS');
        console.log('Status:', response.status());
        console.log('Response', ResponseBody);
        


});