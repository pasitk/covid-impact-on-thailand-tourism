$(document).ready(function () {
    $("#bg-video")
        .css({
            'transform': 'translate(-20%, 0%)'
        })
        .fadeTo(2000, 1);
    $("#index-content-item-1")
        .delay(500)
        .queue(function (next) {
            $(this).css({
                'transform': 'translateY(0%)',
                'opacity': 1,
                '-webkit-transition': 'opacity 2s ease-in-out, transform 2s',
                '-moz-transition': 'opacity 2s ease-in-out, transform 2s',
                '-ms-transition': 'opacity 2s ease-in-out, transform 2s',
                '-o-transition': 'opacity 2s ease-in-out, transform 2s',
                'transition': 'opacity 2s ease-in-out, transform 2s'
            });
            next();
        });
    $("#index-content-item-1-text")
        .delay(1000)
        .queue(function (next) {
            $(this).css({
                'transform': 'translateY(0%)',
                'opacity': 1,
                '-webkit-transition': 'opacity 2s ease-in-out, transform 2s',
                '-moz-transition': 'opacity 2s ease-in-out, transform 2s',
                '-ms-transition': 'opacity 2s ease-in-out, transform 2s',
                '-o-transition': 'opacity 2s ease-in-out, transform 2s',
                'transition': 'opacity 2s ease-in-out, transform 2s'
            });
            next();
        });
})

$(document).on("rerunAnimation", function () {
    console.log("Rerun");
    $("#index-content-item-2-text").css({
            'opacity': 0,
            'transform': 'translateY(20%)',
            '-webkit-transition': 'opacity 0s ease-in-out, transform 0s',
            '-moz-transition': 'opacity 0s ease-in-out, transform 0s',
            '-ms-transition': 'opacity 0s ease-in-out, transform 0s',
            '-o-transition': 'opacity 0s ease-in-out, transform 0s',
            'transition': 'opacity 0s ease-in-out, transform 0s'
        })
        .delay(1000)
        .queue(function (next) {
            $(this).css({
                'transform': 'translateY(0%)',
                'opacity': 1,
                '-webkit-transition': 'opacity 2s ease-in-out, transform 2s',
                '-moz-transition': 'opacity 2s ease-in-out, transform 2s',
                '-ms-transition': 'opacity 2s ease-in-out, transform 2s',
                '-o-transition': 'opacity 2s ease-in-out, transform 2s',
                'transition': 'opacity 2s ease-in-out, transform 2s'
            });
            next();
        });
});