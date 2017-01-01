function addPromise (a,b){
  return new Promise(function(resolve,reject){
    (typeof a ==='number' && typeof b==='number') ? resolve(a+b) : reject('not a number');
  });
}

addPromise(2,3).then(function(sum){
  console.log('success',sum);
}, function(err){
  console.log('error',err);
});

addPromise("andrew",3).then(function(sum){
  console.log('success',sum);
}, function(err){
  console.log('error',err);
});
