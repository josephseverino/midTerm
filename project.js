




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
    $routeProvider.when('/near', {
        templateUrl:'./views/near.html'
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
    
         profiles.initMap =function(){
         profiles.map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: 39.7392, lng: -104.9903} //39.7392° N, 104.9903° W
        });
        profiles.geocoder = new google.maps.Geocoder();

        
          profiles.makeAddress();
        
      }
    
      profiles.makeAddress = function( ){
         
        
        
        var address =[];
        for(var i=0; i < profiles.list.length; i++){
            address.push(profiles.list[i].city + "," +profiles.list[i].state).toString();
        }
       
        for(var i=0; i<address.length;i++){
           profiles.geocoder.geocode({'address': address[i]}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            profiles.map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: profiles.map,
              position: results[0].geometry.location
              
            });
            console.log(results[0])
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        }); 
        console.log(address)
         
        }
        
     }
     
      
     
         
     
     
     
     profiles.search = '';
     profiles.showNav =false;
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
       console.log(object)
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
    //console.log('factory is working')
    return {
        profiles: [{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Camping related',
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
            profilePic   : 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4zxg1UclNnfVB3OWJV6lDKi61sMx-535xArybUoWWcC-qtTHR4Q',
            city         : 'Aurora',
            state        : 'Colorado',
            photos       : ['http://www.besportier.com/archives/new-designer-bicycles-sexy-bicycles.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'https://c2.staticflickr.com/2/1476/25862903591_ea695c9ace_b.jpg',
            city         : 'Boulder',
            state        : 'Colorado',
            photos       : ['https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQfINwLkMVIBRC0ZpT5gAOufXOU2TcEtv6e59aH1OwE-N71Y30T']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Bikes',
            profilePic   : 'https://upload.wikimedia.org/wikipedia/commons/1/14/Im_With_Coco.jpg',
            city         : 'Frederick',
            state        : 'Colorado',
            photos       : ['http://cdn.shopify.com/s/files/1/0232/3305/products/State_Bicycle_Bicycles_CityBikes_FourPeaks-1_large.JPG?v=1416597107']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Camping related',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Lakewood',
            state        : 'Colorado',
            photos       : ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8_96L_EDIZZhUbky5-iRuLXI3BO8SxnSKRBUqnd1HuqTw8Zm']
        },
        {
            rate         : '$10/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Misc',
            profilePic   : 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR4zxg1UclNnfVB3OWJV6lDKi61sMx-535xArybUoWWcC-qtTHR4Q',
            city         : 'Aurora',
            state        : 'Colorado',
            photos       : ['https://upload.wikimedia.org/wikipedia/commons/8/8d/Band_set-up_Lincoln_Hall.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'https://c2.staticflickr.com/2/1476/25862903591_ea695c9ace_b.jpg',
            city         : 'Boulder',
            state        : 'Colorado',
            photos       : ['https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQfINwLkMVIBRC0ZpT5gAOufXOU2TcEtv6e59aH1OwE-N71Y30T']
        }
        ,{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Water Sports',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Colorado Springs',
            state        : 'Colorado',
            photos       : ['https://c1.staticflickr.com/8/7264/7509283792_061a339ef9_b.jpg']
        },{
            rate         : '$5/day',
            phone        : '720-318-2957',
            email        : 'johnny@mail.com',
            descript     : 'BLah blah Blah',
            typeEquipment: 'Bikes',
            profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
            city         : 'Arvada',
            state        : 'Colorado',
            photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        }
        //     rate         : '$5/day',
        //     phone        : '720-318-2957',
        //     email        : 'johnny@mail.com',
        //     descript     : 'BLah blah Blah',
        //     typeEquipment: 'Water Sports',
        //     profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
        //     city         : 'Frederick',
        //     state        : 'Colorado',
        //     photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        // },{
        //     rate         : '$5/day',
        //     phone        : '720-318-2957',
        //     email        : 'johnny@mail.com',
        //     descript     : 'BLah blah Blah',
        //     typeEquipment: 'Water Sports',
        //     profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
        //     city         : 'Denver',
        //     state        : 'Colorado',
        //     photos       : ['https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQfINwLkMVIBRC0ZpT5gAOufXOU2TcEtv6e59aH1OwE-N71Y30T']
        // },{
        //     rate         : '$5/day',
        //     phone        : '720-318-2957',
        //     email        : 'johnny@mail.com',
        //     descript     : 'BLah blah Blah',
        //     typeEquipment: 'Bikes',
        //     profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
        //     city         : 'Boulder',
        //     state        : 'Colorado',
        //     photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        // },{
        //     rate         : '$5/day',
        //     phone        : '720-318-2957',
        //     email        : 'johnny@mail.com',
        //     descript     : 'BLah blah Blah',
        //     typeEquipment: 'Water Sports',
        //     profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
        //     city         : 'Colorado Springs',
        //     state        : 'Colorado',
        //     photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        // },{
        //     rate         : '$5/day',
        //     phone        : '720-318-2957',
        //     email        : 'johnny@mail.com',
        //     descript     : 'BLah blah Blah',
        //     typeEquipment: 'Bikes',
        //     profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
        //     city         : 'Erie',
        //     state        : 'Colorado',
        //     photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        // },{
        //     rate         : '$5/day',
        //     phone        : '720-318-2957',
        //     email        : 'johnny@mail.com',
        //     descript     : 'BLah blah Blah',
        //     typeEquipment: 'Misc',
        //     profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
        //     city         : 'Aspen',
        //     state        : 'Colorado',
        //     photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        // },{
        //     rate         : '$5/day',
        //     phone        : '720-318-2957',
        //     email        : 'johnny@mail.com',
        //     descript     : 'BLah blah Blah',
        //     typeEquipment: 'Misc',
        //     profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
        //     city         : 'Boulder',
        //     state        : 'Colorado',
        //     photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        // },{
        //     rate         : '$5/day',
        //     phone        : '720-318-2957',
        //     email        : 'johnny@mail.com',
        //     descript     : 'BLah blah Blah',
        //     typeEquipment: 'Winter Sports',
        //     profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
        //     city         : 'Denver',
        //     state        : 'Colorado',
        //     photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        // },{
        //     rate         : '$5/day',
        //     phone        : '720-318-2957',
        //     email        : 'johnny@mail.com',
        //     descript     : 'BLah blah Blah',
        //     typeEquipment: 'Winter Sports',
        //     profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
        //     city         : 'Denver',
        //     state        : 'Colorado',
        //     photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        // },{
        //     rate         : '$5/day',
        //     phone        : '720-318-2957',
        //     email        : 'johnny@mail.com',
        //     descript     : 'BLah blah Blah',
        //     typeEquipment: 'Water Sports',
        //     profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
        //     city         : 'Aurora',
        //     state        : 'Colorado',
        //     photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        // },{
        //     rate         : '$5/day',
        //     phone        : '720-318-2957',
        //     email        : 'johnny@mail.com',
        //     descript     : 'BLah blah Blah',
        //     typeEquipment: 'Camping related',
        //     profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
        //     city         : 'Colorado Springs',
        //     state        : 'Colorado',
        //     photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        // },{
        //     rate         : '$5/day',
        //     phone        : '720-318-2957',
        //     email        : 'johnny@mail.com',
        //     descript     : 'BLah blah Blah',
        //     typeEquipment: 'Winter Sports',
        //     profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
        //     city         : 'Erie',
        //     state        : 'Colorado',
        //     photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        // },{
        //     rate         : '$5/day',
        //     phone        : '720-318-2957',
        //     email        : 'johnny@mail.com',
        //     descript     : 'BLah blah Blah',
        //     typeEquipment: 'Water Sports',
        //     profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
        //     city         : 'Denver',
        //     state        : 'Colorado',
        //     photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        // },{
        //     rate         : '$5/day',
        //     phone        : '720-318-2957',
        //     email        : 'johnny@mail.com',
        //     descript     : 'BLah blah Blah',
        //     typeEquipment: 'Camping related',
        //     profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
        //     city         : 'Boulder',
        //     state        : 'Colorado',
        //     photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        // },{
        //     rate         : '$5/day',
        //     phone        : '720-318-2957',
        //     email        : 'johnny@mail.com',
        //     descript     : 'BLah blah Blah',
        //     typeEquipment: 'Camping related',
        //     profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
        //     city         : 'Seattle',
        //     state        : 'Washington',
        //     photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        // },{
        //     rate         : '$5/day',
        //     phone        : '720-318-2957',
        //     email        : 'johnny@mail.com',
        //     descript     : 'BLah blah Blah',
        //     typeEquipment: 'Water Sports',
        //     profilePic   : 'http://www.thefamouspeople.com/profiles/images/mitch-hedberg-2.jpg',
        //     city         : 'Denver',
        //     state        : 'Colorado',
        //     photos       : ['http://media.jrn.com/images/WT_campgear_all.jpg']
        // }
        ]
    }
}

