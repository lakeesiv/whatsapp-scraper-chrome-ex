import { getElemetList, getMetaData, getName, getText } from "./utils";

const main = () => {
  const elements = getElemetList();

  Array.from(elements).forEach((element) => {
    const text = getText(element as HTMLElement);
    const name = getName(element as HTMLElement);
    const meta = getMetaData(element as HTMLElement);

    const extraText =
      name && meta
        ? `${name}: ${meta}\n${"-".repeat(1 + name.length + meta.length)}`
        : "";
    if (text)
      console.log(
        `
    ${extraText}
    ${text}
      `
      );
  });
};

if ((window.location.href = "https://web.whatsapp.com/")) {
  setInterval(main, 2000);
}
