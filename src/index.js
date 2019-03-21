module.exports = function check(str, bracketsConfig) {
  let arr=str.split("");
  
  for (let i=0; i<bracketsConfig.length;i++) {
    let openBracket = bracketsConfig[i][0];
    let closeBracket = bracketsConfig[i][1];
    let indexClose = arr.indexOf(closeBracket);
    let indexOpen = arr.indexOf(openBracket);
    for (let j=indexClose;j>=0;j--) {
      if (arr[j] == openBracket) {
          indexOpen = j;
         break;
      }
    }
    if (openBracket == closeBracket) {
      for (let k=(indexClose+1);k<arr.length;k++) {
        indexClose=k;
      }
    }
    while (indexClose !== -1) {
      if ((indexClose-indexOpen)%2 !== 0 && indexClose>indexOpen) {
        let arr1 = arr.slice(0,indexOpen);
        let arr2= arr.slice(indexClose+1);
        arr = arr1.concat(arr2)
        indexClose = arr.indexOf(closeBracket);
        for (let j=indexClose;j>=0;j--) {
          if (arr[j] == openBracket) {
              indexOpen = j;
             break;
          }
        }
      } else {return false}
      
    }
  }
  if (arr.length == 0) {
    return true;
  }
  return false;
}
