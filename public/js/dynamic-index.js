const openSidebar = document.querySelector(".fa-grip-lines");
const openCartSidebar = document.querySelector(".fa-bag-shopping");
const sidebar = document.getElementById("account-sidebar");
const cartSidebar = document.getElementById("cart-sidebar");
const closeSidebar = document.querySelector(".fa-chevron-right");

openSidebar.addEventListener("click", () => {
  sidebar.style.left = "0%";
  sidebar.style.transition = "left 0.5s ease";
});

document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !openSidebar.contains(event.target)) {
    sidebar.style.left = "-100%";
    sidebar.style.transition = "left 0.8s ease";
  }
});

openCartSidebar.addEventListener("click", () => {
  cartSidebar.style.right = "0%";
  cartSidebar.style.transition = "right 0.5s ease";
});

document.addEventListener("click", (event) => {
  if (
    !cartSidebar.contains(event.target) &&
    !openCartSidebar.contains(event.target)
  ) {
    cartSidebar.style.right = "-100%";
    cartSidebar.style.transition = "right 0.8s ease";
  }
});

closeSidebar.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !openSidebar.contains(event.target)) {
    sidebar.style.left = "-100%";
    sidebar.style.transition = "left 0.8s ease";
  }
});

function toggleOptions(element) {
  const item = element.closest(".item");

  const options = item.querySelector(".item-options");
  if (options.classList.contains("active")) {
    options.classList.add("closing");
    options.classList.remove("active");
    setTimeout(() => {
      options.classList.remove("closing");
      options.style.display = "none";
    }, 300);
  } else {
    options.style.display = "flex";
    setTimeout(() => {
      options.classList.add("active");
    }, 10);
  }
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "flex";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  const modalContent = modal.querySelector(".modal-content");
  modal.classList.add("fade-out");
  modalContent.classList.add("slide-out");

  modal.style.display = "none";
  modal.classList.remove("fade-out");
  modalContent.classList.remove("slide-out");
}
