import React from "react";

const BoardRow = props => {
  const { handleChange, handleFocus, id ,cellValues , cellsBackgroundColors  } = props;

 
  const columnArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 
  let clsName =
   parseInt(id) % 3 === 1 && parseInt(id) > 1 ? "square-sep" : "square";



//cellValues = [ '' , '' , '' ,'' ,'', '', '', '' , ''  , .......    ]  
//cellValues = [ '' , 5 , ''  , 1  ,'', '',  9 , '' , ''  , .......    ]  

//  1 , 1  = 0 
// 1 , 2 = 1 
  const getValueofCell =( id , elem  )=>{
      return 1 ; 

    let num = ( parseInt(id  ) -1 ) *9 + parseInt(elem ) - 1 ;
 
    let cellValue = cellValues[num] ; 
    return cellValue ; 

  }

 
  const getBgcolor =( id , elem  )=>{
    return 'bg-white squareinp' ;

    let num = ( parseInt(id  ) -1 ) *9 + parseInt(elem ) - 1 ;
 
  
 //  cellsBackgroundColors = [ 'bg-white' ,   'bg-white' ,'bg-white' ,'bg-white' ,'bg-white' ,'bg-red' ,   ....  ]
   let cname = cellsBackgroundColors[num] +  " squareinp"   ; 
    return cname;
 
  }
 
  return (
    <tr className={clsName}>


      {columnArr.map(elem => {
      
        // console.log(elem , id); 
        // "11" , "12" , "13" 
        let eKey = id + elem; // "11" 
 

  let v = getValueofCell( id , elem  ) ;
  
  let bgClassName = getBgcolor( id , elem  ) ;


        let tdclsName =
          parseInt(elem) % 3 === 1 && parseInt(elem) > 1
            ? "square-septd"
            : "square";

        return (
          <td className={tdclsName}  key={eKey}>
            <input
              id={eKey}
              key={eKey }
              type="text"
              name="name"
              className={bgClassName } 
             
              onChange={handleChange}
              onFocus={handleFocus}
              value={v}

            />
          </td>
        );
      })}
    </tr>
  );
};
export default BoardRow;

