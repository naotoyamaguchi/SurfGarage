import angular from 'angular';
import * as uiRouter from '@uirouter/angularjs';
import * as ngAnimate from 'angular-animate';
import * as ngFileUpload from 'ng-file-upload';
import defaultState from '../defaultState';
import contactState from '../contactState';
import aboutState from '../aboutState';
import testState from '../testState';
import newBoardState from '../newBoardState';
import TestApi from '../testState/service.js';
import NewBoardApi from '../newBoardState/service.js';

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
      name: 'testState',
      url: '/test',
      component: 'testState'
    })
    .state({
      name: 'newBoardState',
      url: '/newBoard',
      component: 'newBoardState'
    });
  })
  .directive('app', app)
  .component('defaultState', defaultState)
  .component('contactState', contactState)
  .component('aboutState', aboutState)
  .component('testState', testState)
  .component('newBoardState', newBoardState)
  .service('TestApi', TestApi)
  .service('NewBoardApi', NewBoardApi)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;