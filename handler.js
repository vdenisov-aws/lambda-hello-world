'use strict';

module.exports.hello = async event => {
  return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html;charset=UTF-8' },
      body: '<html><h1>Hello, Lambda</h1></html>',
  };
};
