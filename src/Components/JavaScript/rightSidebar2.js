import React from 'react';

var divStyle = {
	backgroundColor: 'lightblue',
	marginTop: -568,
	marginLeft: 1000,
	width: 250,
	paddingTop: 10,
	paddingLeft: 10,
	paddingRight: 10,
	paddingBottom: 10,
}

var heading = {
	fontWeight: 800,
	fontSize: 18,
}

var title = {
	fontWeight: 400,
	fontSize: 16,
}

var subtitle = {	
	fontSize: 13,
}

var provider = {
	fontWeight: 400,
	fontSize: 13,
}

const RightSideBar = () => (
	<div style={divStyle}>
		<span style={heading}><b>Related Links</b></span><br /><br/>
		<span style={title}><b>Aadhar linking deadline to be extended</b></span><br/>
		<span style={subtitle}>A five-judge Constitution bench of the Supreme Court may...</span><br/><br/>
		<span style={provider}><b>Times of India</b></span>
		<hr/>
		<span style={title}><b>Latest Facility From UIDAI: Know Where Your Aadhaar Card Has Been Used
</b></span><br/>
		<span style={subtitle}>Aadhaar card or the 12-digit Unique Identity Number - issued by the UIDAI or Unique Identification Authority of India - is now ...</span><br/><br/>
		<span style={provider}><b>NDTV</b></span>




	</div>
);

export default RightSideBar;