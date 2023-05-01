jQuery(function($) {
	if(!!window.performance && window.performance.navigation.type === 2) {
		window.setTimeout(function() { 
			$('.facetwp-type-checkboxes .facetwp-checkbox .facetwp-display-value').each(function() {
				var $captureCheckboxText = $(this).text();
				if($captureCheckboxText == '<?php echo $customTaxName ?>') {
					$(this).parent().trigger("click");
				}
			});
		}, 100);
	}
});
