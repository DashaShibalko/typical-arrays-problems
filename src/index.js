exports.min = function min (arr) {
  if(arr == null || arr.length == 0 ){
    return 0;
  } 
  else{
    let mini=arr[0];
    let temp;
    for (let i=1;i<arr.length;i++){
      if(mini>arr[i]){
        temp=mini;
        mini=arr[i];
        arr[i]=temp;
      }
      }
      return mini;
  }
}

exports.max = function max (arr) {
  if(arr == null || arr.length == 0 ){
    return 0;
  } 
  let maxi=arr[0];
  let temp;
  for (let i=1;i<arr.length;i++){
    if(maxi<arr[i]){
      temp=maxi;
      maxi=arr[i];
      arr[i]=temp;
    }
  }
  return maxi;
}

exports.avg = function avg (arr) {
  if(arr == null || arr.length == 0 ){
    return 0;
  } 
  let sum=0;
  for (let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum/arr.length;
}
