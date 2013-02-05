
require.config({
    paths: {
        'text': 'durandal/amd/text'
    }
});

define(['durandal/app'], function (app) {
    app.start().then(function () {
        app.adaptToDevice();
        app.setRoot('deepLinkingExample/master');
    });
});