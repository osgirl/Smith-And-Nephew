(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    // Inject the factory we are using and $sce to allow video playback on our site
    MainController.$inject = [];

    /* @ngInject */
    function MainController() {
        //Declare all the variables and functions we will be using in the Controller    
        var vm = this;

        vm.news = [{
            latestNews: 'LATEST NEWS',
            title: 'New Portal Is Live!',
            date: 'Yesterday',
            description: "Bacon ipsum dolor amet pig bacon drumstick short ribs, picanha strip steak pork chop jerky corned beef pork boudin beef chuck. Hamburger tail swine leberkas fatback strip steak picanha shoulder jerky salami burgdoggen t-bone tri-tip pork chop beef. Rump sausage beef pig, jerky strip steak sirloin corned beef t-bone tenderloin boudin. Doner chicken jowl, ham shankle pancetta bresaola sirloin short loin pork loin ball tip landjaeger spare ribs."
        }, {
            title: 'Get Ready For Launch!',
            date: '1 week ago',
            description: 'Bacon ipsum dolor amet pig bacon drumstick short ribs, picanha strip steak pork chop jerky corned beef pork boudin beef chuck. Hamburger tail swine leberkas fatback strip steak picanha shoulder jerky salami burgdoggen t-bone tri-tip pork chop beef. Rump sausage beef pig, jerky strip steak sirloin corned beef t-bone tenderloin boudin. Doner chicken jowl, ham shankle pancetta bresaola sirloin short loin pork loin ball tip landjaeger spare ribs.'
        }];


    }
})();
