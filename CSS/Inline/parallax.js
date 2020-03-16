document.addEventListener("DOMContentLoaded", function (event) {
    parallaxer();
});

function parallaxer() {
    document.addEventListener("mousemove", parallax);
    const layer_1 = document.querySelector("#parallax__layer--1");
    const layer_2 = document.querySelector("#parallax__layer--2");

    function parallax(event) {
        //let _w = ความกว้างภายในหน้าเว็บ / 2
        //let _h = ความสูงภายในหน้าเว็บ   / 2
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;

        //_mouseX = อีเว้น ตำแหน่งของเมาส์ในแนวนอน
        //_mouseY = อีเว้น ตำแหน่งของเมาส์ในตั้ง
        let _mouseX = event.clientX;
        let _mouseY = event.clientY;

        //let _depth1 = [ผลลัพธ์ตัวเลขแบบไม่เอาเศษ จาก _mouseX - _w]
        let _depth1 = [`${Math.floor(-(_mouseX - _w)*0.02)}%`, `${Math.floor(-(_mouseY - _h)*0.02)}%`];

        let _depth2 = [`${Math.floor(-(_mouseX - _w)*0.03)}%`, `${Math.floor(-(_mouseY - _h)*0.03)}%`];
        layer_1.style.transform = `translate(${_depth1[0]},${_depth1[1]})`
        layer_2.style.transform = `translate(${_depth2[0]},${_depth2[1]})`

        //จุดตรวจ
        console.clear()

        console.table({
            "this screen size": {
                'window-inner-width': _w * 2,
                'window-inner-height': _h * 2,
            }
        })

        console.table({
            "this screen size with / 2": {
                'window-inner-width': _w,
                'window-inner-height': _h,
            }
        })

        console.table({
            "this mouse codinate": {
                'codinate x': _mouseX,
                'codinate y': _mouseY,
            }
        })

        console.table(_depth1)

    };
}