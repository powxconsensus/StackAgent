module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) =>
      console.log({
        code: err.code,
        status: err.response.status,
        statusText: err.response.statusText,
      })
    );
  };
};
