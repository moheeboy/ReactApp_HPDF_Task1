import React from 'react';

var divStyle = {
	backgroundColor: 'lightblue',
	marginLeft: 90,
	marginTop: -250,
	width: 310,
	paddingBottom: 6,
	paddingTop: 10,
	paddingLeft: 10,

}

var nTweets = {
	fontSize: 12,
}

const LeftBottombar = () => (
	<div style={divStyle}>
		<b>Trends for you</b><br/><br/>
		<span>#GujaratElections<br/><span style={nTweets}>1008 Tweets</span></span><br/><br/>
		<span>#Viruska<br/><span style={nTweets}>1000 Tweets</span></span><br/><br/>
		<span>#PappuBecomesPresident<br/><span style={nTweets}>997 Tweets</span></span><br/><br/>
		<span>#CoalScam<br/><span style={nTweets}>888 Tweets</span></span><br/><br/>
	</div>
);

export default LeftBottombar;