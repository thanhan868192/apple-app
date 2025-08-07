
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/apple-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-ENM6X63V.js"
    ],
    "route": "/apple-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5306, hash: '85701c1665c6534b861955d15b0dd78acd180c1290128fc0b761b482eb91b3d6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1121, hash: '9f2b68692e7f2e4f7a09b2c746dbd15147c9dc562e97d1f4ba352a88d58827b8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 104423, hash: '950ee8c3fd93c60c50c33e1b1229c438101918b24e5613e818338eadd0ddfa19', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IL54GTDF.css': {size: 244320, hash: 'uR3QR8teTzQ', text: () => import('./assets-chunks/styles-IL54GTDF_css.mjs').then(m => m.default)}
  },
};
