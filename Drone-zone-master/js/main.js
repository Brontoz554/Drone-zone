setTimeout(() => {
    document.querySelector('body').style.overflowY = 'hidden';
    setTimeout(() => {
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.modal').style.position = 'fixed';
        document.querySelector('.modal').style.top = 0;
        document.querySelector('.modal').style.left = 0;
    }, 100)
}, 1000);


function hiddenModal()
{
    document.querySelector('body').style.overflowY = 'auto';
    document.querySelector('.modal').style.display = 'none';
}
