const pathPrefix:string ='hackernews/news-details-feed';

const GET_NEWS_DETAILS = pathPrefix+'/GET_NEWS_DETAILS';
const SET_CURRENT_APP_STATUS = pathPrefix+'/SET_CURRENT_APP_STATUS';
const SET_CURRENT_PAGE_NUMBER = pathPrefix+'/SET_CURRENT_PAGE_NUMBER'

export default () =>{
    return {
        GET_NEWS_DETAILS,
        SET_CURRENT_APP_STATUS,
        SET_CURRENT_PAGE_NUMBER
    }
}