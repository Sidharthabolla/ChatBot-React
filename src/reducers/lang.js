const lang = (state = 'en', action) => {
  switch (action.type) {
    case 'ENGLISH':
      return 'en';
    case 'SPANISH':
      return 'es';
    default:
      return state;
  }
}

export default lang;