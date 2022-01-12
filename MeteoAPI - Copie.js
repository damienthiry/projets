$(function(){
	setInterval(
			function(){
				$(".slideshow ul")
					.animate(
							{
								/* 
									Dans
									$(« .slideshow ul »).animate({« margin-left »: -700}	
									
									Tu peux remplacer la valeur 700 par $(".slideshow ul").width().
									Si tu fais varier la largeur de tes li en CSS, ça devrait fonctionner tout seul
								*/
								marginLeft:-700
							},
							800,		// millisecondes ?
							function(){
									$(this).css(
											{marginLeft:0}
										)
										.find(
												"li:last"
											)
											.after(
													$(this).find(
															"li:first"
														)
												);
								}
						)
			},
			3500		// millisecondes
		);
});

