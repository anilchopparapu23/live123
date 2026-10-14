class India
{
   Ap()
   {
     console.log("this is nice location")
   }
}
class America extends India
{
    Newyork()
    {
        console.log("this is very nice place")
    }
}
const f=new America();
f.Ap();
f.Newyork();