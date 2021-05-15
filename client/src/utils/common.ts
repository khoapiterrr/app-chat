export const getOffset = (el: any) => {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
};

export const isEmpty = (value: any): boolean => {
  if (value === null) {
    return true;
  } else if (typeof value !== 'number' && value === '') {
    return true;
  } else if (value === 'undefined' || value === undefined) {
    return true;
  } else if (
    value !== null &&
    typeof value === 'object' &&
    !Object.keys(value).length
  ) {
    return true;
  } else {
    return false;
  }
};

export const textAbstract = (text: string, length: number) => {
  if (text == null) {
    return '';
  }
  if (text.length <= length) {
    return text;
  }
  text = text.substring(0, length);
  let last = text.lastIndexOf(' ');
  text = text.substring(0, last);
  return text + '...';
};
