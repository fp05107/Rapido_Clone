let navbar = document.getElementById("navbar");


window.addEventListener("scroll", () => {
    const scrollValue = Math.floor(window.scrollY);

    //   console.log(scrollValue);

    if (scrollValue < 50) {
        navbar.classList.remove("ChangeBgcolor")
    } else {
        navbar.classList.add("ChangeBgcolor")
    }


});





var downlode = document.querySelector(".downlode");


const download_App = () => {
    downlode.classList.add("black_screen");
    document.querySelector("body").style.overflowY = "hidden";
}

const downlode_app_clode = () => {
    downlode.classList.remove("black_screen");
    document.querySelector("body").style.overflowY = "scroll";
};




var page_one_blogs = document.getElementById("page_one_blogs");
var page_two_blog = document.getElementById("page_two_blog");

var first_btn_color = document.getElementById("first_btn_color");
var second_btn_color = document.getElementById("second_btn_color");



const secons_btn = () =>{
    page_two_blog.style.display = "block"
    page_one_blogs.style.display = "none"

    first_btn_color.style.backgroundColor = "white"
    second_btn_color.style.backgroundColor = "#f9c935"

};
const first_btn = () =>{
    page_two_blog.style.display = "none"
    page_one_blogs.style.display = "block"

    first_btn_color.style.backgroundColor = "#f9c935"
    second_btn_color.style.backgroundColor = "white"

};
