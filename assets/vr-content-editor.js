function openMenu(elm) {
    // console.log(elm);
    let otherElement = document.getElementsByClassName('vr-menu-content');
    for (let i = 0; i < otherElement.length; i++) {
        if (otherElement[i].classList.contains('show')) {
            otherElement[i].classList.remove('show');
        }
    }
    
    let focusElement = document.getElementById('vr-menu-content-' + elm);
    if (focusElement.classList.contains('show')) {
        focusElement.classList.remove('show');
    } else {
        focusElement.classList.add('show');
    }   
}

function n(n) {
    return n > 9 ? '' + n: '0' + n;
}

function openSubMenu(elm) {
    let otherElement = document.getElementsByClassName('vr-submenu');
    for (let i = 0; i < otherElement.length; i++) {
        if (otherElement[i].classList.contains('show')) {
            otherElement[i].classList.remove('show');
        }
    }
    
    let focusElement = document.getElementById('vr-submenu-' + elm);
    if (focusElement.classList.contains('show')) {
        focusElement.classList.remove('show');
    } else {
        focusElement.classList.add('show');
    }   
    
    if (elm === 'datetime') {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = n(month);
        let day = date.getDate();
        day = n(day);
        let hour = date.getHours();
        let ampm = hour >= 12 ? 'pm' : 'am';
        let ampmHour = hour % 12;
        ampmHour  = (ampmHour === 0 ?  12 : ampmHour); // the hour '0' should be '12'
        hour = n(hour);
        ampmHour = n(ampmHour);
        let minute = date.getMinutes();
        minute = n(minute);
        let second = date.getSeconds();
        second = n(second);
        
        document.getElementById('today-time-24').innerHTML = hour + ':' + minute + ':' + second;
        document.getElementById('today-date-year').innerHTML = year + '-' + month + '-' + day;
        document.getElementById('today-time-12').innerHTML = ampmHour + ':' + minute + ':' + second + ' ' + ampm;
        document.getElementById('today-date-day').innerHTML = day + '/' + month + '/' + year;
    }
}

window.onclick = function(e) {
    if (!e.target.matches('.vr-menu-btn')) {
        let otherElement = document.getElementsByClassName('vr-menu-content');
        for (let i = 0; i < otherElement.length; i++) {
            if (otherElement[i].classList.contains('show')) {
                otherElement[i].classList.remove('show');
            }
        }
        
        let otherElement2 = document.getElementsByClassName('vr-submenu');
        for (let i = 0; i < otherElement2.length; i++) {
            if (otherElement2[i].classList.contains('show')) {
                otherElement2[i].classList.remove('show');
            }
        }
    }
}