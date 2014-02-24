// SOCIAL PAGE 
		function listSocial() {
				$('#preloader').show('slow');
				$('#status').show('slow');
				$('#shout-comments').hide();
				$('#suggestion').hide();
				  $('#social-comments').show('slow');
				node_load(3, {
					success: function(node) {
						$('#preloader').fadeOut();
					  $('#status').fadeOut();
					
					 
					 $("#title").html("<img src='"+Drupal.settings.site_path + node.title+"'/>");
						$("#comment_link").html("<a href='" + node.path+"'>Comment</a>");
					
					},
					error: function(xhr, status, message) {
					  alert(message)
					}
				});
			}
			function popupWin1() {
					node_load(3, {
								success: function(node) {
									$('#preloader').fadeOut();
								  $('#status').fadeOut();
								
								},
								error: function(xhr, status, message) {
								  alert(message)
								}
							});
			}// END SOCIAL PAGE
		
		
		//SHOUT PAGE 

			function listShout() {
					$('#preloader').show('slow');
				$('#status').show('slow');
				$('#social-comments').hide();
				$('#suggestion').hide();
				$('#shout-comments').show('slow');
				node_load(5, {
					success: function(node) {
						$('#preloader').fadeOut();
						$('#social-comments').hide();
					  $('#status').fadeOut();
					 
					 // alert('Loaded node: ' + node.title);
					 /* $("#title").html('Shout Out!');*/
					  
						$("#title").html("<img src='"+Drupal.settings.site_path + node.title+"'/>");
						$("#comment_link").html("<a href='" + node.path+"'>Comment</a>");
					},
					error: function(xhr, status, message) {
					  alert(message)
					}
				});
			}
			function popupWin2() {
					node_load(5, {
								success: function(node) {
									$('#preloader').fadeOut();
								  $('#status').fadeOut();
									//$("#contents").html(data);
								 // alert('Loaded node: ' + node.title);
								},
								error: function(xhr, status, message) {
								  alert(message)
								}
							});
			}
      // END SHOUT PAGE 
	  
	 // WHATS PAGE 

			function listWhats() {
				$('#preloader').show('slow');
				$('#status').show('slow');
				$('#social_share').hide();
				
				
				node_load(15, {
					success: function(node) {
						$('#preloader').fadeOut();
					  $('#status').fadeOut();
					  $('#suggestion').show('slow');
					  
						$("#title").html("<img src='"+Drupal.settings.site_path + node.title+"'/>");
					 // alert('Loaded node: ' + node.title);
					},
					error: function(xhr, status, message) {
					  alert(message)
					}
				});
				
				
			}

			function popupWin3() {
					node_load(9, {
								success: function(node) {
									$('#preloader').fadeOut();
								  $('#status').fadeOut();
									//$("#contents").html(data);
								 // alert('Loaded node: ' + node.title);
								},
								error: function(xhr, status, message) {
								  alert(message)
								}
							});
			}
     // END WHATS PAGE