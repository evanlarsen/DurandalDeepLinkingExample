define(
    ['durandal/system', 'durandal/viewModel', 'durandal/plugins/router'],
    function (system, viewModel, router) {
        var defaultPage = 'aboutUs';

        function convertNameToModuleId(name) {
            return 'deepLinkingExample/areas/about/' + name + '/' + name;
        }

        var App = {
            inAbout: viewModel.activator(),
            activate: function (activationData) {
                if (activationData.splat && activationData.splat[0] != 'about') {
                    App.inAbout(convertNameToModuleId(activationData.splat[0]));
                } else {
                    App.inAbout(convertNameToModuleId(defaultPage));
                }
                router.activeItem.settings.areSameItem = App.compareModules;
            },
            compareModules: function (currentItem, newItem, activationData) {
                if (currentItem == newItem) {
                    if (activationData && activationData.splat && activationData.splat[0] != 'about') {
                        App.inAbout(convertNameToModuleId(activationData.splat[0]));
                    } else {
                        App.inAbout(convertNameToModuleId(defaultPage));
                    }
                }
                return (currentItem == newItem);
            },
            showPage: function (name) {
                return function () {
                    router.navigateTo('#/about/' + name);
                    App.inAbout(convertNameToModuleId(name));
                };
            },
            isPageActive: function (name) {
                var moduleName = convertNameToModuleId(name);
                return ko.computed(function () {
                    return App.inAbout() === moduleName;
                });
            }
        };

        return App;
    }    
);