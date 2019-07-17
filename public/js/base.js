window.onload=function(){
    var con=document.getElementById("con");
    var con1=document.getElementById("con1");
    con.onclick=function(){
        if(con1.style.display=="none"){
            con1.style.display="block";
        }else{con1.style.display="none"};
    };
};