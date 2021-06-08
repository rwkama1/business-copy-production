//  let Copy=require("./Copy").Copy;
//  let Production=require("./Production").Production;

//  let copy1=new Copy(5000,"Offset");
//  let copy2=new Copy(5000,"Standard");
//  let copy4=new Copy(5000,"Standard");

//  let copy5=new Copy(3000,"Offset");
//  let copy6=new Copy(5000,"Standard");

//  let arraycopy=[];
//  arraycopy.push(copy1);
//  arraycopy.push(copy2);
//  arraycopy.push(copy4);
//  arraycopy.push(copy5);
//  arraycopy.push(copy6);
//  let production=new Production(arraycopy,10000,50000);
//  let calcoffset=production.verify_offset();
//  let calcstandard=production.verify_standard();
//  if(calcoffset.bool===false)
//  {
//      console.log("The number of copies offset exceeds the limit");
    
//  }
//  else if(calcstandard.bool===false)
//  {
//      console.log("The number of copies standard exceeds the limit");
    
//  }
//  else
//  {
//      console.log("Offset copies remain: "+calcoffset.offset);
//      console.log("Standard copies remain: "+calcstandard.standard);
//  }
 