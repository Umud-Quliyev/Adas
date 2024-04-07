document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll(".naccs .menu div");

  menuItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      if (!this.classList.contains("active")) {
        document
          .querySelectorAll(".naccs .menu div")
          .forEach(function (menuItem) {
            menuItem.classList.remove("active");
          });
        document.querySelectorAll(".naccs ul li").forEach(function (listItem) {
          listItem.classList.remove("active");
        });

        this.classList.add("active");
        document
          .querySelectorAll(".naccs ul li")
          [index].classList.add("active");

        var listItemHeight =
          document.querySelectorAll(".naccs ul li")[index].offsetHeight;
        document.querySelector(".naccs ul").style.height =
          listItemHeight + "px";
      }
    });
  });
});
