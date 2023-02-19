// Bai1 - su dung repeat()
let bai_1 = (text) => {
    return text.repeat(10);
};

// Bai2 - su dung reapeat()
let bai_2 = (text) => {
    let newText = text.repeat(10);
    let newText_2 = '';
    let dash = ' - ';

    for (let i = 0; i < newText.length; i++) {
        newText_2 += newText[i];
        if (i < newText.length - 1) newText_2 += dash;
    };
    return newText_2;
};

// Bai3 
let bai_3 = (text,num) => {
    let newText = '';
    let finaText = '';
    let dash = ' - ';

    if (num > 1) newText += text.repeat(num);
    for (let i = 0; i < newText.length; i++) {
        finaText += newText[i];
        if (i < newText.length - 1) finaText += dash;
    };
    return finaText;
};

// Bai4
let bai_4 = () => {
    let divisor = [];
    for (let i = 0; i <= 100; i++) {
        if(i % 5 == 0 && i !== 0) divisor.push(i);
    };
    
    let sum = divisor.reduce((total,elem) => {
        return total + elem;
    }, 0);
    return sum;
};

// Bai5
let bai_5 = (r) => {
    let banKinh = r*3;
    let theTich = (4*Math.PI*banKinh) / 3;
    return `The tich cua hinh cau la ${theTich}`;
};

// Bai6
// sort()
let bai_6 = (array) => {
    // Sap xep mang tu thap den cao
    let order = (min,max) => {return min-max;}

    let list = array.sort(order);
    let a = list[0];
    let b = list[1];
    let c = 0;

    while (a <= b) {
        c = c + a;
        a += 1;
    }

    return c;
};
console.log(bai_6([10,8]));

// Bai7
let bai_7 = (checkNumber) => {
    return Number.isInteger(checkNumber);
};

// Bai8
let bai_8 = (randomNum) => {
    let sum = 0;
    for (let i = 0; i <= randomNum; i++) {
        sum += i;
    };
    return sum;
};

//Bai9
let bai_9 = (randomNum) => {
    let sum = 0;
    for(let i = 0; i < randomNum; i++) {
        if (randomNum % i == Number.isInteger() ) console.log(i);
    };
};














