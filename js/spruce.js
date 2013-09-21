angular.module('spruce', []).
  directive('spruceNav', function() {
    return {
      restrict: 'E',
      transclude: true,
      // scope: {
      //   // infocus: "@",
      //   // focus: '='
      // },      
      template:
      '<div class="navbar-wrapper">'+
      // '<p>{{focus.about}}</p>'+
      //  '<p>{{infocus}}</p>'+
      '<div class="container">'+
        '<div class="navbar navbar-inverse navbar-static-top">'+
          '<div class="container">'+
            '<div class="navbar-header">'+
              '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'+
                '<span class="icon-bar"></span>'+
                '<span class="icon-bar"></span>'+
                '<span class="icon-bar"></span>'+
              '</button>'+
              '<a class="navbar-brand" href="#">云杉教育</a>'+
            '</div>'+
            '<div class="navbar-collapse collapse">'+
              '<ul class="nav navbar-nav">'+
                '<li class={{focus.home}}><a href="index.html">主页</a></li>'+
                '<li class={{focus.about}}><a href="about.html">团队介绍</a></li>'+
                '<li class={{focus.cases}}><a href="cases.html">案例分析</a></li>'+
                '<li class={{focus.contact}}><a href="contact.html">联系我们</a></li>'+
                '<li class="dropdown">'+
                  '<a href="#" class="dropdown-toggle" data-toggle="dropdown">软件服务<b class="caret"></b></a>'+
                  '<ul class="dropdown-menu">'+
                    '<li><a href="#">管理系统</a></li>'+
                    '<li><a href="#">智能习题</a></li>'+
                    '<li class="divider"></li>'+
                    '<li class="dropdown-header">数据分析</li>'+
                    '<li><a href="#">数据挖掘</a></li>'+
                    '<li><a href="#">数据视觉化</a></li>'+
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
      scope.focus.home = scope.focus.cases = scope.focus.about  = scope.focus.contact = '';
      console.log(attrs.infocus);
      scope.focus[attrs.infocus] = 'active';
    }
    };
  })