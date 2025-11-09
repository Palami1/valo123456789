const header = document.querySelector("header");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

// Sticky Header เมื่อเลื่อนลงเกิน 60px
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 60);
});


// Toggle เมนูแฮมเบอร์เกอร์
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");  // สลับไอคอน (ตรวจสอบการใช้งาน Boxicons)
  navbar.classList.toggle("open");
});

// Toggle Dropdown
function toggleDropdown() {
  const dropdown = document.getElementById("dropdownMenu");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// เปลี่ยนภาษาที่เลือก
function selectLanguage(language) {
  document.querySelector(".dropdown-btn").innerHTML =" ▼";
  document.getElementById("dropdownMenu").style.display = "none";
  document.querySelectorAll(".dropdown-content a").forEach(a => {
    a.classList.remove("selected");
    if(a.textContent.trim() === language) a.classList.add("selected");
  });
}

// ปิด dropdown เมื่อคลิกข้างนอก
window.onclick = event => {
  if (!event.target.matches('.dropdown-btn')) {
    document.getElementById("dropdownMenu").style.display = "none";
  }
};
