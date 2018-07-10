function scroll() {
    topArr = document.getElementsByClassName("toTop");
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topArr[0].style.display="inline"}
       
    else {
        topArr[0].style.display="none"}
}