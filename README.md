# Rocket Mill -- A/B Testing

For help with the submodule git workflow, refer to [this](https://github.com/EchoLogyx/echo-ab-common/wiki) documentation

<br>
<br>
<br>

# Initial Configuration

# Using the CLI


```
npm run cli
```
Jump to client
```
npm run cli -- -c
npm run cli -- --client
```
Jump to test
```
npm run cli -- -t
npm run cli -- --test
```
Jump to variation
```
npm run cli -- -v
npm run cli -- --variation
```
Do an audit (Makes sure everything is working correctly)
```
npm run cli -- -a
npm run cli -- --audit
```
Build code for the current variation
```
npm run cli -- -b
npm run cli -- --build
```
Check the current active test
```
npm run cli -- -p
npm run cli -- --pointer
```


<br>
<br>
<br>

# To start hot-reloading

-   Install TamperMonkey or TamperSource
    -   Links
        -   [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
        -   [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- Use this snippet
        
```
// ==UserScript==
// @name         Shortcut tamper
// @noframes
// @namespace    http://tampermonkey.net/
// @version      1
// noframes
// @description  Hot reloading for scripts
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    const TAMPER_URI = 'http://localhost:4000/tamper';

    const scriptTag = document.createElement('script');
    scriptTag.setAttribute('src', TAMPER_URI);
    document.body.appendChild(scriptTag);
})();
```
        
In the terminal

```
npm start
```
