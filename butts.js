let test = isAnagram("aaa", "aaa")
console.log(test)

function isAnagram(str1, str2) {
  let arr1 = str1.split("").sort()
  let arr2 = str2.split("").sort()
  if (arr1.join("") === arr2.join("")) {
    return true
  } else {
    return false
  }
}
