angular.module('symbolTestApp', [])

    .directive('milsymbol', ['$log', function ($log) {


        function createSymbolCode(scope) {
            var size = scope.size || 20;
            var symbol = new MS.symbol(scope.sic, {size: size, uniqueDesignation: scope.uniqueDesignation});
            scope.code = symbol.getMarker().asImage();
            return symbol.getMarker()
        }


        function link(scope, element, attrs) {
            var mysymbol = createSymbolCode(scope);
            scope.code = mysymbol.getMarker().asImage();


            scope.$watch("sic", function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    mysymbol = createSymbolCode(scope);
                }
            });
            scope.$watch("uniqueDesignation", function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    mysymbol.uniqueDesignation = scope.uniqueDesignation;
                    scope.code = mysymbol.getMarker().asImage();
                }
            });

            scope.$watch("size", function (newValue, oldValue) {
                if (newValue !== oldValue) {
                    mysymbol.size = scope.size;
                    scope.code = mysymbol.getMarker().asImage();
                }
            });

        }

        return {
            restrict: 'E',
            replace: true,
            scope: {
                sic: '@sic',
                size: '@size',
                uniqueDesignation: '@'
            },
            template: function (element, attrs) {
                return '<img class="symbol-sm" src="{{code}}"/>';
            },
            link: link

        };
    }])

    .controller('ListSymbolsController', ["$scope", function ($scope) {
        $scope.symbols = ['SFG*UCDSS-*****', 'SNG*UCDSS-*****', 'SHG*UCDSS-*****', 'SUG*UCDSV-*****', 'SFG*UCDSV-*****',
            'SNG*UCDSV-*****', 'SHG*UCDSV-*****', 'SUG*UCDM--*****', 'SFG*UCDM--*****', 'SNG*UCDM--*****',
            'SHG*UCDM--*****', 'SUG*UCDML-*****', 'SFG*UCDML-*****', 'SNG*UCDML-*****', 'SHG*UCDML-*****',
            'SUG*UCDMLA*****', 'SFG*UCDMLA*****', 'SNG*UCDMLA*****', 'SHG*UCDMLA*****',];
    }])

    .controller('SymbolController', ["$scope", function ($scope) {
        $scope.symbolSize = 40;
        $scope.sidc = "SFG-UCI----D";
        $scope.uniqueDesignation = "";
    }])

;
