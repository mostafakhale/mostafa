function sum(x,y){
    return x+y;
}


console.log (sum(5,3));
const work = ()=>"welcome";
console.log(work());

let person={
 name:'ahmed',
 age:33,
 SALARY:2123,
 WELCOME()
 {
     return "hello :"+this.name + '    your age is :'+this.age+' and your salary :'+this.SALARY 
    }
 
}
console.log(person.WELCOME());

const arr1=['ahmed','gamal','anwar'];
for(let i of arr1){
    console.log(i);
    
}
for(let i=0 ; i < arr1.length ; i++){
    console.log(arr1[i]);
    
}
newarr=[...arr1]
newarr.push('nfnf')
console.log(newarr);
newarr.pop('anwar')
newarr.push('nfnf')
console.log(newarr.map(item=>"my  bitches are "+item));
console.log(arr1);