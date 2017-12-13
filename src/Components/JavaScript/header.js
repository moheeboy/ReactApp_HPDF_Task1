import React from 'react';
import HomeIcon from 'react-material-icons/icons/action/home';
import NotificationIcon from 'react-material-icons/icons/social/notifications';
import MessageIcon from 'react-material-icons/icons/communication/email';
import TextField from 'material-ui/TextField';
import SearchIcon from 'react-material-icons/icons/action/search';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';

var divStyle = {
  paddingTop: 5,
  paddingBottom: 5,
  
};

var spanStyle = {
	marginLeft: 20,
} 

var ACStyle = {
	marginLeft: 180,
}

var RButton = {
	padding: 5,
	radius: 50,
}


const Header = () => (
			<div style={divStyle}>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<span style={spanStyle}><HomeIcon />&nbsp;Home</span>&nbsp;&nbsp;&nbsp;
				<span style={spanStyle}><NotificationIcon />&nbsp;Notifications</span>&nbsp;&nbsp;&nbsp;
				<span style={spanStyle}><MessageIcon />&nbsp;Messages</span>&nbsp;&nbsp;&nbsp;
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<img style={ACStyle} src={require('./Images/twitter.png')} height='36' width='36' />
				<span style={ACStyle} ><TextField hintText="Search Twitter" /></span>
				<span><SearchIcon /></span>&nbsp;&nbsp;&nbsp;
				<Avatar src={require('./Images/mohit.jpg')} />&nbsp;&nbsp;&nbsp;				   								
				<RaisedButton label="Tweet" primary={true} style={RButton} />
			</div>
		);

export default Header;