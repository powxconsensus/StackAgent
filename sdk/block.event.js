const axios = require("axios");
const catchAsync = require("./../utils/catchAsync");

exports.BlockByHeight = catchAsync(async (network, height) => {
  const response = (
    await axios({
      method: "GET",
      url: `${network}/block/by_height/${height}`,
    })
  ).data;
  return response;
});

exports.BlockByHash = catchAsync(async (network, hash) => {
  const response = (
    await axios({
      method: "GET",
      url: `${network}/block/${hash}`,
    })
  ).data;
  return response;
});

exports.RecentBlock = catchAsync(async (network, limit, offset) => {
  const response = (
    await axios({
      method: "GET",
      url: `${network}/block`,
      params: {
        limit,
        offset,
      },
    })
  ).data;
  return response;
});
