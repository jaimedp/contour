const jsdom = require('jsdom');
const d3 = require('d3');

const dom = new jsdom.JSDOM('<html><body></body></html>', { pretendToBeVisual: true });

global.document = dom.window.document;
global.window = dom.window;
global.VERSION = 'test';
global.d3 = d3;