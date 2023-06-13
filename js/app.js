window.addEventListener("load", function () {
  const boxMenu = document.getElementById("menu");
  const MenuDesplegable = document.getElementById("MenuDesplegable");
  const ShowInput = document.getElementById("ShowInput");
  const ObtCopy = document.getElementById("ObtCopy");

  boxMenu.addEventListener("click", handleBoxMenuClick);
  window.addEventListener("scroll", handleWindowScroll);
  ShowInput.addEventListener("click", handleShowInputClick);

  function handleBoxMenuClick() {
    if (MenuDesplegable.style.top == "-300px") {
      MenuDesplegable.style.top = "8%";
    } else {
      MenuDesplegable.style.top = "-300px";
    }
  }

  function handleWindowScroll() {
    MenuDesplegable.style.top = "-300px";
  }

  function handleShowInputClick() {
    ObtCopy.style.display = "flex";
  }
});
