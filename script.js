const countdown = document.querySelector("#countdown");
const eventStart = new Date("2026-09-26T12:00:00+02:00");

const formatDuration = (milliseconds) => {
  const totalSeconds = Math.max(Math.ceil(milliseconds / 1000), 0);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (value) => String(value).padStart(2, "0");

  return `${days} d ${pad(hours)} h ${pad(minutes)} m ${pad(seconds)} s`;
};

const updateCountdown = () => {
  countdown.textContent = formatDuration(eventStart - new Date());
};

updateCountdown();
setInterval(updateCountdown, 1000);
