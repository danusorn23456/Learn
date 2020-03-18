window.addEventListener('DOMContentLoaded', (event) => {
    parallax_move()
})

parallax_move = (event) => {
    let elements = document.querySelectorAll('.js-hover-parallax')
    for(let i = 0;i < elements.length ; i++ ){
        elements[i].addEventListener('mousemove', (event) => {
            let _w = window.innerWidth;
            let _h = window.innerHeight;
            let mouse_x = event.clientX;
            let mouse_y = event.clientY;
            let _dept = [`${Math.floor(mouse_x - _w)*-0.0005}`, `${Math.floor(mouse_y - _h)*-0.0005}`];
            elements[i].style.transform = `translate(${_dept[0]}%,${_dept[1]}%)`;
        })
    }
    
}
