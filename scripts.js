document.addEventListener("DOMContentLoaded", function () {
    const langSwitch = document.getElementById("lang-switch");
    const htmlTag = document.documentElement;

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
});
