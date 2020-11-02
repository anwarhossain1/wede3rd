let arr = [1, 2, 2, 3, 4, 4, 5];

Array.prototype.unique=function(){
  return Array.from(new Set(this));
};

console.log(arr.unique());
