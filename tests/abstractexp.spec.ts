abstract class fimiliya
{
     abstract digniya(): void;
    // abstract j(): void;
    d()
    {
        console.log("this is not abstract")
    }
     

}
class q extends fimiliya
{
    digniya()
    {
        console.log("This is Abstract method")
    }
}
const g=new q();
g.digniya();
g.d();