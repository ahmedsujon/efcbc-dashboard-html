
//Add Class
function displayItem(addID, addClass, ovlerlayID) {
  let addDiv = document.querySelector(`#${addID}`);
  let ovlerlayDiv = document.querySelector(`#${ovlerlayID}`);
  addDiv.classList.toggle(addClass);
  ovlerlayDiv.style.cssText = "  display: block;";
}
//Remove Class
function removeDisplayItem(removeID, removeClass, ovlerlayID) {
  let addDiv = document.querySelector(`#${removeID}`);
  let ovlerlayDiv = document.querySelector(`#${ovlerlayID}`);
  addDiv.classList.toggle(removeClass);
  ovlerlayDiv.style.cssText = "  display: none;";
}

//OutSide Scroll Hidden
function scrollOutsideHidden() {
  let htmlTag = document.querySelector("html");
  htmlTag.style.cssText = "overflow:hidden;";
}
//OutSide Scroll Scroll
function scrollOutsideScroll() {
  let htmlTag = document.querySelector("html");
  htmlTag.style.cssText = "overflow:auto;";
}


function stickyHeader(stickyTag, stickyClass, scrollHeight = 0) {
  let stickyWrapper = document.querySelector(`#${stickyTag}`);
  stickyWrapper.classList.toggle(stickyClass, scrollY > scrollHeight);
}
let headerWrapper = document.querySelector("#headerWrapper");
if (headerWrapper) {
  window.addEventListener("scroll", () => {
    stickyHeader("headerWrapper", "navbar_fixed");
  });
}

//Flag Select
let countryFlagImageEl = document.querySelector("#countryFlagImage");
let countryFlagListEl = document.querySelectorAll("#countryFlagList li button");
console.log(countryFlagListEl, "countryFlagListEl");

// countryFlagListEl.forEach((item) => {
//   item.addEventListener("click",(data)=>{
//     let getImage = document.querySelector(`${data.target.parentElement.localName}`);
//     // let storeImageSrc = getImage.src;
//     // countryFlagImageEl.src=storeImageSrc;
//     console.log(getImage,'data',data,data.target.parentElement.localName,data.target.localName);

//   })

// })

//Sidebar Responsive
let menuToggleBtnEl = document.querySelector("#menuToggleBtn");
let sidebarOverlayEl = document.querySelector("#sidebarOverlay");
if (menuToggleBtnEl) {
  menuToggleBtnEl.addEventListener("click", () => {
    if (window.innerWidth <= 991) {
      document.querySelector("body").classList.add("sidebar_toggle");
      sidebarOverlayEl.style.cssText = "display:block;";
      scrollOutsideHidden();
    } else {
      document.querySelector("body").classList.toggle("sidebar_toggle");
    }
  });
}
if(sidebarOverlayEl){
  sidebarOverlayEl.addEventListener('click',()=>{
    document.querySelector("body").classList.remove("sidebar_toggle");
    sidebarOverlayEl.style.cssText = "display:none;";
    scrollOutsideScroll()
 })
}


//Tab 
function customTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active_tab", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active_tab";
}

// Get the element with id="defaultOpen" and click on it
let defaultOpenTabEl = document.querySelector('#defaultOpenTab');

if(defaultOpenTabEl){
  document.getElementById("defaultOpenTab").click();
}


