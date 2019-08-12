export const groupOfAllowed = /[^A-z\d\-]/g;

export const groupOfNotAllowed = /[áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ´´`<>{}.[\] ]/g;

export const urlPattern = new RegExp(
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
);
