

function handleAnimate() {
    var resURL = 'https://raw.githubusercontent.com/CodestarGames/premierSubscribe/master/images'
    // $('.img-Van')
    //     .css({background: `url(${resURL}/VanSprite.gif) no-repeat`})
    //     .animate({"left": 0 + "%"})
    $('.img-Chris').css({background: `url(${resURL}/ChrisSpriteTired.gif) no-repeat`})
    $('.img-Connor').css({background: `url(${resURL}/ConnorSpriteTired.gif) no-repeat`})
    $('.img-Chris-norm').css({background: `url(${resURL}/ChrisSprite.gif) no-repeat`, opacity: 0})
    $('.img-Connor-norm').css({background: `url(${resURL}/ConnorSprite.gif) no-repeat`, opacity: 0})

    $('.bikers-cont')
    .animate({"left": 45 + "%"}, 1000, () => {
        $('.img-Van').css({background: `url(${resURL}/VanSpriteOpenDrive.gif) no-repeat`})
        $('.van-cont')
        .animate({"left": $('.bikers-cont').position().left - 240}, 800, () => {

            $(".bubble").css({"opacity": 1});
            $('.bikers-cont').delay(3000)
            .animate({"top": "86px"}, 1, () => {
                $(".bubble").css({"opacity": 0});
            })
            .animate({"top": "64px"}, 150, () => {
                $('.img-Chris').css({opacity: 0})
                $('.img-Connor').css({opacity: 0})
                $('.img-Chris-norm').css({opacity: 1})
                $('.img-Connor-norm').css({opacity: 1})
            })
            .animate({"top": "86px"}, 80, () => {
                $('.van-cont')
                .animate({"left": 120 + "%"}, 1200)
            })
            .animate({"left": 120 + "%"}, 1000);

        });


    })


        

}

setTimeout(() => {
    handleAnimate();
}, 750)
