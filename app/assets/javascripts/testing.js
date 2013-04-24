jQuery(document).ready(function(){
	jQuery("#bodynav_brand").click(function(){
		jQuery(this).css('background-image','url(../assets/brand.png)');
		jQuery("#bodynav_design").css('background-image','url(../assets/brand_gray.png)');
		jQuery("#bodynav_numbers").css('background-image','url(../assets/brand_gray.png)');		
	});

	jQuery("#bodynav_design").click(function(){
		jQuery(this).css('background-image','url(../assets/brand.png)');
		jQuery("#bodynav_brand").css('background-image','url(../assets/brand_gray.png)');
		jQuery("#bodynav_numbers").css('background-image','url(../assets/brand_gray.png)');	
	});
	jQuery("#bodynav_numbers").click(function(){
		jQuery(this).css('background-image','url(../assets/brand.png)');
		jQuery("#bodynav_design").css('background-image','url(../assets/brand_gray.png)');
		jQuery("#bodynav_brand").css('background-image','url(../assets/brand_gray.png)');	
	});
})