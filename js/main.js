let moonIcon = document.querySelector(".moon-icon")
let sunIcon = document.querySelector(".sun-icon")
let cssStyleSheet = document.querySelector("#skin-color")

moonIcon.addEventListener("click",()=>{
cssStyleSheet.setAttribute("href","css/style-dark.css")
window.localStorage.setItem("darkStyle","css/style-dark.css")

})
if (window.localStorage.getItem("darkStyle") == "css/style-dark.css") {

    cssStyleSheet.setAttribute("href", window.localStorage.getItem("darkStyle"))   
    
}else{
    cssStyleSheet.setAttribute("href","css/style.css")
} ;


sunIcon.addEventListener("click",()=>{
    cssStyleSheet.setAttribute("href" , "css/style.css")
    moonIcon.style.display = "block"
    sunIcon.style.display = "none"
    window.localStorage.removeItem("darkStyle")
})