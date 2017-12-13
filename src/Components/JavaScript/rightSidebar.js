import React from 'react';
import Avatar from 'material-ui/Avatar';

var divStyle = {
	backgroundColor: 'lightblue',
	height: 200,
	width: 300,
	marginTop: -517,
	marginLeft: 1020,
	paddingLeft: 15,
	paddingTop: 15,
}

var bStyle = {
	fontSize: 20,
}

var AvatarStyle = {
	float: 'left',
}

const RightSidebar = () => (
	<div style={divStyle}>
		<span><b style={bStyle}>Who to follow</b></span><br/><br/>
		<span><Avatar style={AvatarStyle} src={require('./Images/bullsi.png')} /> &nbsp;&nbsp; <b>Donald Trump</b>  @donald_trump_official</span> <br/><br/>
		<span><Avatar style={AvatarStyle} src={require('./Images/dhoni.jpg')} /> &nbsp;&nbsp; <b>M S Dhoni</b>  @mahendra_singh_dhoni</span> <br/><br/>
		<span><Avatar style={AvatarStyle} src={require('./Images/jadeja.jpg')} /> &nbsp;&nbsp; <b>Ravindra Jadeja</b>&nbsp;&nbsp;&nbsp;&nbsp;  @i_rajpoot_boy</span> <br/><br/>
	</div>
);

export default RightSidebar;