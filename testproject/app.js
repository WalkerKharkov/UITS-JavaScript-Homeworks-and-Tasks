var doc = document;


function Slider(elem){
    this.elem = elem;
    this.child = this.elem.firstElementChild;

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
        this.child.appendChild(elem);
    }

    this.imgNumber = 7;
    this.imgHeight = 100;
    this.imgWidth = 200;
    this.elem.style.width = this.child.style.width = this.imgWidth + "px";
    this.elem.style.height = this.child.style.height = this.imgHeight + "px";
    this.elem.style.outline = "1px black solid";
    this.maxHeight = this.imgHeight * (this.imgNumber - 1);
    this.child.style.top = 0 + "px";
};

Slider.prototype.add = function(){
    var self = this;
    function onWheel(e) {
        e = e || window.event;
        var delta = e.deltaY || e.detail || e.wheelDelta;
        var top = 0;
        if(delta > 0){
            top = parseInt(getComputedStyle(self.child).top) - self.imgHeight;
            top = (Math.abs(top) > self.maxHeight) ? 0 : top;
        }else{
            top = parseInt(getComputedStyle(self.child).top) + self.imgHeight;
            top = (top > 0) ? -self.maxHeight : top
        }
        self.child.style.top = top - 1 + "px";
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