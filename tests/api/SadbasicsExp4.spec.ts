import{test, expect} from '@playwright/test';

test('Create the new post',async function({request}){

    const requestBody = {
        id:1,
        title: 'foo',
        body:'bar',
        
        userId:1
    };
    const response = await request.put('/posts/1',
         {
            data:requestBody
        });
       
        const ResponseBodyText = await response.text();
         expect(response.status()).toBe(200);
         const ResponseBody = JSON.parse(ResponseBodyText);
        expect(ResponseBody.title).toBe('foo');
        expect(ResponseBody.body).toBe('bar');
        expect(ResponseBody.userId).toBe(1);
        console.log('Status:', response.status());
        console.log('Response', ResponseBody);

       


});