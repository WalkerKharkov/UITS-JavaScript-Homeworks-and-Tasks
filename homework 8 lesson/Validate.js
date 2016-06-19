var mainForm=document.querySelector("#mainForm");

mainForm.addEventListener("change", function(event){
    validator.validate(event.target, event.target.getAttribute("data-attr"));
});

mainForm.addEventListener("submit", submitHandler);

var validator={
	patterns: {
		"name": /\S/,
		"email": /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i,
		"zip": /\d{5}/
	},
    validate: function(elem, attr){
        var pattern=this.patterns[attr],
            res = pattern.test(elem.value);
        if (res === false) {
            elem.className = "invalid";
        }
        else {
            elem.className = "valid";
        }
    }
};

function submitHandler(event){
    var invalid=false;
    [].slice.apply(mainForm.childNodes).forEach(function(elem){
        if (elem.type!="text") return;
        validator.validate(elem, elem.getAttribute("data-attr"));
        if (elem.className=="invalid") invalid=true;
    });
    if (invalid) {
        alert("Допущены ошибки при заполнении формы.");
        event.preventDefault();
        return false;
    }
}

