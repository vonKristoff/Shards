(function($) {

var Plugin = function(me,c1,c2,sh,wheel,steps){

	this.el = me;
	this.filter = '';
	this.colours = {
		c1 		: c1,
		c2 		: c2,
		shade 	: sh,
		steps 	: steps,
		wheel	: wheel
	}
	
	this.init();
}
Plugin.prototype.init = function(){

	var steps = this.colours.steps;
	
	while( steps > 0){
		this.positions = this.position();
		this.stringBuilder();
		this.colourFilter();
		steps -= 1;
		if(steps > 0) this.filter += ', ';
	}
	this.el.css('background',this.filter);
	this.fit();
}
Plugin.prototype.stringBuilder = function(){
	var col = this.colours;
	this.filter += '-webkit-gradient(linear,'+this.positions+'from(rgba(255,255,255,.1)), to('+col.c1+'), color-stop(0,'+col.c2+'), color-stop(.1,'+col.shade+'))'
}
Plugin.prototype.fit = function(){
	this.el.css({
		'width':'100%',
		'height': window.innerHeight
	})
}

Plugin.prototype.position = function(){

	var left = ~~(Math.random()*100),
		right = left + 1,
		rotationBase = ~~(Math.random()*100),
		angle = rotationBase + (-5 + (~~(Math.random()*10)));
	
	var positions = {
			left:left,
			right:right,
			rotationBase:rotationBase,
			angle:angle
		};

	var string = positions.left + '% ' + positions.rotationBase + '%, ' + positions.right + '% ' + positions.angle + '%,';

	return string
}

Plugin.prototype.colourFilter = function(){

	var rgb = this.colours.c1.substring(5);
	var l = rgb.length;
	var array = (rgb.substr(0,l - 4)).split(',').map(Number);
	
	var hsl = this.hsl(array);
	hsl[0] = ~~(Math.random()*360);
	var rtn = this.rgb(hsl);


}
Plugin.prototype.hsl = function(rgb){

	var r1 = rgb[0] / 255;
	var g1 = rgb[1] / 255;
	var b1 = rgb[2] / 255;
	var maxColor = Math.max(r1,g1,b1);
	var minColor = Math.min(r1,g1,b1);
	//Calculate L:
	var L = (maxColor + minColor) / 2 ;
	var S = 0;
	var H = 0;
	if(maxColor != minColor){
	    //Calculate S:
	    if(L < 0.5){
	        S = (maxColor - minColor) / (maxColor + minColor);
	    }else{
	        S = (maxColor - minColor) / (2.0 - maxColor - minColor);
	    }
	    //Calculate H:
	    if(r1 == maxColor){
	        H = (g1-b1) / (maxColor - minColor);
	    }else if(g1 == maxColor){
	        H = 2.0 + (b1 - r1) / (maxColor - minColor);
	    }else{
	        H = 4.0 + (r1 - g1) / (maxColor - minColor);
	    }
	}

	L = L * 100;
	S = S * 100;
	H = H * 60;
	if(H<0){
	    H += 360;
	}

	var result = [H, S, L];
	return result;
	
}
Plugin.prototype.rgb = function(hsl){
	var h = hsl[0];
	var s = hsl[1];
	var l = hsl[2];
	
	var m1, m2, hue;
	var r, g, b;
	s /=100;
	l /= 100;
	if (s == 0)
		r = g = b = (l * 255);
	else {
		if (l <= 0.5)
			m2 = l * (s + 1);
		else
			m2 = l + s - l * s;
		m1 = l * 2 - m2;
		hue = h / 360;
		r = this.hue2rgb(m1, m2, hue + 1/3);
		g = this.hue2rgb(m1, m2, hue);
		b = this.hue2rgb(m1, m2, hue - 1/3);
	}
	return [Math.round(r), Math.round(g), Math.round(b)];
}
jQuery.fn.gradient = function(colour1, colour2, shade, wheel, steps){

	// maybe have wheel (colour steps) as a decimal value

	var el = $(this);
	var gradients = new Plugin(el,colour1,colour2,shade,wheel,steps);
	
	$(window).resize( function(){
		gradients.fit();
	});

	return this.el;	// chaining enabled
}

})(jQuery);