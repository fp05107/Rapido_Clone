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



const btntwo = () => {
    document.getElementById("page_four_boxes_two_hide").style.display = "block";
    document.getElementById("page_four_boxes_one_hide").style.display = "none";
    document.getElementById("ColorY").style.backgroundColor = "#f9c935";
    document.getElementById("ColorW").style.backgroundColor = "white";

}

const btnone = () => {
    document.getElementById("page_four_boxes_two_hide").style.display = "none";
    document.getElementById("page_four_boxes_one_hide").style.display = "block";
    document.getElementById("ColorY").style.backgroundColor = "white";
    document.getElementById("ColorW").style.backgroundColor = "#f9c935";
};





var page_five_card_one_hide = document.getElementById("page_five_card_one_hide")
var page_five_card_two_hide = document.getElementById("page_five_card_two_hide")
var Yellow_color = document.getElementById("Yellow_color")
var White_color = document.getElementById("White_color")

const Show_card = () => {
    page_five_card_one_hide.style.display = "block"
    page_five_card_two_hide.style.display = "none"
    Yellow_color.style.backgroundColor = "#f9c935"
    White_color.style.backgroundColor = "white"

}

const hide_card = () => {
    page_five_card_one_hide.style.display = "none"
    page_five_card_two_hide.style.display = "block"
    Yellow_color.style.backgroundColor = "white"
    White_color.style.backgroundColor = "#f9c935"
};



var downlode = document.querySelector(".downlode");


const download_App = () => {
    downlode.classList.add("black_screen");
    document.querySelector("body").style.overflowY = "hidden";
}

const downlode_app_clode = () => {
    downlode.classList.remove("black_screen");
    document.querySelector("body").style.overflowY = "scroll";
};




var sing_up = document.getElementById("sing_up");

const Show_sing_up = () => {
    sing_up.classList.add("black_screen");
    sing_up.style.display = "block"
    document.querySelector("body").style.overflowY = "hidden";

}
const hide_sing_up = () => {
    sing_up.classList.remove("black_screen");
    sing_up.style.display = "none"
    document.querySelector("body").style.overflowY = "scroll";

};
