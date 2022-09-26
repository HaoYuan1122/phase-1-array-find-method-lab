// code your solution here
const record = [
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2015", result: "W"},

  ]


//   function loopThroughAndFind(inventory,finder){
//     let result=null
//     for(let item of inventory){
//         if(finder(item)===true){
//             result=item
//             break
//         }
//     }
//     return result.year
//   }

//   console.log(loopThroughAndFind(record,superbowlWin))

function superbowlWin(array){
    function callback(element){
        return element.result==="W"
    }
    const element=array.find(callback)
    if (element!==undefined){
        return element.year
    }

}

console.log(superbowlWin(record))
//   function callback(element){
//     return element.result==="W"
// }
//  record.find(superbowlWin)

//   console.log(record.find(superbowlWin))
