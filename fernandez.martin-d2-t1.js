function bin(n){
  let a=1, b=1;
  let c,b2=1,a2=1;
  console.log(b)
  console.log(a)
  for(i=0;i<=n;i++){
  
    if(i>2){
    a=a2;
    b=b2;
    c=a+b;

    console.log(c);
    a2=b;
    b2=c;}
  }
  
}
console.log(bin(5));
