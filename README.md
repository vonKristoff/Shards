Shards
======

A jQuery plugin that builds a CSS multi-layered gradient background on any element - resembling neon shards!

BASIC USAGE:
```javascript
$('element').shards(
	colour_1, 
	colour_2, 
	shade_colour, 
	number_of_shards, 
	complexity, 
	lightness, 
	alpha_constant, 
	fullscreen
);
```
<h1>config options:</h1></br>
<b>colour 1:</b> rgba array-> <b>[255,255,55,.5]</b>
<b>colour 2:</b> rgba array-> <b>[255,255,55,.5]</b>
<b>shade colour :</b> rgba array-> <b>[255,255,55,.5]</b>
<b>number of shards</b> integer-> <b>12</b> max:100
<b>comlexity :</b> decimal-> <b>.8</b> max:1
<b>lightness</b> integer-> <b>2</b> max:3
<b>alpha :</b> decimal-> <b>.8</b> max:1
<b>fullscreen :</b> boolean-> <b>true</b>
<h1>example</h1>
```javascript
$('.bg').shards([0,0,0,.5],[255,0,0,.2],[255.255,0,.1],10,.9,.1,true);
```