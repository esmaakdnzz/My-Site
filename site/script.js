// DOMContentLoaded: Sayfa tamamen yüklendiğinde çalışır
document.addEventListener("DOMContentLoaded", () => {
    // Yumuşak Kaydırma
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Varsayılan bağlantı davranışını engeller
            const targetId = link.getAttribute("href").substring(1); // Bağlantı hedefini alır
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth", // Yumuşak kaydırma
                    block: "start"
                });
            }
        });
    });

    // Karanlık Mod
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "🌙 Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px";
    toggleButton.style.cursor = "pointer";

    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            toggleButton.textContent = "☀️ Light Mode";
        } else {
            toggleButton.textContent = "🌙 Dark Mode";
        }
    });

    // İletişim Formu Doğrulaması
    const contactForm = document.querySelector("form");

    contactForm.addEventListener("submit", event => {
        event.preventDefault(); // Formun gönderilmesini engeller
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name && email && message) {
            alert("Mesajınız başarıyla gönderildi! Teşekkür ederiz.");
            contactForm.reset(); // Formu sıfırlar
        } else {
            alert("Lütfen tüm alanları doldurun!");
        }
    });
});
