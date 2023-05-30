const boxRef = document.querySelector('.box');

setTimeout(() => {
    boxRef.style.left = '500px';
    setTimeout(() => {
        boxRef.style.top = '500px';
        setTimeout(() => {
            boxRef.style.left = '0px';
            setTimeout(() => {
                boxRef.style.top = '0px';
            }, 3000);
        }, 3000);
    }, 3000);
}, 3000)