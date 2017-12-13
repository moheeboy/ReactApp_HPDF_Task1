import React from 'react';

var divStyle = {
	backgroundColor: 'lightblue',
	marginTop: 30,
	marginLeft: 90,
	width: 300,
	paddingTop: 10,
	paddingLeft: 10,
	paddingRight: 10,
	paddingBottom: 10,
}

var bStyle = {
	fontSize: 17,
}

var options = {
	fontSize: 13,
	paddingBottom: 4,
	paddingTop:4,
}

const LeftSidebar2 = () => (
	<div style={divStyle}>
		<b style={bStyle}>Related Searches</b><br/><br/>
		<b>
		<span style={options}>manglore</span><br/>
		<span style={options}>manishankar aiyar</span><br/>
		<span style={options}>#ladakh</span><br/>
		<span style={options}>rajeev dhawan</span><br/>
		</b>
	</div>
);

export default LeftSidebar2;