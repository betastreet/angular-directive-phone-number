(function() {
  'use strict';

  angular
    .module('phoneNumber')
    .controller('PhoneNumberController', PhoneNumberController);

  PhoneNumberController.$inject = [];

  function PhoneNumberController() {

    // Controller Variables ========

    var vm = this;

    vm.display = '';

    // Map VM Functions ============

    vm.activate = activate;

    // Initialize ==================

    function activate(phone, ext){
      phone = phone.replace(/\D/g, '');
      ext = ext ? ext.replace(/\D/g, '') : '';
      var base = phone.substr(-7);
      phone = phone.substr(0, phone.length - 7);
      base = base.substr(0, 3) + '-' + base.substr(3);
      var area = phone.substr(-3);
      if(area && base){
        phone = phone.substr(0, phone.length - 3);
        var international = phone.length ? '+' + phone : '+1';
        vm.display = international + '-' + area + '-' + base + ( ext ? ' x' + ext : '' );
      }else{
        vm.display = '';
      }
    }

    // Controller Functions ========

  }

})();
