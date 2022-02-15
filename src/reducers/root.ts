import { combineReducers } from 'redux';
import rankings from './rankings';
import venues from './venues';
import events from './events';
import meetings from './meetings';
import athlete from './athlete';
import performances from './performances';

const root = combineReducers({ rankings, venues, events, meetings, athlete, performances });

export default root;
