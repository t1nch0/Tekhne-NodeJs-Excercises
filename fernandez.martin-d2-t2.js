function fib(n){
  let res=[1,1];
  //tratando primero las excepciones n=1,2
  if(n==1)
  {
    return res=[1]
  }
  else{
    if(n==2){
      return res
    }
  for(i=2;i<n;i++){
       
    res[i]=res[i-1]+res[i-2];
  }
  return res
  }
}
console.log (fib (6))
