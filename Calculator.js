
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

    
