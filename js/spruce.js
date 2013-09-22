angular.module('spruce', []).
  directive('spruceNav', function() {
    return {
      restrict: 'E',
      transclude: false,    
      template:
      '<div class="navbar-wrapper">'+
      '<div class="container">'+
        '<div class="navbar navbar-inverse navbar-static-top">'+
          '<div class="container">'+
            '<div class="navbar-header">'+
              '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'+
                '<span class="icon-bar"></span>'+
                '<span class="icon-bar"></span>'+
                '<span class="icon-bar"></span>'+
              '</button>'+
              '<a class="navbar-brand" href="index.html">云杉教育</a>'+
            '</div>'+
            '<div class="navbar-collapse collapse">'+
              '<ul class="nav navbar-nav">'+
                '<li class={{focus.home}}><a href="index.html">主页</a></li>'+
                '<li class={{focus.about}}><a href="about.html">团队介绍</a></li>'+
                '<li class={{focus.cases}}><a href="comingsoon.html">案例分析</a></li>'+
                '<li class={{focus.contact}}><a href="contact.html">联系我们</a></li>'+
                '<li class="dropdown {{focus.software}}">'+
                  '<a href="comingsoon.html" class="dropdown-toggle" data-toggle="dropdown">软件服务<b class="caret"></b></a>'+
                  '<ul class="dropdown-menu">'+
                    '<li><a href="comingsoon.html">管理系统</a></li>'+
                    '<li><a href="comingsoon.html">智能习题</a></li>'+
                    '<li class="divider"></li>'+
                    '<li class="dropdown-header">数据分析</li>'+
                    '<li><a href="comingsoon.html">数据挖掘</a></li>'+
                    '<li><a href="comingsoon.html">数据视觉化</a></li>'+
                  '</ul>'+
                '</li>'+
              '</ul>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>',
    replace: true,
    link: function (scope, element, attrs) {
      scope.focus = {};
      scope.focus.home = scope.focus.cases = scope.focus.about  = scope.focus.contact = scope.focus.software = '';
      console.log(attrs.infocus);
      scope.focus[attrs.infocus] = 'active';
    }
    };
  }).
  directive('spruceFooter', function() {
    return {
      restrict: 'E',
      transclude: false,     
      template:
      '<footer>'+
        '<p class="pull-right"><a href="#">Back to top</a></p>'+
        '<p>&copy; 2013 Company, Inc. &middot; <a href="comingsoon.html">Privacy</a> &middot; <a href="comingsoon.html">Terms</a></p>'+
      '</footer>',
      replace: true
    };
  }).
  // controller for the form to be filled when contacting
  controller('ContactCtrl', ['$scope', function($scope) {
    $scope.message = '';
    $scope.sendMsg = function () {
    // TODO for the reader: actually save user to database... 
    $scope.message = 'Thanks, ' + $scope.user.name + ', we added you!';
    };

  }])
