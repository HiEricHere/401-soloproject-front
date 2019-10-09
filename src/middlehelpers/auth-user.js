import jwt from 'jsonwebtoken';

const secret = process.env.REACT_APP_SECRET.toLowerCase();

const auth = (currentUserID) => {
  if (!localStorage.getItem('funPass')) return false;
  const tokenID = jwt.verify(localStorage.getItem('funPass'), secret).id;
  return currentUserID && tokenID ? currentUserID === tokenID : false;
};

export default auth;
