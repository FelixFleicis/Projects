var i=0;
var str="aldkjflkadsjfalsdk;fkjads;lkfjasd;lkfjads;lkfjasd;lkfjasdl;kfjasdflkajhd;asdjgsdal;gjasd;lkgjasd;lkgjasd;lkgjasdl;kgjasd;lgkajsdgl;kgnasdlkgjas;lkgjasdlkgjasd;lkgjasd";			
window.onload=function typing(){
            //获取div
    var mydiv=document.getElementById("text");
    mydiv.innerHTML+=str.charAt(i);
    i++;
    var id=setTimeout(typing,50);
    if(i==str.length){
        clearTimeout(id);
        }
    }