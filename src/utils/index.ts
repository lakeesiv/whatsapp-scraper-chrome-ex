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
