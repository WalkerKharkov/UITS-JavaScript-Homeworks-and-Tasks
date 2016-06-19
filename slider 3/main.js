var doc=document,
    image=doc.querySelector("#image"),
    previews=doc.querySelector("#previews"),
    imgNumber=4,
    bigImage;


(function pageInit(){
    for (var i=1; i<=4; i++){
        var elem=doc.createElement("IMG");
        elem.setAttribute("src", "img/"+i+".png");
        elem.setAttribute("data-id", ""+i);
        elem.style.cssText="width:100px; height:50px";
        previews.appendChild(elem);
    }

    bigImage=doc.createElement("IMG");
    bigImage.setAttribute("src", "img/1.png");
    bigImage.style.cssText="width:400px; height:200px";
    image.appendChild(bigImage);

    previews.addEventListener("click", function (event) {
        if (!event.target.getAttribute("data-id")) return;
        bigImage.setAttribute("src", "img/"+event.target.getAttribute("data-id")+".png")
    })
})();

