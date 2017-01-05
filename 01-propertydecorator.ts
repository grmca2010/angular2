
function Override(label: string) {
    return function(target:any, key:string){
        Object.defineProperty(target,key,{
            configurable:false,
            get: () => label
        });
    }
}

class Test {
    @Override('test')
    name :string ='pat';
    @Override('apple')
    name1 :string ='orange';
}

let t=new Test();
console.log(t.name);
console.log(t.name1);