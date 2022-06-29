
// DarkTheme

    let btn, htmlDoc, header1;
    btn = document.querySelector( 'button' );
    header1 = document.querySelector( 'h1' );
    htmlDoc = document.querySelector( 'html' );
    btn.addEventListener( 'click', darkTheme );

    function darkTheme() {
        htmlDoc.style.backgroundColor = '#252424';
        btn.style.color = '#252424';
        header1.style.color = '252424';
    }

// Calculator display

    let para, div, bod;
    para = document.createElement( 'p' );
    div = document.querySelector( 'div' );
    div.appendChild( para );
