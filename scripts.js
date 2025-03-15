document.addEventListener("DOMContentLoaded", function () {
    const langSwitch = document.getElementById("lang-switch");
    const brochureLink = document.getElementById("brochure-link");
    let currentLang = localStorage.getItem("lang") || "en"; // Default to English

    function loadTranslations(lang) {
        fetch("translation.json")
            .then(response => response.json())
            .then(data => {
                document.querySelectorAll("[data-key]").forEach(el => {
                    const key = el.getAttribute("data-key");
                    el.textContent = data[lang][key];
                });
                document.documentElement.lang = lang;
                document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
                langSwitch.textContent = lang === "ar" ? "English" : "العربية";

                // Change the brochure link based on language
                brochureLink.href = lang === "ar" ? "NASQ Brochure Ar.pdf" : "NASQ Brochure En.pdf";
            })
            .catch(error => console.error("Translation file error:", error));
    }

    // Load translations on page load
    loadTranslations(currentLang);

    // Language switch event
    langSwitch.addEventListener("click", function () {
        currentLang = currentLang === "en" ? "ar" : "en";
        localStorage.setItem("lang", currentLang);
        loadTranslations(currentLang);
    });
});
