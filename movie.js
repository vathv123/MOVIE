let pgdown = true;

window.addEventListener('keydown', (event) =>{
    if ( pgdown && event.key === 'ArrowDown'){
        setTimeout(() => {
            window.scrollTo({
                top: 680,
                behavior: 'smooth',
            });
        }, 120);
        pgdown = false;
    }
    else if ( !pgdown && event.key === 'ArrowUp'){
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }, 120);
        pgdown =true;
    }
});