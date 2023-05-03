module.exports = ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL"),
  dirs: {
    public: "../../../public", // development code: "/data/public"
  },
});
