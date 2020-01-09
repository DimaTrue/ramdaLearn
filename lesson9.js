const R = require("ramda");

// const getVideoFilepath = video => (video.isHD ? video["720p"] : video["480p"]);

// const getVideoFilepath = video => {
//   const file = video.isHD ? video["720p"] : video["480p"];

//   return `/api/videos${file}`;
// };

const getVideoFilepath = R.compose(
  R.concat("/api/videos/"),
  R.ifElse(R.propEq("isHD", true), R.prop("720p"), R.prop("480p"))
);

const video = {
  "720p": "funny-video-hd.mp4",
  "480p": "funny-video-480p.mp4",
  isHD: true
};

console.log(getVideoFilepath(video));
