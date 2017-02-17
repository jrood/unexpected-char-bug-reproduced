This repo is meant to demonstrate a bug being discussed here
https://github.com/webpack-contrib/css-loader/issues/355
where the issue seems to be that '@' is an unexpected character.

Be sure to do an 'npm install' first.
Then do 'npm run reproduce', and you should get an error that says something like this:

ERROR in ./src/styles.css
Module parse failed: .../webpack-unexpected-char-bug-reproduced/src/styles.css Unexpected character '@' (1:0)
You may need an appropriate loader to handle this file type.
| @charset "UTF-8";
 @ ./src/app.ts 2:0-23

 npm ERR! ...
 ...