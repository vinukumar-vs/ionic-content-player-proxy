var PROXY_CONFIG = [
  {
      context: [
          "/content-plugins"
      ],
      "target": "https://staging.sunbirded.org/",
      "secure": false,
      "logLevel": "debug",
      "changeOrigin": true
  }
]

module.exports = PROXY_CONFIG;
