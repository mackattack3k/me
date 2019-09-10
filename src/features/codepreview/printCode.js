export default ({
  codeToType,
  typingDelay,
  onTypingDone,
  onDone,
  onDoneDelay,
  dispatch
}) => {
  const timers = [];
  const printNextLetter = (currentLetterPos, nextPos) => {
    const nextLetter = codeToType.slice(currentLetterPos, nextPos);
    timers.push(
      setTimeout(() => {
        dispatch({
          type: 'addLetter',
          letter: nextLetter
        });
      }, typingDelay * nextPos)
    );
  };
  for (let i = 0; i < codeToType.length; i += 1) {
    printNextLetter(i, i + 1);
  }
  const finalLogDelay = codeToType.length * typingDelay;
  timers.push(
    setTimeout(() => {
      onTypingDone();
      setTimeout(() => {
        onDone();
      }, onDoneDelay);
    }, finalLogDelay)
  );
  return () => {
    if (!timers) {
      return;
    }
    timers.forEach(timer => clearTimeout(timer));
  };
};
