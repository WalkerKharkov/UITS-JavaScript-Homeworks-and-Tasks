var doc=document,
    prev=doc.querySelector("#prev"),
    next=doc.querySelector("#next"),
    ul=doc.querySelector("#list"),
    liWidth,
    ulWidth;

liWidth=parseInt(getComputedStyle(ul.firstElementChild).width);
ulWidth=doc.querySelectorAll("LI").length*liWidth;
ul.style.cssText="width: "+ulWidth+"px; left: 0px";

function currentShift() {
    return parseInt(ul.style.left);
}

var Controller={
    next: function () {
        if (currentShift()==(liWidth-ulWidth)) return;
        this.move(-liWidth);
    },

    prev: function () {
        if (currentShift()==0) return;
        this.move(liWidth);
    },

    move: function(shift){
        ul.style.left=currentShift()+shift+"px";
    }
};

doc.querySelector("#controls").addEventListener("click", function (event) {
    var shift = event.target.getAttribute("data-shift");
    if (!shift) return;
    Controller[shift]();
});





