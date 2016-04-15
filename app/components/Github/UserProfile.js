var React = require( 'react' );

var UserProfile = React.createClass({
    render: function() {
        return (
            <div>
                <p>UserProfile</p>
                <p>username: {this.props.username} </p>
                <p>bio: {this.props.bio.name} </p>
            </div>
        );
    }
});

module.exports = UserProfile;