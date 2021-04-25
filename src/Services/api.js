import axios from 'axios';
const baseUrl = 'https://jsonplaceholder.typicode.com';

export const getTodos = (callback, start = 0, limit = 10) => {
    axios
      .get(`${baseUrl}/todos??_start=${start}&_limit=${limit}`)
      .then(({ data }) => {
        callback(data);
    })
      .catch(err => {
        console.error(err);
    });
};

export const getComments = callback => {
    axios
        .get(`${baseUrl}/posts/1/comments`)
        .then(({ data }) => {
            console.log('data', data);
            callback(data);
        })
        .catch(err => {
            console.error(err);
        });
};
const module = { getTodos, getComments };
export default module;