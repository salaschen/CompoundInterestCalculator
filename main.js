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
var addContri1;
// = document.getElementById("input2a").value
var addYear1;
// = document.getElementById("input2b").value

var iniPrincipalArr = [];
var regContriArr = [];
var addContriArr = [];
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
function yearArrGenerator() {
    let years = document.getElementById("investYears").value;
    // let years = 10;
    yearArr = new Array(years);
    var n = 0;
    for (let i = 0; i < yearArr.length; i++) {
        ++n;
        yearArr[i] = n;
    };
    return yearArr;
};

// yearArrGenerator();
console.log(yearArr); // debug

function iniPrincipalArrGenerator(params) {
    
};

function regContriArrGenerator(params) {
    
};

function addContriArrGenerator(params) {
    
}

function interestArrGenerator(params) {
    
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