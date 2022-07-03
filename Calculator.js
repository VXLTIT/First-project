
// Button changeTheme

    let btn, 
    htmlDoc, 
    header1,
    theme;

    theme = 'white'
    btn = document.querySelector('button');
    header1 = document.querySelector('h1');
    htmlDoc = document.querySelector('html');
    btn.addEventListener('click', changeTheme);


    function changeTheme() {
        
        if (theme == 'white') {
            changeDark();
        } else {
            changeWhite();
        }
    }

    let changeDark = changeThemeDark;
    function changeThemeDark() {
        theme = 'dark'
        htmlDoc.style.backgroundColor = '#252424';
        btn.style.color = '#252424';
        header1.style.color = '#252424';
    }

    let changeWhite = changeThemeWhite;
    function changeThemeWhite() {
        theme = 'white';
        htmlDoc.style.backgroundColor = 'white';
        btn.style.color = 'white';
        header1.style.color = 'white';

    }
// Calculator display

    let para, div, bod;
    para = document.createElement('p');
    div = document.querySelector('div');
    div.appendChild(para);

// Calculator buttons

    let zero, one, two, three,
        four, five, six, seven, 
        eight, nine;

    let minus, plus, clean, sign,
        remainder, root, degree, 
        division, multiply, equals;

    zero = document.querySelector('#zero');
    zero.addEventListener('click', zeroFunction);

    one = document.querySelector('#one');
    one.addEventListener('click', oneFunction);

    two = document.querySelector('#two');
    two.addEventListener('click', twoFunction);

    plus = document.querySelector('#plus');
    plus.addEventListener('click', plusFunction);
    

    clean = document.querySelector('.clean');
    clean.addEventListener('click', cleanFunction);


// Function for calculator buttons

    function zeroFunction() {
        let symbol = '0',
            num = '';

        num += symbol;
        para.textContent += num;
    }

    function oneFunction() {
        let symbol = '1',
            num = '';

        num += symbol;
        para.textContent += num;
    }

    function twoFunction() {
        let symbol = '2',
            num = '';

            num += symbol;
            para.textContent += num;
    }

    function plusFunction() {
        let symbol = '+'
            num = '';

            num = num + ' ' + ' ' + symbol;
            para.textContent += num;
    }

    function cleanFunction() {
        para.textContent = ''
    }

