var doc=document,
    ul=doc.querySelector("#list"),
    elemCash;

ul.style.cssText="width: "+parseInt(getComputedStyle(ul.firstElementChild).width)*doc.querySelectorAll("LI").length
    +"px; left: 0px";

var Controller={
    next: function (elem) {
        elemCash=ul.firstElementChild.cloneNode();
        elemCash.textContent=ul.firstElementChild.textContent;
        ul.removeChild(ul.firstElementChild);
        ul.appendChild(elemCash);
    },

    prev: function (elem) {
        elemCash=ul.lastElementChild.cloneNode();
        elemCash.textContent=ul.lastElementChild.textContent;
        ul.removeChild(ul.lastElementChild);
        ul.insertBefore(elemCash, ul.firstElementChild);
    }
};

doc.querySelector("#controls").addEventListener("click", function (event) {
    var shift = event.target.getAttribute("data-shift");
    if (!shift) return;
    Controller[shift]();
});





