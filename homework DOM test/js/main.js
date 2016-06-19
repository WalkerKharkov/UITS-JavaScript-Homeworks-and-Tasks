(function(){
    var doc = document;
    var elems = doc.getElementById("list");
    var active, i, maxNumber=5;

    var Controller={
        selectFirst: function(){
            elems.firstElementChild.classList.add("active");
        },
        selectLast: function(){
            elems.lastElementChild.classList.add("active");
        },
        selectNext: function(active){
            if (active == elems.lastElementChild) {
                this.selectFirst();
            }
            else {
                active.nextElementSibling.classList.add("active");
            }
        },
        selectPrevious: function(active){
            if (active == elems.firstElementChild) {
                this.selectLast();
            }
            else {
                active.previousElementSibling.classList.add("active");
            }
        },
        appendElement: function(){
            elems.appendChild(newElem());
            maxNumber++;
        },
        deleteElement: function(active){
            if ([].slice.apply(doc.getElementsByTagName("LI")).length == 1) {
                alert("Вы не можете удалить последний элемент!");
            }
            elems.removeChild(active);
            this.selectFirst();
        },
        insertBeforeElement: function(){
            elems.insertBefore(newElem(), elems.firstElementChild);
            maxNumber++;
        },
        regulateElements: function(){
            setNumbers();
            maxNumber=doc.querySelectorAll("LI").length;
            this.selectFirst();
        }
    };

    function createElem() {
        return doc.createElement("LI");
    }

    function isActive() {
        return doc.querySelector(".active");
    }

    function removeActiveClass() {
        [].slice.apply(doc.querySelectorAll(".active")).forEach(function(elem){
            elem.classList.remove("active");
        });
    }

    function setNumbers() {
        i=1;
        [].slice.apply(doc.getElementsByTagName("LI")).forEach(function(elem){
            elem.setAttribute("number", i);
            elem.innerHTML="Элемент "+i;
            i++;
        });
    }

    function newElem() {
        var newElem = createElem();
        newElem.setAttribute("number", maxNumber+1);
        newElem.innerHTML = "Элемент " + newElem.getAttribute("number");
        removeActiveClass();
        newElem.classList.add("active");
        return newElem;
    }

    function pageInit() {
        for (var i = 0; i < 5; i++) {
            elems.appendChild(createElem());
        }
        setNumbers();
        Controller.selectFirst();
    }




    pageInit();

    doc.querySelector("#controls").addEventListener("click", function (event) {
        var action = event.target.getAttribute("data-action");
        active = isActive();
        removeActiveClass();
        Controller[action](active);
    });


})();