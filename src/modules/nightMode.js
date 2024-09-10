const nightModeBtn = document.querySelector('.nightMode');
let initState = 'light';
const root = document.documentElement;
if(nightModeBtn) {
    nightModeBtn.addEventListener('click', () => {
        if (icon.classList.contains('fa-moon')) {
            icon.classList.add('fade-out');
            icon.addEventListener('animationend', () => {
                icon.classList.remove('fa-moon', 'fade-out');
                icon.classList.add('fa-sun', 'fall-in');
            }, { once: true });
        }
        else {
            icon.classList.add('fade-out');
            icon.addEventListener('animationend', () => {
                icon.classList.remove('fa-sun', 'fade-out');
                icon.classList.add('fa-moon', 'fall-in');
            }, { once: true });
        }
        if (initState === 'light') {
            root.style.setProperty('--bodyBackgroundColor', '#1e1e1e');
            root.style.setProperty('--headerandFooterColor', '#262626');
            root.style.setProperty('--CardColor', '#262626');
            root.style.setProperty('--submitTaskBackgroundColor', '#de4c4a');
            root.style.setProperty('--pendingTasksNumber', '#de4c4a');
            root.style.setProperty('--logoColor', '#de4c4a');
            root.style.setProperty('--mainTextColor', '#FFFFFF');
            initState = 'dark';
            localStorage.setItem('lightOrNight','night')
        } else {
            root.style.setProperty('--bodyBackgroundColor', '#FFFFFF');
            root.style.setProperty('--headerandFooterColor', 'rgba(242, 234, 234, 1)');
            root.style.setProperty('--CardColor', 'rgba(240, 209, 168, 1)');
            root.style.setProperty('--submitTaskBackgroundColor', '#5C9967');
            root.style.setProperty('--pendingTasksNumber', '#C4A49F');
            root.style.setProperty('--logoColor', '#F87777');
            root.style.setProperty('--mainTextColor', 'black');

            initState = 'light';
            localStorage.setItem('lightOrNight','light')
        }
        console.log(initState)
    })
}

else {
    console.log(initState)
    if (localStorage.getItem('lightOrNight') === 'night') {
        root.style.setProperty('--bodyBackgroundColor', '#1e1e1e');
        root.style.setProperty('--headerandFooterColor', '#262626');
        root.style.setProperty('--CardColor', '#262626');
        root.style.setProperty('--submitTaskBackgroundColor', '#de4c4a');
        root.style.setProperty('--pendingTasksNumber', '#de4c4a');
        root.style.setProperty('--logoColor', '#de4c4a');
        root.style.setProperty('--mainTextColor', '#FFFFFF');
    }
}


const button = document.querySelector('.nightMode');
const icon = button.querySelector('i');

