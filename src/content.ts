import {
  getElemetList,
  getMetaData,
  getName,
  getText,
  postData,
} from "./utils";

let extraTextList: string[] = [];

const main = () => {
  const elementsArr = getElemetList();
  const latest10Elemets = elementsArr.slice(
    Math.max(elementsArr.length - 10, 0)
  );

  latest10Elemets.forEach(async (element) => {
    const text = getText(element as Element);
    const name = getName(element as Element);
    const meta = getMetaData(element as Element);

    // const extraText =
    //   name && meta
    //     ? `${name}: ${meta}\n${"-".repeat(1 + name.length + meta.length)}`
    //     : "";
    const identifer = `${meta}${text}`;
    if (text && !extraTextList.includes(identifer)) {
      extraTextList.push(identifer);
      //   console.log(
      //     `
      // ${extraText}
      // ${text}
      //   `
      //   );
      console.log(extraTextList);
      try {
        const res = await postData(text, name, meta);
      } catch (error) {}
    }
  });
};

if (window.location.href === "https://web.whatsapp.com/") {
  setInterval(main, 2000);
}
