xdescribe('meuBotaoAviso', function() {
  var $scope,
      element;
  beforeEach(function() {
    module('meusComponentes');
    module('templates');
    inject(function ($rootScope, $compile) {
      $scope = $rootScope.$new();
      element = angular.element(
        '<meu-botao-aviso acao="remove(contato)" nome="Remover">');
      $compile(element)($scope);
      $scope.$digest();
    })
  });

  it('Deve criar um botao de aviso com texto e função', function() {
    expect(element.text()).toContain('Remover');
    expect(element.attr('acao')).toBe('remove()');
  });
});