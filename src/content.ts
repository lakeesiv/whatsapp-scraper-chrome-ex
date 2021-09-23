import { getElemetList, getMetaData, getName, getText } from "./utils";

let extraTextList: string[] = [];

const main = () => {
  const elements = getElemetList();

  elements.forEach(async (element) => {
    const text = getText(element as Element);
    const name = getName(element as Element);
    const meta = getMetaData(element as Element);

    const extraText =
      name && meta
        ? `${name}: ${meta}\n${"-".repeat(1 + name.length + meta.length)}`
        : "";
    if (text && !extraTextList.includes(extraText)) {
      console.log(
        `
    ${extraText}
    ${text}
      `
      );
      try {
        const res = await fetch(
          "http://localhost:5000/a/" +
            `
        ${extraText}
        ${text}
          `
        );
      } catch (error) {}
      extraTextList.push(extraText);
    }
  });
};

if (window.location.href === "https://web.whatsapp.com/") {
  setInterval(main, 2000);
}
