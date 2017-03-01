const changeName = () => {
  return {
    type: 'CHANGE_NAME',
  }
};

const hello = () => {
  return {
    type: 'SAY_HELLO',
  }
};

const goodbye = () => {
  return {
    type: 'SAY_GOODBYE',
  }
};

export { changeName, hello, goodbye };
