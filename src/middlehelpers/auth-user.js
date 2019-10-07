import jwt from 'jsonwebtoken';

let secret = process.env.REACT_APP_SECRET.toLowerCase();

const auth = (currentUserID) => {
  if (!localStorage.getItem('funPass')) return false;
  const tokenID = localStorage.getItem('funPass') ? jwt.verify(localStorage.getItem('funPass'), secret).id : false;
  return currentUserID && tokenID ? currentUserID === tokenID : false;
};

export default auth;
