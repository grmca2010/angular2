function ReadOnly(target:any , key:string){
    Object.defineProperty(target,key,{writable:false});
}

class ReadOnlyTest {
    @ReadOnly
    name :string
}
const obj= new ReadOnlyTest();
obj.name = 'jan';
console.log(obj.name);
