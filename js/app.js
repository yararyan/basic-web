(function(){
    var app = angular.module('store', ['store-products']);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    /*app.controller('StoreController', ['$http', function($http){
        var store = this;
        store.products = [ ];
        $http.get('http://cfsites1.uts.edu.au/gsa/products.html').success(function(data){
            store.products = data;
        });
    }]);*/

    app.controller('ReviewController', function(){
        this.review = {};

        this.addReview = function(product) {
            product.reviews.push(this.review);
            this.review = {};
        }
    })

    var gems = [
        {
            "name": "Dodecahedron",
            "price": 2,
            "description": "Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.",
            "canPurchase": true,
            "images": [
                {
                    "full": "dodecahedron-01-full.jpeg",
                    "thumb": "dodecahedron-01-thumb.jpeg"
                }
            ],
            "reviews": [
                {
                    "stars": 5,
                    "body": "I love this product",
                    "author": "joe@thomas.com"
                },
                {
                    "stars": 1,
                    "body": "This product sucks",
                    "author": "tom@hater.com"
                }
            ]
        },
        {
            "name": "Pentagonal Gem",
            "price": 5.95,
            "description": "Some gems have hidden qualities beyond their luster, beyond their shine... Pentagonal is one of those gems.",
            "canPurchase": true,
            "images": [
                {
                    "full": "dodecahedron-02-full.jpeg",
                    "thumb": "dodecahedron-02-thumb.jpeg"
                }
            ],
            "reviews": [
                {
                    "stars": 5,
                    "body": "I love this product",
                    "author": "joe@thomas.com"
                },
                {
                    "stars": 1,
                    "body": "This product sucks",
                    "author": "tom@hater.com"
                }
            ]
        }
    ]

})();