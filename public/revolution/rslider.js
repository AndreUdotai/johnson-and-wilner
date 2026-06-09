/* Slider 1*/
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider11"] = {once: RS_MODULES.modules["revslider11"]!==undefined ? RS_MODULES.modules["revslider11"].once : undefined, init:function() {
		window.revapi1 = window.revapi1===undefined || window.revapi1===null || window.revapi1.length===0  ? document.getElementById("rev_slider_1_1") : window.revapi1;
		if(window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length==0) { window.revapi1initTry = window.revapi1initTry ===undefined ? 0 : window.revapi1initTry+1; if (window.revapi1initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider11"].init()}); return;}
		window.revapi1 = jQuery(window.revapi1);
		if(window.revapi1.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_1"); return;}
		revapi1.revolutionInit({
				revapi:"revapi1",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1240,1240,480",
				gridwidth:"1170,1170,1170,480",
				gridheight:"730,730,730,400",
				lazyType:"smart",
				spinner:"spinner0",
				perspective:600,
				perspectiveType:"local",
				editorheight:"730,768,960,400",
				responsiveLevels:"1240,1240,1240,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					mouseScrollNavigation:false,
					wheelCallDelay:1000,
					onHoverStop:false,
					arrows: {
						enable:true,
						style:"metis",
						hide_onleave:true,
						left: {

						},
						right: {

						}
					}
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false,
					visible_area:"20%"
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
/* Slider 2*/ 

/* Slider 3*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider31"] = {once: RS_MODULES.modules["revslider31"]!==undefined ? RS_MODULES.modules["revslider31"].once : undefined, init:function() {
		window.revapi3 = window.revapi3===undefined || window.revapi3===null || window.revapi3.length===0  ? document.getElementById("rev_slider_3_1") : window.revapi3;
		if(window.revapi3 === null || window.revapi3 === undefined || window.revapi3.length==0) { window.revapi3initTry = window.revapi3initTry ===undefined ? 0 : window.revapi3initTry+1; if (window.revapi3initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider31"].init()}); return;}
		window.revapi3 = jQuery(window.revapi3);
		if(window.revapi3.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_3_1"); return;}
		revapi3.revolutionInit({
				revapi:"revapi3",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1240,768,768",
				gridwidth:"1170,1170,778,778",
				gridheight:"900,900,960,960",
				lazyType:"smart",
				spinner:"spinner0",
				perspective:600,
				perspectiveType:"local",
				editorheight:"900,768,960,720",
				responsiveLevels:"1240,1240,768,768",
				progressBar:{disableProgressBar:true},
				navigation: {
					mouseScrollNavigation:false,
					wheelCallDelay:1000,
					onHoverStop:false,
					arrows: {
						enable:true,
						style:"custom",
						hide_onmobile:true,
						hide_under:992,
						left: {
							container:"layergrid",
							v_offset:180
						},
						right: {
							container:"layergrid",
							h_align:"left",
							h_offset:140,
							v_offset:180
						}
					}
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false,
					visible_area:"20%"
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
			// listen for when the slider initially loads
			revapi3.bind('revolution.slide.onloaded', function() {

			// get number of total slides in slider
			var totalSlides = revapi3.revmaxslide();

			// listen for when a new slide is shown
			revapi3.bind('revolution.slide.onchange', function(e, data) {

				// get current slide number
				var currentSlide = data.slideIndex;

				jQuery('#rev-total-slide .rs-layer').html('0' + currentSlide + ' / 0' + totalSlides);

			});

			});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

/* Slider 4*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider41"] = {once: RS_MODULES.modules["revslider41"]!==undefined ? RS_MODULES.modules["revslider41"].once : undefined, init:function() {
	window.revapi4 = window.revapi4===undefined || window.revapi4===null || window.revapi4.length===0  ? document.getElementById("rev_slider_4_1") : window.revapi4;
	if(window.revapi4 === null || window.revapi4 === undefined || window.revapi4.length==0) { window.revapi4initTry = window.revapi4initTry ===undefined ? 0 : window.revapi4initTry+1; if (window.revapi4initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider41"].init()}); return;}
	window.revapi4 = jQuery(window.revapi4);
	if(window.revapi4.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_4_1"); return;}
	revapi4.revolutionInit({
			revapi:"revapi4",
			DPR:"dpr",
			sliderLayout:"fullwidth",
			visibilityLevels:"1240,1024,768,480",
			gridwidth:1170,
			gridheight:850,
			lazyType:"smart",
			spinner:"spinner0",
			perspective:600,
			perspectiveType:"local",
			editorheight:"850,768,960,720",
			responsiveLevels:"1240,1024,768,480",
			progressBar:{disableProgressBar:true},
			navigation: {
				mouseScrollNavigation:false,
				wheelCallDelay:1000,
				onHoverStop:false,
				arrows: {
					enable:true,
					style:"custom",
					hide_onmobile:true,
					hide_under:992,
					left: {
						container:"layergrid",
						h_align:"center",
						h_offset:-55,
						v_offset:210
					},
					right: {
						container:"layergrid",
						h_align:"center",
						h_offset:55,
						v_offset:210
					}
				}
			},
			viewPort: {
				global:true,
				globalDist:"-200px",
				enable:false,
				visible_area:"20%"
			},
			fallbacks: {
				allowHTML5AutoPlayOnAndroid:true
			},
	});
		// listen for when the slider initially loads
		revapi4.bind('revolution.slide.onloaded', function() {

		// get number of total slides in slider
		var totalSlides = revapi4.revmaxslide();

		// listen for when a new slide is shown
		revapi4.bind('revolution.slide.onchange', function(e, data) {

			// get current slide number
			var currentSlide = data.slideIndex;
				
			jQuery('#rev-total-slide .rs-layer').html('0' + currentSlide + ' / 0' + totalSlides);
				
		});

		});	

	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

/* Slider 5*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider51"] = {once: RS_MODULES.modules["revslider51"]!==undefined ? RS_MODULES.modules["revslider51"].once : undefined, init:function() {
		window.revapi5 = window.revapi5===undefined || window.revapi5===null || window.revapi5.length===0  ? document.getElementById("rev_slider_5_1") : window.revapi5;
		if(window.revapi5 === null || window.revapi5 === undefined || window.revapi5.length==0) { window.revapi5initTry = window.revapi5initTry ===undefined ? 0 : window.revapi5initTry+1; if (window.revapi5initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider51"].init()}); return;}
		window.revapi5 = jQuery(window.revapi5);
		if(window.revapi5.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_5_1"); return;}
		revapi5.revolutionInit({
				revapi:"revapi5",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1240,778,480",
				gridwidth:"1170,1170,778,480",
				gridheight:"915,915,960,500",
				lazyType:"smart",
				spinner:"spinner0",
				perspective:600,
				perspectiveType:"local",
				editorheight:"915,768,960,500",
				responsiveLevels:"1240,1240,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					mouseScrollNavigation:false,
					wheelCallDelay:1000,
					onHoverStop:false,
					arrows: {
						enable:true,
						style:"custom",
						hide_onmobile:true,
						hide_under:992,
						left: {
							container:"layergrid",
							v_offset:200
						},
						right: {
							container:"layergrid",
							h_align:"left",
							h_offset:140,
							v_offset:200
						}
					}
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false,
					visible_area:"20%"
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
			// listen for when the slider initially loads
			revapi5.bind('revolution.slide.onloaded', function() {

			// get number of total slides in slider
			var totalSlides = revapi5.revmaxslide();

				// listen for when a new slide is shown
				revapi5.bind('revolution.slide.onchange', function(e, data) {

				// get current slide number
				var currentSlide = data.slideIndex;

				jQuery('#rev-total-slide .rs-layer').html('0' + currentSlide + ' / 0' + totalSlides);

				});

			});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

/* Slider 6*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider61"] = {once: RS_MODULES.modules["revslider61"]!==undefined ? RS_MODULES.modules["revslider61"].once : undefined, init:function() {
		window.revapi6 = window.revapi6===undefined || window.revapi6===null || window.revapi6.length===0  ? document.getElementById("rev_slider_6_1") : window.revapi6;
		if(window.revapi6 === null || window.revapi6 === undefined || window.revapi6.length==0) { window.revapi6initTry = window.revapi6initTry ===undefined ? 0 : window.revapi6initTry+1; if (window.revapi6initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider61"].init()}); return;}
		window.revapi6 = jQuery(window.revapi6);
		if(window.revapi6.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_6_1"); return;}
		revapi6.revolutionInit({
				revapi:"revapi6",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1024,778,480",
				gridwidth:"1170,1024,778,480",
				gridheight:"750,600,500,400",
				lazyType:"smart",
				spinner:"spinner0",
				perspective:600,
				perspectiveType:"local",
				editorheight:"750,600,500,400",
				responsiveLevels:"1240,1024,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					mouseScrollNavigation:false,
					wheelCallDelay:1000,
					onHoverStop:false,
					arrows: {
						enable:true,
						style:"metis",
						hide_onmobile:true,
						hide_under:"1024px",
						hide_onleave:true,
						left: {
							h_align:"right",
							v_align:"bottom",
							h_offset:60
						},
						right: {
							v_align:"bottom",
							h_offset:0
						}
					}
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false,
					visible_area:"20%"
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

/* Slider 7*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider71"] = {once: RS_MODULES.modules["revslider71"]!==undefined ? RS_MODULES.modules["revslider71"].once : undefined, init:function() {
		window.revapi7 = window.revapi7===undefined || window.revapi7===null || window.revapi7.length===0  ? document.getElementById("rev_slider_7_1") : window.revapi7;
		if(window.revapi7 === null || window.revapi7 === undefined || window.revapi7.length==0) { window.revapi7initTry = window.revapi7initTry ===undefined ? 0 : window.revapi7initTry+1; if (window.revapi7initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider71"].init()}); return;}
		window.revapi7 = jQuery(window.revapi7);
		if(window.revapi7.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_7_1"); return;}
		revapi7.revolutionInit({
				revapi:"revapi7",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1240,1240,480",
				gridwidth:"1170,1170,1170,480",
				gridheight:"790,790,790,400",
				lazyType:"smart",
				spinner:"spinner0",
				perspective:600,
				perspectiveType:"local",
				editorheight:"790,768,960,400",
				responsiveLevels:"1240,1240,1240,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					mouseScrollNavigation:false,
					wheelCallDelay:1000,
					onHoverStop:false,
					arrows: {
						enable:true,
						style:"metis",
						hide_onmobile:true,
						hide_under:"1024px",
						hide_onleave:true,
						left: {

						},
						right: {

						}
					}
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false,
					visible_area:"20%"
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

/* Slider 8*/ 
var	tpj = jQuery;
	if(window.RS_MODULES === undefined) window.RS_MODULES = {};
	if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
	RS_MODULES.modules["revslider81"] = {once: RS_MODULES.modules["revslider81"]!==undefined ? RS_MODULES.modules["revslider81"].once : undefined, init:function() {
		window.revapi8 = window.revapi8===undefined || window.revapi8===null || window.revapi8.length===0  ? document.getElementById("rev_slider_8_1") : window.revapi8;
		if(window.revapi8 === null || window.revapi8 === undefined || window.revapi8.length==0) { window.revapi8initTry = window.revapi8initTry ===undefined ? 0 : window.revapi8initTry+1; if (window.revapi8initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider81"].init()}); return;}
		window.revapi8 = jQuery(window.revapi8);
		if(window.revapi8.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_8_1"); return;}
		revapi8.revolutionInit({
				revapi:"revapi8",
				DPR:"dpr",
				sliderLayout:"fullwidth",
				visibilityLevels:"1240,1240,778,480",
				gridwidth:"1170,1170,778,480",
				gridheight:"810,810,700,400",
				lazyType:"smart",
				spinner:"spinner0",
				perspective:600,
				perspectiveType:"local",
				editorheight:"810,768,700,400",
				responsiveLevels:"1240,1240,778,480",
				progressBar:{disableProgressBar:true},
				navigation: {
					mouseScrollNavigation:false,
					wheelCallDelay:1000,
					onHoverStop:false,
					arrows: {
						enable:true,
						style:"metis",
						hide_onmobile:true,
						hide_under:"1024px",
						hide_onleave:true,
						left: {

						},
						right: {

						}
					}
				},
				viewPort: {
					global:true,
					globalDist:"-200px",
					enable:false,
					visible_area:"20%"
				},
				fallbacks: {
					allowHTML5AutoPlayOnAndroid:true
				},
		});
		
	}} // End of RevInitScript
	if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};