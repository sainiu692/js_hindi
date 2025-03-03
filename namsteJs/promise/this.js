const obj={
    a:10,
    x:function(){
        console.log(this);
        const y=()=>{
            console.log(this);
        }
        y();
    }
};
obj.x();