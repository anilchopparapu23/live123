let j=1;
while(j<=10)
{
    console.log(j);
    j++;
}
//-----------
let k=1;
do
{
console.log(k)
k++;
}while(k<=8);
//---------------
const data=["Chrome","Fire","Edge"]
for(const daily of data)
{
    console.log(daily)
}
const n=[23,45,67]
for(const luck of n)
{
    console.log(luck)
}
//for in
let students=
{
    name:"Anil",
    age:34,
    loc:"Hyd"

}
for(const l in students)
{
    console.log(l)
}
//
for(let h=1;h<10;h++)
{
    if(h==6)
    {
        break;
    }
}
for(let v=1;v<10;v++)
{
  if(v==7)
  {
    continue;
  }
}