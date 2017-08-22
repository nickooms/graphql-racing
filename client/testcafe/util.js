const IP = 'localhost';
const PORT = 3000;
const URL = `http://${IP}:${PORT}`;

export const url = path => path ? `${URL}/${path}` : URL;

export const timestamp = () => {
  const date = new Date();
  const time = date.getTime();
  const offset = date.getTimezoneOffset() * 60 * 1000;
  const [year, month, day, hour, minute, second] = new Date(time - offset)
    .toISOString()
    .split(/-|T|:|\.|Z/g);
  return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
};
