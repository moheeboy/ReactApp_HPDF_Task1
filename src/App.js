import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Components/JavaScript/header.js';
import LeftSidebar from './Components/JavaScript/leftSidebar.js';
import LeftBottombar from './Components/JavaScript/leftBottombar.js';
import Feeds from './Components/JavaScript/feeds.js';
import RightSidebar from './Components/JavaScript/rightSidebar.js';
import Namebar from './Components/JavaScript/namebar.js';
import Subnamebar from './Components/JavaScript/subnamebar.js';
import LeftSidebar2 from './Components/JavaScript/leftsidebar2.js';
import LinkFeeds from './Components/JavaScript/linkfeeds.js';
import RightSidebar2 from './Components/JavaScript/rightSidebar2.js';
import LeftBottom2 from './Components/JavaScript/leftbottom2.js';


/* 
	To get the output of twitter timeline, simply run the project on 
	the server.

	To get the output of twitter search = "aadhar",
	uncomment the App() code which is currently commented and comment 
	the code for Twitter Timeline.

*/


// Twitter Timeline
const App = () => (
  <MuiThemeProvider>
  	<Header />
  	<LeftSidebar />
  	<Feeds />
	<RightSidebar />
	<LeftBottombar />  	
  </MuiThemeProvider>
);





/*
//Twitter search = "aadhar"
const App = () => (
  <MuiThemeProvider>
  	<Header />
  	<Namebar />
  	<Subnamebar />
  	<LeftSidebar2 />
  	<LinkFeeds />
  	<RightSidebar2 />
  	<LeftBottom2 />  	
  </MuiThemeProvider>
);
*/

export default App;