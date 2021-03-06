export const waitForCondition = (condition: () => boolean, options = { checkTimeoutMilliseconds: 10, maxTimeWaitedMilliseconds: 1000 }): Promise<void> => {
  const startTime = new Date().getTime();
  return new Promise((resolve, reject) => {
    setTimeout(function check() {
      if (condition()) {
        resolve();
      } else {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - startTime;
        if (elapsedTime > options.maxTimeWaitedMilliseconds) {
          reject(`Timeout waiting for condition ${condition.toString()}`);
        } else {
          setTimeout(check, options.checkTimeoutMilliseconds)
        }
      }
    }, options.checkTimeoutMilliseconds);
  });
}

export const waitForSomeTime = (timeoutMilliseconds: number = 100) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timeoutMilliseconds);
  });
}