import{test, expect} from '@playwright/test';

test('DELETE- delete the existing post',async function({request}){

    const response = await request.delete('/posts/1');       
        const data = await response.json();
         expect(response.status()).toBe(200);
       expect(data).toEqual({});

        console.log('Response', response.status);

       


});