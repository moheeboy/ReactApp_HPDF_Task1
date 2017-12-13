import React from 'react';

var divStyles = {
	marginTop: -130,
	marginLeft: 456,
	width: 500,
	paddingTop: 10,
	paddingLeft: 10,
	paddingRight: 10,
	paddingBottom: 10,
}

var bStyles = {
	fontSize: 16,
}

var spanStyle = {
	fontSize: 20,
}

var span2 = {
	fontSize: 14,

}


const LinkFeeds = () => (
	<div style={divStyles}>
		<b style={bStyles}>Top news</b><br/><br/>
		<img src={require('./Images/aadhar.png')} height='400' width='500'/><br/>
		<span style={spanStyle}><b>How Aadhar is helping empower Indian women</b></span><br/><br/>
		<span style={span2}>Aadhaar is helping empower Indian women and driving increased use of banking services, says the first study of the nationwide Aadhaar program</span><br/><br/>
		<span style={span2}><u>view more</u></span>
	</div>
);

export default LinkFeeds;