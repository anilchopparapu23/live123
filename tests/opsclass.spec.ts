class jagadeesh
{
    name:string;
    constructor(assign:string)
    {
       this.name=assign;
    }
    senddata()
    {
        console.log(this.name)
    }
}
const d1=new jagadeesh("Anil")
d1.senddata();

//property
class remo
{
    shortbrand:string="BlackNight";
    shortcolour:string="red"
}
//methods 
class food
{
    biryani()
    {
        console.log("Eat the biryani")
    }
}
const ready=new food();
ready.biryani();