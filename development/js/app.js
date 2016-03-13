var leoApplication = angular.module("leo", ["ui.router", "ui.bootstrap", "ngAnimate", "leo.controllers", "leo.filters", "leo.directives"]);
var leoControllers = angular.module("leo.controllers", []);
var leoServices = angular.module("leo.services", []);
var leoFilters = angular.module("leo.filters", []);
var leoDirectives = angular.module("leo.directives", []);

leoApplication

    .config(["$stateProvider", "$locationProvider", "$urlRouterProvider", function ($stateProvider, $locationProvider, $urlRouterProvider) {

        $stateProvider
            .state("site", {
                url: "/Site",
                abstract: true,
                templateUrl: "pages/layout/main.html",
                controller: "LayoutCtrl"
            })

            .state("site.home", {
                url: "/Home",
                views: {
                    "mainContent": {
                        templateUrl: "pages/home/home.html"
                    }
                }
            })

            .state("site.skills", {
                url: "/Skills",
                views: {
                    "mainContent": {
                        templateUrl: "pages/skills/skills.html"
                    }
                }
            })

            .state("site.experience", {
                url: "/Experience",
                views: {
                    "mainContent": {
                        templateUrl: "pages/experience/experience.html"
                    }
                }
            })

            .state("site.education", {
                url: "/Education",
                views: {
                    "mainContent": {
                        templateUrl: "pages/education/education.html"
                    }
                }
            })

            .state("site.works", {
                url: "/Works",
                views: {
                    "mainContent": {
                        templateUrl: "pages/works/works.html"
                    }
                }
            })

            .state("site.htmlArchitecture", {
                url: "/HtmlArchitecture",
                views: {
                    "mainContent": {
                        templateUrl: "pages/html-architecture/html-architecture.html"
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise("/Site/Home");

        if (window.history && window.history.pushState) {
            $locationProvider.html5Mode(true);
        }
    }]);
