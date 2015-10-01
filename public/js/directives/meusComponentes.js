angular.module('meusComponentes',[])
  .directive('meuPainel', meuPainel)
  .directive('meuBotaoAviso', meuBotaoAviso)
  .directive('meuFocus', meuFocus); 

function meuPainel () {


  return {
    restrict : "EA",
    scope : {
      titulo:'@'
    },
    transclude: true,
    templateUrl : 'js/directives/meuPainel.html'
  };
}

function meuBotaoAviso () {
  return{
    restrict: 'E',
    scope: {
      nome: '@',
      acao: '&'
    },
    templateUrl: 'js/directives/meuBotaoAviso.html'
  };
}

function meuFocus () {
  return {
    restrict: 'A',
    scope:{
      evento: '@'
    },
    link : focusLink
  }
}
function focusLink (scope, element) {
  scope.$on(scope.evento, function () {
    element[0].focus();
  });
}