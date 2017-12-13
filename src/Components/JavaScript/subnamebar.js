import React from 'react';

var divStyle = {
	backgroundColor: 'lightgrey',
	paddingTop: 15,
	paddingBottom: 15,
	paddingLeft: 100,
	fontWeight: 'bolder',
	fontSize: 13,
	
}

var elements = {
	paddingRight: 50,
}


const Subnamebar = () => (
	<div style={divStyle} >
		<span style={elements}>Top</span>
		<span style={elements}>Latest</span>
		<span style={elements}>People</span>
		<span style={elements}>Photos</span>
		<span style={elements}>Videos</span>
		<span style={elements}>News</span>
		<span style={elements}>Broadcasts</span> 
	</div>
);

export default Subnamebar;