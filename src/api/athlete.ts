import axios from 'axios';
import { AthleteData } from '../types';

export const localAthletePage = 'http://localhost:5000/athlete/';

export const fetchAthleteData = async (id: number): Promise<AthleteData> => {
  try {
    const res = await axios({
      url: `${localAthletePage}${id}`,
      method: 'get',
      timeout: 8000,
      headers: { 'Access-Control-Allow-Origin': '*' },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};
