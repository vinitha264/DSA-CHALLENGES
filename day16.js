function countAnagrams(txt, pat) {
  let count = 0;
  let patLen = pat.length;
  let txtLen = txt.length;
  for (let i = 0; i <= txtLen - patLen; i++) {
    let substr = txt.substring(i, i + patLen);
    if (isAnagram(substr, pat)) {
      count++;
    }
  }
  return count;
}
function isAnagram(str1, str2){
  return [...str1].sort().join('') === [...str2].sort().join('');
}
let txt = "forxxorfxdofr";
let pat = "for";
console.log(countAnagrams(txt, pat)); 


