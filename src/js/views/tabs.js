/**
 *
 * Function tabs. Init tabs
 * 
 */

export function tabs() {
  document.querySelectorAll(".tabs").forEach((tab) => {
  const tabHeading = tab.querySelectorAll(".tabs__heading");
  const tabContent = tab.querySelectorAll(".tabs__content");
  let tabName;

  tabHeading.forEach((element) => {
    element.addEventListener("click", () => {
      tabHeading.forEach((item) => {
        item.classList.remove("is-active");
      });

      element.classList.add("is-active");
      tabName = element.getAttribute("data-tab-index");

      tabContent.forEach((item) => {
        item.classList.contains(tabName)
          ? item.classList.add("is-active")
          : item.classList.remove("is-active");

      });
    });
  });
});
}
