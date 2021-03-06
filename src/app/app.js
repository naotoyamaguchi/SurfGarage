import angular from 'angular';
import * as uiRouter from '@uirouter/angularjs';
import * as ngAnimate from 'angular-animate';
import * as ngFileUpload from 'ng-file-upload';
import loginState from '../loginState';
import registerState from '../registerState';
import defaultState from '../defaultState';
import contactState from '../contactState';
import aboutState from '../aboutState';
import boardsState from '../boardsState';
import newBoardState from '../newBoardState';
import detailedBoardState from '../detailBoard';
import editBoardState from '../editBoardState';
import rentalState from '../rentalState';
import storageState from '../storageState';
import EditBoardApi from '../editBoardState/service.js';
import BoardsApi from '../boardsState/service.js';
import NewBoardApi from '../newBoardState/service.js';
import NewUserApi from '../registerState/service.js';
import LoginApi from '../loginState/service.js';
import DetailedBoardApi from '../detailBoard/service.js';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  };
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router', 'ngAnimate', 'ngFileUpload'])
  .config( ( $stateProvider, $urlRouterProvider ) => {
    $urlRouterProvider.otherwise('/default');

    $stateProvider
    .state({
      name: 'registerState',
      url: '/register',
      component: 'registerState'
    })
    .state({
      name: 'loginState',
      url: '/login',
      component: 'loginState'
    })
    .state({
      name: 'defaultState',
      url: '/default',
      component: 'defaultState'
    })
    .state({
      name: 'contactState',
      url: '/contact',
      component: 'contactState'
    })
    .state({
      name: 'aboutState',
      url: '/about',
      component: 'aboutState'
    })
    .state({
      name: 'boardsState',
      url: '/boards',
      component: 'boardsState'
    })
    .state({
      name: 'newBoardState',
      url: '/newBoard',
      component: 'newBoardState'
    })
    .state({
      name: 'detailedBoardState',
      url: '/boards/:id',
      component: 'detailedBoardState'
    })
    .state({
      name: 'editBoardState',
      url: '/boards/:id/edit',
      component: 'editBoardState'
    })
    .state({
      name: 'rentalState',
      url: '/rentals',
      component: 'rentalState'
    })
    .state({
      name: 'storageState',
      url: '/storage',
      component: 'storageState'
    });
  })
  .directive('app', app)
  .component('registerState', registerState)
  .component('loginState', loginState)
  .component('defaultState', defaultState)
  .component('contactState', contactState)
  .component('aboutState', aboutState)
  .component('boardsState', boardsState)
  .component('newBoardState', newBoardState)
  .component('detailedBoardState', detailedBoardState)
  .component('editBoardState', editBoardState)
  .component('rentalState', rentalState)
  .component('storageState', storageState)
  .service('LoginApi', LoginApi)
  .service('NewUserApi', NewUserApi)
  .service('BoardsApi', BoardsApi)
  .service('NewBoardApi', NewBoardApi)
  .service('editBoardApi', EditBoardApi)
  .service('DetailedBoardApi', DetailedBoardApi)
  .filter('boardRange', function(){
    return function(boards, scope){
      var output = boards;
      function conv(feet, inches){
        return (feet*12) + inches;
      }

      if(scope.minFeet && scope.maxFeet){
        output = boards.filter((board) => conv(board.feet, board.inches) >= scope.minFeet*12 && conv(board.feet, board.inches) < scope.maxFeet*12);
      }
      if(scope.minFeet && !scope.maxFeet){
        output = boards.filter((board) => conv(board.feet, board.inches) >= scope.minFeet*12);
      }
      if(!scope.minFeet && scope.maxFeet){
        output = boards.filter((board) => conv(board.feet, board.inches) <= scope.maxFeet*12);
      }

      return output;
    };
  })
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;