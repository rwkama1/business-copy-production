## Description

A copy business has a daily production limit of 10,000 copies if the type of printing is offset and 50,000 if the type is standard. If there is a request from one, the employee has to verify that the copies pending so far and the requested copies do not exceed the production limit. If the production limit were exceeded, the requested work could not be accepted. The employee needs to keep a good track of the copies requested so far to quickly decide whether the jobs requested on the day should be accepted or not.

## Usage

```Javascript

 let Copy=require("./Copy").Copy;
 let Production=require("./Production").Production;

 let copy1=new Copy(5000,"Offset");
 let copy2=new Copy(5000,"Standard");
 let copy4=new Copy(5000,"Standard");

 let copy5=new Copy(3000,"Offset");
 let copy6=new Copy(5000,"Standard");

 let arraycopy=[];
 arraycopy.push(copy1);
 arraycopy.push(copy2);
 arraycopy.push(copy4);
 arraycopy.push(copy5);
 arraycopy.push(copy6);
 let production=new Production(arraycopy,10000,50000);
 let calcoffset=production.verify_offset();
 let calcstandard=production.verify_standard();
 if(calcoffset.bool===false)
 {
     console.log("The number of copies offset exceeds the limit");
    
 }
 else if(calcstandard.bool===false)
 {
     console.log("The number of copies standard exceeds the limit");
    
 }
 else
 {
     console.log("Offset copies remain: "+calcoffset.offset);
     console.log("Standard copies remain: "+calcstandard.standard);
 }
 

```