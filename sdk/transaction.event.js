const axios = require("axios");
const catchAsync = require("../utils/catchAsync");

exports.RecentTransaction = (network, limit, offset, type) =>
  new Promise((resolve, reject) => {
    catchAsync(
      (async () => {
        const response = (
          await axios({
            method: "GET",
            url: `${network}/tx`,
            params: {
              limit,
              offset,
              type,
            },
          })
        ).data;
        resolve(response);
      })()
    );
  });
