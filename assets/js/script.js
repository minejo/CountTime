$(function(){
	
	var note = $('#note');

		
	$('#countdown').countdown({
		callback	: function(years,days, hours, minutes, seconds){
			
			var message = "";
		    message += years + " year" + ( years==1 ? '':'s' ) + ", ";	
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
		
			
			note.html(message);
		}
	});
	
});
