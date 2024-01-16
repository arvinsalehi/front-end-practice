// When the user hovers on div, open the popup
function popup(e) {
    // var popup = document.getElementById("myPopup");
    $(e).hover(() => {
        $(e).children('.popuptext').removeClass('show');
    })

}