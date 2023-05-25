// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

checker = [];

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("navbar").style.paddingTop = "15";
    document.getElementById("navbar").style.paddingBottom = "15px";

    document.getElementById("navbar").style.backgroundColor = "#ffffff";

    document.getElementById("logo").style.color = "rgb(42,42,42)";

    document.getElementById("faq").style.color = "rgb(42,42,42)";


  } else {

    document.getElementById("navbar").style.paddingTop = "15";
    document.getElementById("navbar").style.paddingBottom = "15px";

    document.getElementById("navbar").style.backgroundColor = "rgb(42,42,42)";

    document.getElementById("logo").style.color = "#ffffff";

    document.getElementById("faq").style.color = "#ffffff";

    const modalBgAgain = document.getElementsByClassName("modal-background-again")[0];
    const modalBoxAgain = document.getElementsByClassName("modal-box-again")[0];

    modalBgAgain.classList.remove("active")
    modalBoxAgain.classList.remove("active")


  }
}


// set time for display card 
setTimeout(showcard, 3500);

function showcard() {

  const modalBgAgain = document.getElementsByClassName("modal-background-again")[0];
  const modalBoxAgain = document.getElementsByClassName("modal-box-again")[0];

  modalBgAgain.classList.add("active");
  modalBoxAgain.classList.add("active");

}

// download button
document.querySelector('.download').addEventListener('click', () => {

  window.location.href = "brix.apk";

})


const modalBg = document.getElementsByTagName("div")[0];
const modalBox = document.getElementsByTagName("div")[1];
let box_btn = document.querySelector('.js-open');
// loop through all the boxes and select the learn more button for modal
box_btn.addEventListener('click', function(event) {

  event.preventDefault()
  modalBg.classList.add("active")
  modalBox.classList.add("active")


})

const closeBtns = document.querySelectorAll(".js-close");
// close the modal
closeBtns.forEach(node => {
    node.addEventListener('click', function(e) {
        e.preventDefault()
        modalBg.classList.remove("active")
        modalBox.classList.remove("active")
    })
})

modalBg.addEventListener('click', () => {
  modalBg.classList.remove("active")
  modalBox.classList.remove("active")
})



const modalBgAgain = document.getElementsByClassName("modal-background-again")[0];
const modalBoxAgain = document.getElementsByClassName("modal-box-again")[0];
const closeBtnsCard = document.querySelectorAll(".js-close-again");
// close the card
closeBtnsCard.forEach(node => {
    node.addEventListener('click', function(e) {
        e.preventDefault()
        modalBgAgain.classList.remove("active")
        modalBoxAgain.classList.remove("active")
    })
})


modalBgAgain.addEventListener('click', () => {
  modalBgAgain.classList.remove("active")
  modalBoxAgain.classList.remove("active")
})





// rgba(13, 17, 161, 255)

// rgba(136, 174, 79, 255)

// rgba(0, 77, 64, 255)
