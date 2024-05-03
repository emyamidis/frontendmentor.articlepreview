const shareButton = document.querySelector(".share--button");
const shareOption = document.querySelector(".share--option");
const iconLink = document.querySelectorAll(".icon--link")

shareButton.addEventListener("click", () => {

    shareOption.classList.toggle("active");
  
})

iconLink.forEach(n => n.addEventListener("click", () => {
    shareOption.classList.remove("active");
}))


