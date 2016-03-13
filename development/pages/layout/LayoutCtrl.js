leoControllers.controller("LayoutCtrl", ["$scope", "$rootScope", "$uibModal", "$window", function ($scope, $rootScope, $uibModal, $window) {
    $scope.isOpened = false;

    $scope.menu = [
        {
            title: "Home",
            path: "site.home",
            subMenuItems: []
        },
        {
            title: "Skills",
            path: "site.skills",
            subMenuItems: []
        },
        {
            title: "Experience",
            path: "site.experience",
            subMenuItems: []
        },
        {
            title: "Education",
            path: "site.education",
            subMenuItems: []
        },
        {
            title: "Works",
            path: "site.works",
            subMenuItems: []
        }
    ];

    $scope.keywords = [
        "Leo Choi",
        "Hong Kong",
        "Developer",
        "Mobile",
        "Web",
        "Desktop",
        "Application",
        "New blood",
        "Dream",
        "CUHK",
        "Senior"
    ];

    $rootScope.$on("$viewContentLoaded", function (event, viewConfig) {
        $scope.isOpened = false;
        $window.scrollTo(0, 0);
    });

    // Public function
    $scope.openContactModal = openContactModal;

    // Private function
    function openContactModal() {
        var modal = $uibModal.open({
            animation: true,
            templateUrl: "pages/modals/contact.html",
            size: "sm"
        });
    }

}]);