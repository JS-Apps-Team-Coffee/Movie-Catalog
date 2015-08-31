$(document).ready(function() {
	function search() {
		var title = $("#search").val();

		if (title != "") {
			$.ajax({
				type: "POST",
				url: "http://www.omdbapi.com/?s=" + title,
				dataType: "json",
				success: function(data) {
					console.log(data);

					// $("#result").html(data);
					// $("#search").val("");
				},
				error: function(err) {
					console.log("Error!!");
				}
			});
		}
	};

	$("#button").click(function() {
		search();
	});

	$('#search').keyup(function(e) {
		if (e.keyCode == 13) {
			search();
		}
	});

});