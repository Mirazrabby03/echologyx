import './styles/index.scss';
/* DO NOT IMPORT ANYTHING */
var echoVariation = {
    init: function() {
        this.mainCss();
        this.mainJs();
        this.goals();
    },
    mainCss: function() {
        var styles = document.createElement('style');
        styles.setAttribute('type', 'text/css');
        document.head.appendChild(styles).textContent =
            '' +
            /* CSS will be imported here */
            '';
    },
    mainJs: function() {
        document.querySelector("body > main > section.all-about > div.wrap-all-about > div > div.wrap-seats > h1").textContent = "Hello";
    },
    goals: function() {}
};
(function pollOnload() {
    if (document.querySelector("body")) {
        try {
            echoVariation.init();
            console.log(`This is a EchoLogyx variation -- running on ${new Date().toLocaleDateString()}`);
        } catch (error) {
            console.log('Initialization error:', error);
        }
    } else {
        setTimeout(pollOnload, 25);
    }
})();
console.log('First test')
