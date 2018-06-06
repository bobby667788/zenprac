var abc='Some skhsu'


function car(a,b){
    if (typeof(a)=='string' && typeof(b)=='string'){
        return a+b;
    }
    else{
        return 'cant do it';
    }
}

console.log(car('bob','ver'));
console.log(car(1,3));

function split(a){
    var x;
    if (typeof(a)=='string'){
        x=a.split(/\s+/);
        return x;
    }
    else{
        return 'cant do it';
    }
}
var x=split('bob verma');
console.log(x[0]);
console.log(x[1]);