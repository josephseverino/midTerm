
angular.module('GearShare',["ngRoute"])
    
    
angular.module('GearShare').config(function($routeProvider){
    $routeProvider.when('/home', {
        templateUrl: './views/home.html'
    });
    
    $routeProvider.when('/loan', {
        templateUrl: './views/loan.html'
    });
    $routeProvider.when('/rent', {
        templateUrl:'./views/rent.html'
    });
    
    $routeProvider
        .otherwise({
            redirectTo:'/home'
        });
});

angular.module('GearShare').controller('shareCtrl', ['$scope', '$location', shareCtrl])
function shareCtrl( $scope, $location ) {
    var  sCtrl = this;
    
    
    
    
    
    
    
    
    var foo = '' ;
    $scope.$on('$routeChangeSuccess', function() {
        sCtrl.locationPath = $location.path();
        console.log('locationPath: ' + sCtrl.locationPath );
    });
}

angular.module('GearShare').controller('aboutCtrl', function ($scope) {
    $scope.aboutText = 'Every page on this site is embedded inside the index.html';
});

console.log('before my new controller and factory')

// factory and controller for profiles

angular.module('GearShare')
    .controller('Profiles', Profiles)
    .factory('profileFactory',profileFactory)
console.log('after my new controller and factory')

Profiles.$inject = ['profileFactory']

function Profiles(profileFactory){
    console.log('Profiles function is good')
    var profiles = this;
     profiles.getPic = function(photo){
         console.log(photo)
         profiles.showDetails = ! profiles.showDetails
         profiles.currentPhoto = photo
     }
     profiles.showDetails = false;
     profiles.adPreview = false;
     profiles.rate = '' // this is the value of the input
     profiles.phone = '' // this is the value of the currently clicked author
     profiles.email = '' // this is the value of textarea
     profiles.city = ''
     profiles.state = ''
     profiles.descript = ''
     profiles.typeEquipment = ''
     profiles.profilePic = ''
     profiles.photo1 =''
     profiles.photo2 =''
     profiles.photo3 =''
     profiles.photo4 =''
     profiles.list = profileFactory.profiles
    
    
     profiles.addProfile = function() {
        console.debug('pressed submit');
            var tempArray=[];
            if(profiles.photo1 != ''){
                tempArray.push(profiles.photo1)
            }
            if(profiles.photo2 != ''){
                tempArray.push(profiles.photo2)
            }
            if(profiles.photo3 != ''){
                tempArray.push(profiles.photo3)
            }
            if(profiles.photo4!= ''){
                tempArray.push(profiles.photo4)
            }
            var object = {
                rate            :  profiles.rate,
                phone           :  profiles.phone,
                email           :  profiles.email,
                descript        :  profiles.descript,
                typeEquipment   :  profiles.typeEquipment,
                profilePic      :  profiles.profilePic,
                city            :  profiles.city,
                state           :  profiles.state,
                photos          :  tempArray
                
                
            }
       
            profileFactory. profiles.push(
                object
                
                // rate:  profiles.rate,
                // phone:  profiles.phone,
                // email:  profiles.email,
                // descript : profiles.descript,
                // typeEquipment : profiles.typeEquipment,
                // profilePic :profiles.profilePic,
                
                // photos : [profiles.photo1,profiles.photo2,profiles.photo3,profiles.photo4]
                
                // photo2 : profiles.photo2,
                // photo3 : profiles.photo3,
                // photo4 : profiles.photo4
                 
            )
        
        console.debug(profileFactory. profiles)

         profiles.rate='' // because of data binding, this will clear the form value for the input
         profiles.phone=''   // because of data binding, this will clear the form value for the textarea
         profiles.email=''
         profiles.descript =''
         profiles.typeEquipment =''
         profiles.city = ''
         profiles.state = ''
         profiles.photo1 =''
         profiles.photo2 =''
         profiles.photo3=''
         profiles.photo4=''
        
         
    }
    
}

function profileFactory(){
    console.log('factory is working')
    return {
        profiles: [{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        },
        {
            rate         : '$10/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Bikes',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['http://www.besportier.com/archives/new-designer-bicycles-sexy-bicycles.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Boulder',
            state        : 'Colorado',
            photos       : ['https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQfINwLkMVIBRC0ZpT5gAOufXOU2TcEtv6e59aH1OwE-N71Y30T']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Frederick',
            state        : 'Colorado',
            photos       : ['https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQfINwLkMVIBRC0ZpT5gAOufXOU2TcEtv6e59aH1OwE-N71Y30T']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQfINwLkMVIBRC0ZpT5gAOufXOU2TcEtv6e59aH1OwE-N71Y30T']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Denver',
            state        : 'Colorado',
            photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        }]
    }
}

