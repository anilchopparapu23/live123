class manali
{
    jammu( a:number ,b:number):number;
    jammu(a:string, b:string):string;
    jammu(a:any,b:any):any{
        return a+b;
    }
    
}
const k=new manali();
console.log(k.jammu(45,67));
console.log(k.jammu("Play","wright"));