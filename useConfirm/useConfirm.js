const useConfirm = (message = null, callback, rejection) => {
  if (typeof callback !== 'function') {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      return callback();
    } else {
      return rejection();
    }
  };
  return confirmAction;
};
