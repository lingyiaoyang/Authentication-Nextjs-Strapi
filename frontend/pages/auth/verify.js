const verifyToken = () => {
  const accessToken = localStorage.getItem('jwt');
  const decoded = jwt_decode(accessToken);

  const decodedHeader = jwt_decode(accessToken, { header: true });
};

export default verifyToken;
