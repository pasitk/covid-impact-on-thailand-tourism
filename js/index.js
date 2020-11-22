function hideItemSmoothly(isBox, item, isUp) { // isBox: yes = box, no = text / isUp: yes = up, no = down
    var transformText = isUp ? "translateY(-20%)" : "translateY(20%)";
    var queryItemText = isBox ? "#index-content-item-" + (item.index + 1) : "#index-content-item-" + (item.index + 1) + "-text";
    $(queryItemText).css({
        'opacity': 0,
        'transform': transformText,
        '-webkit-transition': 'opacity 0.5s ease-in-out, transform 0.5s',
        '-moz-transition': 'opacity 0.5s ease-in-out, transform 0.5s',
        '-ms-transition': 'opacity 0.5s ease-in-out, transform 0.5s',
        '-o-transition': 'opacity 0.5s ease-in-out, transform 0.5s',
        'transition': 'opacity 0.5s ease-in-out, transform 0.5s'
    });
}

function hideBtnSmoothly(item) {
    var queryItemText = "#index-content-item-" + (item.index + 1) + "-btn";
    $(queryItemText).css({
        'opacity': 0,
        '-webkit-transition': 'opacity 0.5s ease-in-out, transform 0.5s',
        '-moz-transition': 'opacity 0.5s ease-in-out, transform 0.5s',
        '-ms-transition': 'opacity 0.5s ease-in-out, transform 0.5s',
        '-o-transition': 'opacity 0.5s ease-in-out, transform 0.5s',
        'transition': 'opacity 0.5s ease-in-out, transform 0.5s'
    });

    if (item.index == 2) {
        var queryItemText = "#index-content-item-" + (item.index + 2) + "-btn";
        $(queryItemText).css({
            'opacity': 0,
            '-webkit-transition': 'opacity 0.5s ease-in-out, transform 0.5s',
            '-moz-transition': 'opacity 0.5s ease-in-out, transform 0.5s',
            '-ms-transition': 'opacity 0.5s ease-in-out, transform 0.5s',
            '-o-transition': 'opacity 0.5s ease-in-out, transform 0.5s',
            'transition': 'opacity 0.5s ease-in-out, transform 0.5s'
        });
    }
}

function showItemSmoothly(isBox, item) { // isBox: yes = box, no = text
    var queryItemText = isBox ? "#index-content-item-" + (item.index + 1) : "#index-content-item-" + (item.index + 1) + "-text";
    var delayMillisec = isBox ? 0 : 250;

    runEffectToShowItem(queryItemText, delayMillisec);
}

function showBtnSmoothly(item) {
    runEffectToShowItem("#index-content-item-" + (item.index + 1) + "-btn", 250);

    if (item.index == 2) {
        runEffectToShowItem("#index-content-item-" + (item.index + 2) + "-btn", 250);
    }
}

function showItemOnRenderSmoothly(isBox, itemIndex) {
    var queryItemText = isBox ? "#index-content-item-" + (itemIndex) : "#index-content-item-" + (itemIndex) + "-text";
    var delayMillisec = isBox ? 0 : 250;

    runEffectToShowItem(queryItemText, delayMillisec);
}

function showBtnOnRenderSmoothly(itemIndex) {
    runEffectToShowItem("#index-content-item-" + (itemIndex) + "-btn", 250);
}

function hideItemOnRender(isBox, itemIndex, isUp) { // isBox: yes = box, no = text / isUp: yes = up, no = down
    var transformText = isUp ? "translateY(-20%)" : "translateY(20%)";
    var queryItemText = isBox ? "#index-content-item-" + itemIndex : "#index-content-item-" + itemIndex + "-text";
    $(queryItemText).css({
        'opacity': 0,
        'transform': transformText,
        '-webkit-transition': 'opacity 0s ease-in-out, transform 0s',
        '-moz-transition': 'opacity 0s ease-in-out, transform 0s',
        '-ms-transition': 'opacity 0s ease-in-out, transform 0s',
        '-o-transition': 'opacity 0s ease-in-out, transform 0s',
        'transition': 'opacity 0s ease-in-out, transform 0s'
    });
}

function hideBtnOnRender(itemIndex) { // isBox: yes = box, no = text / isUp: yes = up, no = down
    var queryItemText = "#index-content-item-" + itemIndex + "-btn";
    $(queryItemText).css({
        'opacity': 0,
        '-webkit-transition': 'opacity 0s ease-in-out, transform 0s',
        '-moz-transition': 'opacity 0s ease-in-out, transform 0s',
        '-ms-transition': 'opacity 0s ease-in-out, transform 0s',
        '-o-transition': 'opacity 0s ease-in-out, transform 0s',
        'transition': 'opacity 0s ease-in-out, transform 0s'
    });
}

function runEffectToShowItem(queryItemText, delayMillisec) {
    $(queryItemText)
        .delay(delayMillisec)
        .queue(function (next) {
            $(this).css({
                'transform': 'translateY(0%)',
                'opacity': 1,
                '-webkit-transition': 'opacity 1s ease-in-out, transform 1s',
                '-moz-transition': 'opacity 1s ease-in-out, transform 1s',
                '-ms-transition': 'opacity 1s ease-in-out, transform 1s',
                '-o-transition': 'opacity 1s ease-in-out, transform 1s',
                'transition': 'opacity 1s ease-in-out, transform 1s'
            });
            next();
        });
}