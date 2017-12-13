import React from 'react';
import Avatar from 'material-ui/Avatar';

var divStyle = {
	marginTop: 10,
	marginLeft: 90,
	width: 300,
	height: 150,
	backgroundColor: 'lightblue',
	paddingTop: 10,
	paddingLeft: 5,
	paddingRight: 5,
	paddingBottom: 10,
	float: 'left',
	color: 'black',
}

var avatarStyle = {
	float: 'left',
	marginLeft: 40, 
}

var smallStyle ={
	marginTop: 10,
}

const LeftSidebar = () => (
	<div style={divStyle}>
		<span><Avatar style={avatarStyle} src={require('./Images/mohit.jpg')} size={60} /> &nbsp; <b>Mohit Nikumbh</b> <br /></span>
		<span style={smallStyle} >&nbsp;&nbsp;@MoheeBoy </span><br/><br/><br/><br/>
		<span>&nbsp;&nbsp;&nbsp;&nbsp;Tweets &nbsp;&nbsp;&nbsp;&nbsp; Following &nbsp;&nbsp;&nbsp;&nbsp; Followers</span><br/><br/>
		<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 20 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 150 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 50 </span>
	</div>
);

export default LeftSidebar;