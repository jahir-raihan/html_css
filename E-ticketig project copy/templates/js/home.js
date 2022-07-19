
function toggle_nav(ele, ele1){

    /* function for toggoling ham menu to cross menu */

    let ham_menu = document.getElementById(ele)
    ham_menu.style.display = 'none'
    let cross_icon = document.getElementById(ele1)
    cross_icon.style.display = 'block';
    let link_menu = document.getElementById('link-menu');
    link_menu.classList.toggle('d-show')
    let footer = document.getElementById('footer')
    footer.classList.toggle('d-none')
    let container = document.getElementById('container')
    container.classList.toggle('d-none')
}