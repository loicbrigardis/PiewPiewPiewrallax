$(function() {

    var headerH = $('.bird-box').height();

    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();
        var zoom = 1 + (wScroll / 300);

        if (wScroll < headerH) {
            $('.logo').css({
                'transform': 'translate(0px, ' + wScroll / 1 + '%) scale(' + zoom + ')',
            });

            /* blur effect */
            // $('.bird-box').css({
            //   'filter': 'blur(' + wScroll / 80 + 'px)',
            //   '-webkit-filter': 'blur(' + wScroll / 80 + 'px)',
            //   '-moz-filter': 'blur(' + wScroll / 80 + 'px)',
            //   '-ms-filter': 'blur(' + wScroll / 80 + 'px)',
            //   '-o-filter': 'blur(' + wScroll / 80 + 'px)'
            // });

            $('.back-bird').css({
                'transform': 'translate(' + wScroll / 1 + 'px, -' + wScroll / 5 + '%)'
            });

            $('.fore-bird').css({
                'transform': 'translate(0px, -' + wScroll / 8 + '%)'
            });

            if (wScroll > $('.birds-pics').offset().top - ($(window).height() / 1.2)) {
                //need refact
                $('.birds-pics figure img').each(function(i) {
                    setTimeout(function() {
                        $('.birds-pics figure img').eq(i).addClass('is-showing');
                    }, 150 * i);
                });

            };

        }


        if (wScroll > $('.black-screen').offset().top - ($(window).height())) {
            var opacity = (wScroll - $('.black-screen').offset().top + ($(window).height() / 2)) / (wScroll / 5);
            var opacity2 = wScroll - $('.black-screen').offset().top;
            if (opacity > 0 && opacity < 1) {
                $('.black-screen').css({
                    'opacity': opacity.toFixed(2)
                });
            }
        }

        if (wScroll > $('.thumbnails').offset().top - $(window).height()) {

            var offset = Math.min(0, (wScroll - $('.thumbnails').offset().top + $(window).height()) - 350);
            $('.thumb1').css({
                'transform': 'translate(' + offset + 'px, 20px)'
            });
            $('.thumb3').css({
                'transform': 'translate(' + Math.abs(offset) + 'px, 20px)'
            });
        }

    });


    function randomRotation() {
        var countImg = $('.birds-pics figure').length;
        var number = 1 + Math.floor(Math.random() * (countImg - 1));
        var a = Math.random() * 10 - 5;
        var birdFigue = $('.birds-pics figure');
        setTimeout(function() {
            $('.birds-pics figure').each(function() {
                $(this).css({
                    'transform': 'rotate(0deg) scale(1)',
                    'transition': 'all 500ms ease-in-out'
                });
                $(this).find("img").css({
                    'opacity': '0.5'
                });
            });
            $(birdFigue).eq(number).css({
                'transform': 'rotate(' + a + 'deg ) scale(1.2)',
            });
            $(birdFigue).find("img").eq(number).css({
                'opacity': '1'
            });
            randomRotation();
        }, 1000 * (number / 1.2));
    };
    randomRotation();


    $('.background-btn, #nav-icon, .background-opacity').click(function() {
        $('#nav-icon').toggleClass('open');
        $('#container').toggleClass('is-active');
        $('#sidemenu-btn').toggleClass('toggle-btn-menu');
        $('.background-opacity').toggleClass('background-opacity-active');
        $('.side-menu').toggleClass('hide-menu');
        $('.background-btn').toggleClass('toggle-btn-menu');
    });

});
