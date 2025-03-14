window.onload = function () {
    const langSwitch = document.getElementById("lang-switch");
    const htmlTag = document.documentElement;

    if (!langSwitch) {
        console.error("Language switch button not found!");
        return;
    }

    langSwitch.addEventListener("click", function () {
        if (htmlTag.lang === "en") {
            htmlTag.lang = "ar";
            htmlTag.dir = "rtl";
            langSwitch.textContent = "English";
        } else {
            htmlTag.lang = "en";
            htmlTag.dir = "ltr";
            langSwitch.textContent = "العربية";
        }
    });
};
