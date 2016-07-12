$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

//make iffy and pass window in as win
//allows you to use strict and still have the global variables defined
(function(win){
    "use strict";
    var App = React.createClass({
        render: function() {
            var Child;

            switch (this.props.route) {
                case 'about': Child = About; break;
                default: Child = Home;
            }

            return (
                <div>
                    <Header/>
                    <Child/>
                </div>
            );

        }
    });

    function render() {
        var route = win.location.hash.substr(1);
        React.render(<App route={route} />, document.getElementById('app'));
    }

    win.addEventListener('hashchange', render);
    render();

})(window);