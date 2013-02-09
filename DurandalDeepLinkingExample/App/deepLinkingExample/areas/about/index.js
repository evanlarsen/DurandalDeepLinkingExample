define(
    ['durandal/system', 'durandal/viewModel', 'durandal/plugins/router'],
    function (system, viewModel, router) {
        var defaultPage = 'aboutUs';

        function convertNameToModuleId(name) {
            return 'deepLinkingExample/areas/about/' + name + '/' + name;
        }

        function convertSplatToModuleId(splat) {
            if (splat && splat.length > 0) {
                if (splat[0] !== 'about') {
                    return convertNameToModuleId(splat[0]);
                }
            }
            return convertNameToModuleId(defaultPage);
        }

        var App = {
            inAbout: viewModel.activator(),

            activate: function (activationData) {
                App.inAbout(convertSplatToModuleId(activationData.splat));

                router.activeItem.settings.areSameItem = function (currentItem, newItem, data) {
                    if (currentItem != newItem) {
                        return false;
                    }
                    else {
                        App.inAbout(convertSplatToModuleId(data.splat));
                        return true;
                    }
                };
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