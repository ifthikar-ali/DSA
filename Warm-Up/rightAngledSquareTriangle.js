/* Find to print right Angled star square
 *  
 *  *
 *  *  *
 *  *  *  * 
 *  *  *  *  * 
*/
function rightAngledTriangle(n) {
  for(let i=0;i<n;i++){
    let row= "";
    for(let j=0;j<=i;j++){
        row=row+" * ";
    }
    console.log(row);
  }
}
let n=5;
rightAngledTriangle(n); 