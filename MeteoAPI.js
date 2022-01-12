$(function(){
	setInterval(
			function(){
				$(".slideshow ul")
					.animate(
							{
								/* 
									Dans
										
										$(« #wip ul li:first-child »).animate({« margin-left »: -250}	
									
									Tu peux remplacer la valeur 250 par $("#wip ul li").width().
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

