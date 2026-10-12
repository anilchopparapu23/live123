import{test, expect} from '@playwright/test';

test('DELETE- Update the existing post',async function({request}){

    const requestBody = {
        id:1,
        title: 'foo',
        
    };
    const response = await request.patch('/posts/1',
         {
            data:requestBody
        });
       
        const ResponseBodyText = await response.json();
         expect(response.status()).toBe(200);
        expect(ResponseBodyText.title).toBe('foo');
        console.log('Response', ResponseBodyText);

       


});