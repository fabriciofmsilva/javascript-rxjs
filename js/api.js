const api = 'http://localhost:3000';

const fetchHandler = res => {
  if (!res.ok) throw Error(res.statusText);
  return res.json();
};

const getNegotiationsFromWeek  = () =>
  fetch(`${api}/negociacoes/semana`)
    .then(fetchHandler)
    .catch(err => {
      console.log(err);   
      return Promise.reject('getNegotiationsFromWeek: failure!');
    });

const getNegotiationsFromPreviousWeek = () =>
  fetch(`${api}/negociacoes/anterior`)
    .then(fetchHandler)
    .catch(err => {
      console.log(err);
      return Promise.reject('getNegotiationsFromPreviousWeek: failure!');
    });

export const getNegotiations = () => 
  Promise
    .all([getNegotiationsFromWeek(), getNegotiationsFromPreviousWeek()])
    .then(data => 
      data.reduce((negotiations, array) => 
        negotiations.concat(array), []))
