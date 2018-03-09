const SERVER = 'http://localhost:3000/api';
import axios from 'axios';

export async function fetchRedisUsers() {
  let results = await fetch(SERVER);
  results = await results.json();
  console.log("results before return ", results)
  return results;
}
