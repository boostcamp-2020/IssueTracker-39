const calcBeforeTime = (logTime) => {
  const now = new Date();
  const logDate = Date.parse(logTime);
  const timeDiff = (now.getTime() - logDate) / 1000 / 60;
  if (timeDiff < 1) return 'Just Before';
  if (timeDiff < 60) {
    return `${Math.floor(timeDiff)} minutes ago`;
  }

  if (timeDiff / 60 < 24) {
    return `${Math.floor(timeDiff / 60)} hours ago`;
  }

  if (timeDiff / 60 / 24 < 365) {
    return `${Math.floor(timeDiff / 60 / 24)} days ago`;
  }
  return `${Math.floor(timeDiff / 365)} years ago`;
};
export {calcBeforeTime};
