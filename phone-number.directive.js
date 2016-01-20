(function() {
'use strict';

angular
    .module('phoneNumber', ['rtcb'])
    .directive('phoneNumber', phoneNumber);

function phoneNumber(){
	return {
		restrict: 'A',
		scope:{
      phoneNumber:'@phoneNumber'
    },
		link:function(scope, element, attrs, PhoneNumberController){

      var phone = attrs.phoneNumber;
      var ext = attrs.ext;
			PhoneNumberController.activate(phone, ext);

			attrs.$observe('phoneNumber',function(value){
        phone = value;
        PhoneNumberController.activate(phone, ext);
			});

		},
		template: '<span style="white-space:nowrap;">{{ vm.display }}</span>',
		controller: 'PhoneNumberController',
		controllerAs: 'vm'
	};
};

})();
