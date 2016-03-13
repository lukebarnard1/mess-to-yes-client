module.exports = function(cols, done) {

		console.log('Send to the server: ', this.state.data_to_send.length, ' bytes');

		var formData = new FormData();

		formData.append('user_id', this.state.user_id);
		formData.append('columnsRequested', cols.map(function(c){return c.colname;}).join(','));
		formData.append('dataTitle', this.state.dataTitle);
		formData.append('dataDescription', this.state.dataDescription);
		
		formData.append("fileToProcess", this.refs.file_input.files[0]);

		var request = new XMLHttpRequest();

		request.onreadystatechange = function(e) {
			if (request.readyState == 4) {
				done(JSON.parse(request.responseText));
			}
		}.bind(this);

		request.open("POST", "/FaceHack/www/assets/php/vendor/StoreRegex.php");
		request.send(formData);
}