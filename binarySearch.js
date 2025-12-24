const binarySearch = (sortedArr, seekValue) => {
  let startIndex = 0
    let endIndex = sortedArr.length -1

    while(startIndex <= endIndex){
      const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2)
        if(sortedArr[middleIndex] === seekValue){
          return middleIndex
        }

      if(sortedArr[middleIndex] < seekValue){
        startIndex = middleIndex + 1
      }else{
        endIndex = middleIndex - 1
      }
    }
  return -1
}
