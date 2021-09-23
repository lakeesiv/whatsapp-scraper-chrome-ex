export const getElemetList = (): Element[] =>
  Array.from(
    document.getElementsByClassName("_2wUmf message-in focusable-list-item")
  );

export const getName = (el: Element): string | undefined => {
  try {
    return (
      el.getElementsByClassName("_1u3M2 _ccCW _3xSVM i0jNr")[0] as HTMLElement
    ).innerText;
  } catch (error) {
    return undefined;
  }
};

export const clickLatestText = (elemetList: Element[]) => {
  (elemetList[elemetList.length - 1] as HTMLElement).click();
};

export const getMetaData = (el: Element) => {
  try {
    return el
      .getElementsByClassName("copyable-text")[0]
      .getAttribute("data-pre-plain-text");
  } catch (error) {
    return undefined;
  }
};

export const getText = (el: Element): string | undefined => {
  try {
    return el
      .getElementsByClassName("i0jNr selectable-text copyable-text")[0]
      .querySelectorAll("span")[0].innerText;
  } catch (error) {
    return undefined;
  }
};

export const postData = async (
  text: string,
  name: string | undefined | null,
  metaData: string | undefined | null
) => {
  const res = await fetch("http://localhost:6969/", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      text: text,
      name: name ? name : null,
      metaData: metaData ? metaData : null,
    }),
  });

  return res;
};
