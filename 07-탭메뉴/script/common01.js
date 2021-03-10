$(document).ready(function () {
    var tabBtn = $(".tab-btn > ul > li");
    var tabCon = $(".tab-con > div");

    tabCon.hide().eq(0).show();

    tabBtn.click(function (e) {
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        tabBtn.toggleClass("active");
        tabCon.css("display", "none");
        tabCon.eq(index).css("display", "block");

    })
});
