const userMsg = (state = '', action) => {
  switch (action.payload) {
    case 'HELLO':
      return 'Hi, How can I help';
    case 'HI':
      return 'Hi, How can I help';
    case 'HOW ARE YOU DOING':
      return 'I AM GOOD, HOW CAN I HELP';
    case 'MAKE A RESERVATION':
      return 'Sure! Please Choose a date';
    default:
      return state;
  }
}

export default userMsg;