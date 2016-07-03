var doc = document;
    /*image=doc.querySelector("#image"),
    previews=doc.querySelector("#previews"),
    bigImage=doc.createElement("IMG"),
    imgNumber=7, previewsNumber=4, previewsWidth=100,
    previewsHeight=50, elemCash, currentPosition;*/


function Slider(elem){
    this.elem = elem;

    this.imagesInit();

    this.add()
}

Slider.prototype.imagesInit = function () {
    for (var i = 1; i <= this.imgNumber; i++){
        var elem = doc.createElement("IMG");
        elem.setAttribute("src", "img/"+i+".png");
        elem.setAttribute("data-id", ""+i);
        elem.setAttribute("data-attr", "img");
        elem.style.cssText = "width:" + this.imgWidth + "px; height:" + this.imgHeight + "px;";
        this.elem.firstElementChild.appendChild(elem);
    }

    this.imgNumber = 7;
    this.imgHeight = 50;
    this.imgWidth = 100;
    this.elem.style.width = this.imgWidth;
    this.elem.style.height = this.imgHeight;
    this.elem.style.outline = "1px black";

};

Slider.prototype.add = function(){
    function onWheel(e) {
        e = e || window.event;
        var delta = e.deltaY || e.detail || e.wheelDelta;
        var info = document.getElementById('delta');
        info.innerHTML = +info.innerHTML + delta;
    }
    if (this.elem.addEventListener) {
        if ('onwheel' in document) {
            this.elem.addEventListener("wheel", onWheel);
        } else if ('onmousewheel' in document) {
            this.elem.addEventListener("mousewheel", onWheel);
        } else {
            this.elem.addEventListener("MozMousePixelScroll", onWheel);
        }
    } else {
        this.elem.attachEvent("onmousewheel", onWheel);
    }
};

var slider = new Slider(doc.querySelector("#hidden"));

slider.imagesInit();
slider.add();