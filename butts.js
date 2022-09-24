let butts = [211, 211, 212, 211]
function returnIndexOfOutlier(arr) {
  for (let i = 0; i < arr.length; i++) {
    let diffCount = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        diffCount++
      }
    }
    if (diffCount > 1) {
      return i
    }
  }
}

function differenceOfOutlier(arr) {
  let outlierIndex = returnIndexOfOutlier(arr)
  if (arr[outlierIndex + 1]) {
    return arr[outlierIndex + 1] - arr[outlierIndex]
  } else {
    return arr[outlierIndex - 1] - arr[outlierIndex]
  }
}

console.log(differenceOfOutlier(butts))
