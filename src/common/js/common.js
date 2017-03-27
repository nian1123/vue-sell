/**
 * Created by Chris on 2017/3/27.
 */
function getscoreStar (score,Lenth,result) {
  let num = Math.trunc(score);
  for(let i=0;i<num;i++) {
    result.push('fullStar')
  }
  if(score > num && score < score + 1) {
    result.push('halfStar')
  }
  while(result.length<Lenth) {
    result.push('empStar')
  }
  return result
}
export {getscoreStar}
