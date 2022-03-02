cntr = document.getElementById("container");
spantext = document.querySelector("span");
cntr.style.transition = "all 0.4s";
check = document.querySelector('input[type=checkbox]');

window.onload = function(){
    if(chrome.extension.getBackgroundPage().enabled){
        cntr.classList.remove("bgblack");
        cntr.classList.add("bgred");
        spantext.classList.add("blue");
        spantext.classList.remove("red");
        spantext.innerHTML = "Enabled";
    }
    else{
        cntr.classList.add("bgblack");
        cntr.classList.remove("bgred");
        spantext.classList.add("red");
        spantext.classList.remove("blue");
        spantext.innerHTML = "Disabled";
    }
    function updateLabel(){
        var enabled = chrome.extension.getBackgroundPage().enabled;
        document.getElementById('cbox').checked = enabled ? true : false;
        if(enabled){
            spantext.innerHTML = "Enabled";
        }
        else spantext.innerHTML = "Disabled";
    }
    document.getElementById('cbox').onclick = function(){
        if(this.checked){
            cntr.classList.remove("bgblack");
            cntr.classList.add("bgred");
            spantext.classList.add("blue");
            spantext.classList.remove("red");
        }
        else{
            cntr.classList.add("bgblack");
            cntr.classList.remove("bgred");
            spantext.classList.add("red");
            spantext.classList.remove("blue");
        }
        var background = chrome.extension.getBackgroundPage();
        background.enabled = this.checked;
        updateLabel();
    };
    updateLabel();
}