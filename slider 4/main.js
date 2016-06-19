var doc=document,
    image=doc.querySelector("#image"),
    previews=doc.querySelector("#previews"),
    bigImage=doc.createElement("IMG"),
    imgNumber=7, previewsNumber=4, previewsWidth=100,
    previewsHeight=50, elemCash, currentPosition;

var controller = {
    prev: function () {
        if (!currentPosition.previousElementSibling) {
            elemCash = previews.lastElementChild.cloneNode();
            elemCash.textContent = previews.lastElementChild.textContent;
            previews.removeChild(previews.lastElementChild);
            previews.insertBefore(elemCash, previews.firstElementChild);
            currentPosition.previousElementSibling.classList.add("active");
            imgRender();
        } else {
            currentPosition.previousElementSibling.classList.add("active");
            imgRender();
        }
    },
    next: function () {
        if (currentPosition.getBoundingClientRect().left/(previewsWidth*(previewsNumber-1))>1){
            elemCash = previews.firstElementChild.cloneNode();
            elemCash.textContent = previews.firstElementChild.textContent;
            previews.removeChild(previews.firstElementChild);
            previews.appendChild(elemCash);
            currentPosition.nextElementSibling.classList.add("active");
            imgRender();
        } else {
            currentPosition.nextElementSibling.classList.add("active");
            imgRender();
        }
    },
    img: function (elem) {
        elem.classList.add("active");
        imgRender();
    }
};

function imgRender() {
    bigImage.setAttribute("src", "img/"+previews.querySelector(".active").getAttribute("data-id")+".png");
}

(function pageInit(){
    for (var i=1; i<=imgNumber; i++){
        var elem=doc.createElement("IMG");
        elem.setAttribute("src", "img/"+i+".png");
        elem.setAttribute("data-id", ""+i);
        elem.setAttribute("data-attr", "img");
        elem.style.cssText="width:"+previewsWidth+"px; height:"+previewsHeight+"px;";
        previews.appendChild(elem);
    }

    bigImage.style.cssText="width:"+previewsWidth*previewsNumber+"px; height:"
        +previewsHeight*previewsNumber+"px";
    previews.firstElementChild.classList.add("active");
    image.appendChild(bigImage);
    imgRender();

    previews.style.cssText="width:"+previewsWidth*previewsNumber+"px;height:"
        +previewsHeight+"px;overflow: hidden";


    doc.addEventListener("click", function (event) {
        if (!event.target.getAttribute("data-attr")) return;
        currentPosition=previews.querySelector(".active");
        currentPosition.classList.remove("active");
        controller[event.target.getAttribute("data-attr")](event.target);
    })
})();