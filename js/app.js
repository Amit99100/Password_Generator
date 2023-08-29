const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

// selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")



const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {

    //when we generate new password copied button should turn to copy 
    document.getElementById('btn1').innerHTML="Copy";

    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if (password.length < charCount.innerHTML) {
        return generatePassword(password)
    }

    //stack overflow 
    passBox.innerText = truncateString(password, charCount.innerHTML);
}



document.getElementById("btn").addEventListener(
    "click",
    function () {
        generatePassword();
    }

)


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}

//copy to clipboard section added to copy the password  

const clipboard = document.getElementById('btn1');

clipboard.addEventListener(
    "click",
    function () {
       let  copyText =  passBox.innerText;
       console.log(copyText)
       navigator.clipboard.writeText(copyText);
       clipboard.innerHTML='Copied';
    }

);

// slider css start 
var slider = document.getElementById("myRange");
var output = document.getElementById("charCount");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}