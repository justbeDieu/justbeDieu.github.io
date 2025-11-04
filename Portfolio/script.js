lucide.createIcons();

function copyText() {
  const text = document.getElementById("phone-number").textContent;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      const icon = document.getElementById("copy-icon");
      icon.setAttribute("data-lucide", "check"); // change to 'check' icon
      lucide.createIcons(); // re-render icon

      // Optional: revert back after 2 seconds
      setTimeout(() => {
        icon.setAttribute("data-lucide", "copy");
        lucide.createIcons();
      }, 2000);
    }).catch(err => {
      console.error("Copy failed:", err);
    });
  } else {
    // Fallback for insecure context
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    console.log("Copied using fallback!");
    const icon = document.getElementById("copy-icon");
    icon.setAttribute("data-lucide", "check");
    lucide.createIcons();
    setTimeout(() => {
      icon.setAttribute("data-lucide", "copy");
      lucide.createIcons();
    }, 1000);
  }
}


const menuItems = document.querySelectorAll('nav ul li');
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('nav ul li.active')?.classList.remove('active');
    item.classList.add('active');
  });
});

document.querySelectorAll('.circle').forEach(circle => {
  const value = circle.getAttribute('data-value');
  circle.style.setProperty('--percent', value * 100);
});

const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  });