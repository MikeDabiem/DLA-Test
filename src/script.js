document.addEventListener("DOMContentLoaded",function(){new fullpage("#page",{scrollOverflow:!0,fitToSection:!1,responsiveWidth:481,onLeave:function(e,t,s,o){"down"===s&&t.item.classList.contains("second-block")?document.querySelector(".snowflake").classList.add("move"):"up"===s&&t.item.classList.contains("first-block")&&document.querySelector(".snowflake").classList.remove("move")}});let t=document.querySelector(".burger-button"),s=document.querySelector(".burger-menu"),e=document.querySelector(".burger-menu__items");{function o(){var e=t.getBoundingClientRect();s.style.transition="none",s.style.right=document.body.clientWidth-e.right+"px",s.style.transition=""}function i(){e.style.opacity="0",setTimeout(()=>{e.style.display="none",t.classList.remove("active"),s.classList.remove("active"),o()},200)}t&&(o(),s.classList.remove("hide"),window.addEventListener("resize",()=>{i(),o()}),t.addEventListener("click",()=>{t.classList.contains("active")?i():(t.classList.add("active"),s.classList.add("active"),s.style.right="0",e.style.display="block",setTimeout(()=>{e.style.opacity="1"},400))}))}let n=document.querySelector(".santa__cloud");n&&setTimeout(()=>{n.style.opacity="1"},3e3);var r=document.querySelector(".first-block__arrow"),r=(r&&r.addEventListener("click",function(){fullpage_api.moveTo(2)}),document.querySelectorAll(".present__item"));if(r){let t=document.querySelector(".second-block__info"),s=document.querySelector(".info__title"),o=document.querySelector(".info__text"),i=document.querySelector(".info__image > img");r.forEach(e=>{e.addEventListener("click",function(){this.classList.contains("active")||(document.querySelectorAll(".present__item.active").forEach(e=>e.classList.remove("active")),this.classList.add("active"),t.style.opacity="0",setTimeout(()=>{s.innerHTML=this.dataset.title,o.innerHTML=this.dataset.text,i.src=this.querySelector("img").src,t.style.opacity="1"},400))})})}let c=document.querySelector(".gender-select"),a=document.querySelector(".gender-select__drop"),l=document.querySelectorAll(".gender-select__option");{function d(e,t=400){var s=e.offsetHeight;e.style.transition=`all ${t}ms ease-in-out`,e.style.height=s+"px",e.style.overflow="hidden",setTimeout(()=>{e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0"},10),setTimeout(()=>{e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition")},t)}function u(e,t=400){e.style.removeProperty("display");let s=window.getComputedStyle(e).display,o=("none"===s&&(s="block"),e.style.display=s,e.offsetHeight);e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",setTimeout(()=>{e.style.transition=`all ${t}ms ease-in-out`,e.style.height=o+"px",e.style.paddingTop="",e.style.paddingBottom=""},10),setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition")},t)}function y(e){document.getElementById("gender").value=e.dataset.value,document.querySelector(".gender-select__trigger > p").innerHTML=e.dataset.value;var t=document.querySelector(".gender-select__option.active");t&&t.classList.remove("active"),e.classList.add("active")}c&&(c.addEventListener("click",function(e){var t=e.target.closest(".gender-select__trigger"),e=e.target.closest(".gender-select__option");(t||e)&&(this.classList.toggle("active"),(this.classList.contains("active")?u:d)(a)),e&&y(e)}),c.addEventListener("keydown",function(e){this.querySelector(".gender-select__trigger");var t,s=this.classList.contains("active");let o=Array.from(l).indexOf(document.querySelector(".gender-select__option.active"));switch(e.key){case"ArrowDown":e.preventDefault(),s?o<l.length-1&&(o++,l[o].focus(),y(l[o])):(this.classList.add("active"),u(a));break;case"ArrowUp":e.preventDefault(),0<o&&(o--,l[o].focus(),y(l[o]));break;case"Enter":case" ":e.preventDefault(),s?(t=document.querySelector(".gender-select__option:focus"))&&(y(t),this.classList.remove("active"),d(a)):(this.classList.add("active"),u(a));break;case"Escape":s&&(this.classList.remove("active"),d(a))}}),l.forEach(e=>{e.addEventListener("keydown",function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),y(this),c.classList.remove("active"),d(a))})}))}r=document.getElementById("phone");r&&r.addEventListener("input",e=>{e.target.value=e.target.value.replace(/[^0-9+\-()]/g,"")}),document.addEventListener("click",function(e){c&&!c.contains(e.target)&&c.classList.contains("active")&&(c.classList.remove("active"),d(a)),t&&!t.contains(e.target)&&!document.querySelector(".burger-menu").contains(e.target)&&t.classList.contains("active")&&i()})});