import React from 'react';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import CommentIcon from 'react-material-icons/icons/communication/comment';
import ShareIcon from 'react-material-icons/icons/social/share';
import LikeIcon from 'react-material-icons/icons/action/thumb-up';

var divStyle = {
	float: 'center',
	paddingLeft: 20,
	paddingRight: 20,
	paddingTop: 20,
	marginTop: 10,
	marginLeft: 435,
	height: 500,
	width: 500,
	backgroundColor: 'lightgrey',

}

var avatarStyle1 = {
	float: 'left',
}

const Feeds = () => (
	<div style={divStyle}>
		<span ><Avatar src={require('./Images/mohit.jpg')} size={40} /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<TextField hintText="What's happening?" /></span><br/><br/>
		<span ><Avatar style={avatarStyle1} src={require('./Images/display.jpg')} size={60} /> &nbsp;&nbsp; <b>Virat Kohli</b><br/><br/> &nbsp;&nbsp; What's up folks? Are you guys ready for the new series ?</span><br/><br/>
		<span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<LikeIcon /> &nbsp;100</span> 
		<span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CommentIcon /> &nbsp;12</span>
		<span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ShareIcon />&nbsp; 20</span> 
		<hr/>
	</div>
);

export default Feeds;