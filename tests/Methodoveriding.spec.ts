class hima
{
    sundhar(a:number,b:number)
    {
      console.log(a+b);
      
    }
    naya(age:number,name:string)


    {
        return{
         age:age,
         name:name
        }
      
    }
}
class sima extends hima
{
    override sundhar(a:number,b:number)
    {
       console.log(a+b)
    }
    override naya(age:number,name:string)
    {
      return{
        age:age,
        name:name
      }
    }
}
const h=new sima();
console.log(h.naya(24,"Suma"))
h.sundhar(45,78);