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
  .service('LoginApi', LoginApi)
  .service('NewUserApi', NewUserApi)
  .service('BoardsApi', BoardsApi)
  .service('NewBoardApi', NewBoardApi)
  .service('DetailedBoardApi', DetailedBoardApi)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;