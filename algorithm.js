var iniPrincipal = document.getElementById("pv").value;
var rate = document.getElementById("anualInterest").value;
var regContri = document.getElementById("reg").value;
var regFreq = document.getElementById("freq").value;
var years = document.getElementById("investYears").value;
var compFreq = document.getElementById("compFreq").value;

var addContri1;
// = document.getElementById("input1a").value
var addYear1;
// = document.getElementById("input1b").value
var addContri2;
// = document.getElementById("input2a").value
var addYear2;
// = document.getElementById("input2b").value

var iniPrincipalArr = [];
var regContriArr = [];
var addContriArr = [];
var totalArr = [];
var interestArr = [];

var iniPrincipalObj = {
    name: 'Initial Principal',
    data: iniPrincipalArr
};

var regContriObj = {
    name: 'Regular Deposits',
    data: regContriArr
};

var addContriObj = {
    name: 'Additional Investment',
    data: addContriArr
};

var interestObj = {
    name: 'Additional Investment',
    data: interestArr
};

var dataArr = [];


var yearArr = [];
// let years = 5;
const yearArrGenerator = (years) => {

    yearArr = new Array(years);
    var n = 0;
    for (let i = 0; i < yearArr.length; i++) {
        ++n;
        yearArr[i] = n;
    };
    return yearArr;
};
yearArrGenerator(years);


// let years = 5;
let iniPrincipalArr = [];
// let iniPrincipal = 10000;
const iniPrincipalArrGenerator = (years, iniNum) => {
    iniPrincipalArr = new Array(years);
    for (let i = 0; i < iniPrincipalArr.length; i++) {
        iniPrincipalArr[i] = Math.round(iniNum);
    };
    return iniPrincipalArr;
};
iniPrincipalArrGenerator(regFreq, regContri);


// let years = 5;
// let regContriArr = [];
// let iniPrincipal = 10000;
// let regContri = 100;
// let regFreq = 52;
const regContriArrGenerator = (years, regContri, regFreq) => {
    regContriArr = new Array(years);
    for (let i = 0; i < regContriArr.length; i++) {
        regContriArr[i] = Math.round(regContri * regFreq * (i + 1));
    };
    return regContriArr;
};
regContriArrGenerator(years, regContri, regFreq);

// let years = 5;
// let addContriArr = [];
// let addContri1 = 1000;
// let addYear1 = 2;
// let addContri2= 100;
// let addYear2 = 4;
const addContriArrGenerator = (years, addContri1, addYear1, addContri2, addYear2) => {
    addContriArr = new Array(years);
    for (let i = 0; i < addContriArr.length; i++) {
        addContriArr[i] = 0;
    };
    for (let i = addYear1 - 1; i < addContriArr.length; i++) {
        addContriArr[i] = Math.round(addContriArr[i] + addContri1);
    };
    for (let i = addYear2 - 1; i < addContriArr.length; i++) {
        addContriArr[i] = Math.round(addContriArr[i] + addContri2);
    };

    return addContriArr;
}
addContriArrGenerator(years, addContri1, addYear1, addContri2, addYear2);

var totalArr = [];

function totalArrGeneratore(years, compFreq, iniNum, rate, regContri ,regFreq,addContri1, addYear1, addContri2, addYear2) {
    let duration ;

    switch (regFreq) {
        case 1:
            duration = 365;
            break;
        case 12:
            duration = 30;
            break;
        case 26:
            duration = 14;
            break;
        case 52:
            duration = 7;
            break;
        case 365:
            duration = 1;
            break;
        default:
            break;
    }
    totalArr = new Array(years);
    totalArr[0] = iniNum;
    for (let i = 1; i < totalArr.length; i++) {
        if (compFreq=1) {
            if (i=== addYear1-1) {
                totalArr[i] = addContri1 + addContri1
            } else {
                
            }
        } else {
            
        }


        regContriArr[i] = Math.round(regContri * regFreq * (i + 1));
    };
    return regContriArr;
}



function interestArrGenerator(years,) {

}
function iniPrincipalObjGenerator(params) {

};

function regContriObjGenerator(params) {

};

function addContriObjGenerator(params) {

}

function interestObjGenerator(params) {

}

function dataArr(params) {

}