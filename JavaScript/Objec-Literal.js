let state,result;

state = [1,2,3,4,5];
console.log(state);

result = state.map(item => item += 2);
console.log(result);

result = state.map((item,index) => `${item} ${index}`);
console.log(result);

result = state.map((item,index,arr) => `${item} ${index} ${arr}`);
console.log(result);

state = [{name : 'Guitar'},{name : 'Sonter'}];

result = state.map(item => item + " ok");
console.log(result);

result = state.map(item => item.name + " ok");
console.log(result);

result = state.map((item,index) => item.name + ` ${index}`);
console.log(result);

result = state.map((item,index,array) => item.name + ` ${index} ${array}`);
console.log(result);

