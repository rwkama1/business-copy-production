class Production
{
    constructor(parraycopies,poffsetlimit,pstandardlimit)
    {
        this.arraycopies=parraycopies;
        this.offsetlimit=poffsetlimit;
        this.standardlimit=pstandardlimit;
    }
    verify_offset=()=>
    {
        let offset=this.offsetlimit;
        let bool=true;
        this.arraycopies.map(
           c=> {
            let number=c.number;
            let type=c.type;
            if(type==="Offset")
            {
                if(number>offset)
                {
                  bool=false;
                }
                else
                {
                    offset=offset-number;
                }
            }
        }
        )
        
        return {offset,bool}
    }
    verify_standard=()=>
    {
  
        let standard=this.standardlimit;
        let bool=true;
        this.arraycopies.map(
           c=> {
            let number=c.number;
            let type=c.type;
            if(type==="Standard")
            {
                if(number>standard)
                {
                  bool=false;
                }
                else
                {
                    standard=standard-number;
                }
            }
        }
        )
        
        return {standard,bool}
    }
}
module.exports={Production}