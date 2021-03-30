import axios from 'axios';
import md5 from 'md5';

const publicKey = 'c17fa196d4bcc592cd57c6d8078fceac';
const privateKey = '742549f6dab22284a82a5f8df6a9b3663e07f829';

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});

export default api;
