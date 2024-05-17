function skillsMember() {
    return {
        restrict: 'E', // This means the directive is an Element
        template: '<div>A custom directive!</div>', // This is the HTML that will be inserted
        link: function(scope, element, attrs) {
            // This is where you put all your code that needs to run when the directive is used
        }
    }
}