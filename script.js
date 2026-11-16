import i18next from "i18next";
import enTranslation from "./locales/en.json";
import deTranslation from "./locales/de.json";
import ruTranslation from "./locales/ru.json";
import viTranslation from "./locales/vi.json";

i18next
  .init({
    lng: "de",
    fallbackLng: "de",
    resources: {
      en: {
        translation: enTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
      de: {
        translation: deTranslation,
      },
      vi: {
        translation: viTranslation,
      },
    },
  })
  .then(updateContent)
  .then(updateDate);

function updateContent() {
  document.getElementById("languageLabel").textContent = i18next.t("language");

  document.getElementById("Q1").textContent = i18next.t("Q1");
  document.getElementById("Q2").textContent = i18next.t("Q2");
  document.getElementById("Q3").textContent = i18next.t("Q3");
  document.getElementById("Q4").textContent = i18next.t("Q4");
  document.getElementById("Q5").textContent = i18next.t("Q5");

  document.getElementById("Q1.A").textContent = i18next.t("Q1.A");
  document.getElementById("Q1.B").textContent = i18next.t("Q1.B");
  document.getElementById("Q1.C").textContent = i18next.t("Q1.C");

  document.getElementById("Q2.A").textContent = i18next.t("Q2.A");
  document.getElementById("Q2.B").textContent = i18next.t("Q2.B");
  document.getElementById("Q2.C").textContent = i18next.t("Q2.C");

  document.getElementById("Q3.A").textContent = i18next.t("Q3.A");
  document.getElementById("Q3.B").textContent = i18next.t("Q3.B");
  document.getElementById("Q3.C").textContent = i18next.t("Q3.C");

  document.getElementById("Q4.A").textContent = i18next.t("Q4.A");
  document.getElementById("Q4.B").textContent = i18next.t("Q4.B");
  document.getElementById("Q4.C").textContent = i18next.t("Q4.C");

  document.getElementById("Q5.A").textContent = i18next.t("Q5.A");
  document.getElementById("Q5.B").textContent = i18next.t("Q5.B");
  document.getElementById("Q5.C").textContent = i18next.t("Q5.C");

  document.getElementById("btn-submit").textContent = i18next.t("submit");
}

document.getElementById("language").addEventListener("change", (event) => {
  const selectedlanguage = event.target.value;

  i18next.changeLanguage(selectedlanguage).then(updateContent).then(updateDate);
});

function updateDate() {
  const locales = {
    de: "de-DE",
    en: "en-US",
    ru: "ru-RU",
    vi: "vi-VN",
  };

  const locale = locales[i18next.language] || "de-De";

  const date = new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date());

  document.getElementById("currentDate").textContent = date;
}

const correctAnswers = {
  Q1: "A2",
  Q2: "A1",
  Q3: "A2",
  Q4: "A1",
  Q5: "A3",
};

console.log("Hello");
