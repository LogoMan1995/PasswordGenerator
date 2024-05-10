//Создать input
//Добавить class
//Добавить placeholder
//Сбросить стандартное поведение input
//Добавить обработчика по нажатию
//Добавить кнопку скопировать
//Добавить кнопку сгенерировать
//Создать функцию генерации

const mainEl = document.querySelector('.main');


const pswd = document.createElement('input');
pswd.classList.add('password');
pswd.setAttribute('placeholder','Сгенерировать пароль');

pswd.addEventListener('keypress',(e)=>{
e.preventDefault();
})

pswd.addEventListener('focus',(e)=>{
    navigator.clipboard.writeText(pswd.value)
});

const copyBtn = document.createElement('button');
copyBtn.classList.add('password-button');
copyBtn.innerText = 'Скопировать';

copyBtn.addEventListener('click', (e)=>{
   pswd.select();
   pswd.setSelectionRange(0, 99999); 
   navigator.clipboard.writeText(pswd.value);
})

const generateBtn = document.createElement('button');
generateBtn.classList.add('password-button');
generateBtn.innerText = 'Сгенировать';

generateBtn.addEventListener('click', ()=>{
let password = generatePassword(13);
console.log(password);
pswd.value = password;
})



function generatePassword(passwordLength){
    const numberChars = "0123456789";
    const upperChars  =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars  =  "abcdefghijklmnopqrstuvwxyz.";
    const symbolChars = "`~!@#$%^&*()_+";
    const allChars = numberChars + upperChars + lowerChars + symbolChars;

    let randomString = '';

    for(let i = 0; i < passwordLength; i++ ){
        let randomNumber = Math.floor(Math.random() * allChars.length);
        randomString += allChars[randomNumber];
    }
    return randomString;
}


mainEl.appendChild(pswd);
mainEl.appendChild(copyBtn);
mainEl.appendChild(generateBtn);

