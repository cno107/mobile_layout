
window.onload = function () {

    var content_l = document.querySelector('.content_l ul');
    var ul_height = content_l.offsetHeight;
    var head_height = document.querySelector('header').offsetHeight;
    var content_height = window.innerHeight - head_height;  //可见页面高度
    ////
    var content_r = document.querySelector('.content_r')
    var content_r_height = content_r.offsetHeight;
    //window.innerHeight
    slide_l();
    function slide_l() {
        var old_y = 0

        var currentY = 0;
        var moveY = 0
        content_l.ontouchstart = function (ev) {
            ev = ev || event;
            old_y = ev.touches[0].clientY;


        }
        content_l.ontouchmove = function (ev) {
            ev = ev || event;
            moveY = ev.touches[0].clientY - old_y;
            var translateY = (currentY+moveY);
            if(translateY > 0){
                translateY = 0;
            }
            if(translateY < -(ul_height - content_height)){
                translateY = -(ul_height - content_height);
            }
            this.style.transform = 'translateY('+translateY+'px)';
            // if(l_dis)

        }
        content_l.ontouchend = function (ev) {

            currentY += moveY ;
        }

    }

    slide_r();
    function slide_r() {
        var old_y = 0

        var currentY = 0;
        var moveY = 0
        content_r.ontouchstart = function (ev) {
            ev = ev || event;
            old_y = ev.touches[0].clientY;

        }
        content_r.ontouchmove = function (ev) {
            ev = ev || event;
            moveY = ev.touches[0].clientY - old_y;
            var translateY = (currentY+moveY);
            if(translateY > 0){
                translateY = 0;
            }
            if(translateY < -(content_r_height - content_height)){
                translateY = -(content_r_height - content_height);
            }
            this.style.transform = 'translateY('+translateY+'px)';
            // if(l_dis)

        }
        content_r.ontouchend = function (ev) {

            currentY += moveY ;
        }
    }


    chBtn()
    function chBtn() {
        var li = document.querySelectorAll('.content_l ul li');
        for(var i=0;i<li.length;i++) {
            li[i].addEventListener('click', function () {
                for (var i = 0; i < li.length; i++) {
                    li[i].className = '';
                }
                this.className = 'now';
            })
        }

    }







}