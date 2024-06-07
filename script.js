function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const day = String(now.getDate()).padStart(2, '0');
  const month = now.toLocaleString('default', { month: 'long' });
  const year = now.getFullYear();
  const weekDay = now.toLocaleString('default', { weekday: 'long' });

  document.getElementById('time').innerText =
    `${hours} : ${minutes} : ${seconds}`;
  document.getElementById('date').innerText =
    `${weekDay} ${day} ${month} ${year}`;
}

setInterval(updateTime, 1000);
updateTime();
