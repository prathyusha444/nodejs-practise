// shallow copy
const arr = [1,2,3,4];// 3456
const arr2 = arr; //3456

arr2.push(6);
console.log(arr);
console.log(arr2);

// Deep copy
const arrDeep = [1,2,3,4];
const arrDeep2 = [...arrDeep];
arrDeep2.push(6);
console.log(`Deepcopy : ${arrDeep}`);
console.log(`Deep copy : ${arrDeep2}`);
