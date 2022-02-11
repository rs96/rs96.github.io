import axios from 'axios';

export const localAthletePage = 'http://localhost:5000/athlete/';

export const fetchAthleteData = async (id: number) => {
  try {
    const res = await axios({
      url: `${localAthletePage}${id}`,
      method: 'get',
      timeout: 8000,
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
