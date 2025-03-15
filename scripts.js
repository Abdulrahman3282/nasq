document.addEventListener("DOMContentLoaded", function () {
    const langSwitch = document.getElementById("lang-switch");
    let currentLang = localStorage.getItem("lang") || "en"; // Default to English

    // Function to load translation
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
