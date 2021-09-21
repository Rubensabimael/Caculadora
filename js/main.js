let a = '';
let b = '';
let num = [];
let ans;

const sendNum = (digit)=> {
    num.push(digit);

    if (num.length !=1) {
        a = '';
        document.getElementById('screen').innerHTML = a;
    };

    for (i=0; i<num.length; i++){
    a = a + num [i];
    };

    document.getElementById('screen').innerHTML = a;
};

const equalTo = ()=> {
    document.getElementById('screen').innerHTML = '';
    for (i=0; i<num.length; i++) {
        b +=num[i];
    }
    ans = eval(b);
    document.getElementById('screen').innerHTML = ans;

    while (num.length>0){
        num.pop();
    }
    num.push(ans.toString());
}



const clearSr = ()=> {
    document.getElementById('screen').innerHTML = '';
    while(num.length >0){
        num.pop();
    }
    a = '';
    b = '';

}
