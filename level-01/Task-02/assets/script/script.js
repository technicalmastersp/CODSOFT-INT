// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   call elements   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const menuTab = document.querySelector('.spBtn')
const navBar = document.getElementById('hNavBar')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~   using call elements and apply event for navbar hide & unhide   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const hide = menuTab.addEventListener("click", function() {
    if(menuTab.innerHTML === 'menu'){
        menuTab.innerHTML = 'close';
        navBar.style.display = 'inline'
    } else if(menuTab.innerHTML === 'close' ) {
        menuTab.innerHTML = 'menu';
        navBar.style.display = 'none'
    }
})
