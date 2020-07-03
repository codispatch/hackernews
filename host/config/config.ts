import {resolve} from 'path';

require('dotenv').config({path: resolve(__dirname,'.env')});

export const PORT = process.env.PORT || 9001;
export const CLIENT_API_BASEREF = process.env.CLIENT_API_BASEREF || '/hackernews/api'

export const API_BASEREF = process.env.API_BASEREF || 'http://hn.algolia.com/api/v1';
export const API_RELATIVE_PATH = process.env.API_RELATIVE_PATH || '/search';