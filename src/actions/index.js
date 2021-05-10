export const english = () => {
  return{
    type: 'ENGLISH'
  };
};

export const spanish = () => {
  return{
    type: 'SPANISH',
  };
};

export const userMsg = (msg) => {
  return{
    type: 'USERMSG',
    payload: msg
  };
};

