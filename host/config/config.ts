import {resolve} from 'path';

require('dotenv').config({path: resolve(__dirname,'.env')});

export const PORT = process.env.PORT || 9000;
export const API_BASEREF = process.env.API_BASEREF || '';