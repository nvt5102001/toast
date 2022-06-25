function toast({title = '',msg = '' , type = 'info', duration = 3000}) {
    const main = document.getElementById('toast');
    const icons = {
        success: 'fas fa-check-circle',
        info: 'fas fa-info-circle',
        warning: 'fas fa-info-circle',
        error: 'fas fa-exclamation-circle'
    }
    const icon = icons[type];
    const delay = (duration/1000).toFixed(2);
    const toast = document.createElement('div');
    toast.classList.add('toast', `toast--${type}`);
    toast.style.animation = `inToast ease .3s, outToast linear 1s ${delay}s forwards`;


    if(main){

    const autoClose = setTimeout(function(){
    main.removeChild(toast)
        },duration+1000);

    toast.onclick = function(e){
        if(e.target.closest('.toast__close'))
        {
            main.removeChild(toast);
            clearTimeout(autoClose);
        }
    }

    toast.innerHTML = `<div class="toast__icon">
    <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <div class="toast__title">${title}</div>
            <div class="toast__msg">${msg}</div>
        </div>
        <div class="toast__close">
            <i class="fas fa-times"></i>
        </div>`;
main.appendChild(toast);

    
    }
}

function showSuccess(){
    toast({
    title: 'Success',
    msg: 'Bạn đã đăng kí thành công!',
    type: 'success',
    duration: 3000
});
}

function showInfo(){
    toast({
    title: 'Info',
    msg: 'Bạn đã đăng kí thành công!',
    type: 'info',
    duration: 3000
});
}

function showWarning(){
    toast({
    title: 'Warning',
    msg: 'Bạn đã đăng kí thành công!',
    type: 'warning',
    duration: 3000
});
}

function showError(){
    toast({
    title: 'Error',
    msg: 'Bạn đã đăng kí thành công!',
    type: 'error',
    duration: 3000
});
}