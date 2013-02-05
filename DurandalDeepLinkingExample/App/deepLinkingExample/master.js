define(
    ['durandal/plugins/router', 'durandal/system', 'durandal/composition'], 
    function(router, system, composition) {
    
        var App = {
            router: router,
            activate: function () {
                system.debug(true);

                // set router to auto map based off my convention
                router.mapAuto();
                // my convention
                router.autoConvertRouteToModuleId = function (url) {
                    return 'deepLinkingExample/areas/' + url + '/index';
                };

                // activate default page
                router.activate('home');
            }
        };

        return App;
});