import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

const Temp = () => (
	<div>
		<form action="" method="post">
		<TextField
	      hintText=""
	      floatingLabelText="Enter your ID"
	    /><br />

	    <TextField
	      hintText=""
	      floatingLabelText="Enter your Password"
	      type="password"
	    /><br />
	    </form>
    </div>
    );

export default Temp;