Shards
======

A jQuery plugin that builds a CSS multi-layered gradient background on any element - resembling neon shards!

<a href='http://bite-software.co.uk/shards'>Visit plugin site</a>

Full Modern CSS3 Browser support.

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
<h1>config options:</h1>
<ul>
<li><b>colour 1:</b> rgba array-> <b>[255,255,55,.5]</b></li>
<li><b>colour 2:</b> rgba array-> <b>[255,255,55,.5]</b></li>
<li><b>shade colour :</b> rgba array-> <b>[255,255,55,.5]</b></li>
<li><b>number of shards</b> integer-> <b>12</b> max:100</li>
<li><b>comlexity :</b> decimal-> <b>.8</b> max:1</li>
<li><b>lightness</b> integer-> <b>2</b> max:3</li>
<li><b>alpha :</b> decimal-> <b>.8</b> max:1</li>
<li><b>fullscreen :</b> boolean-> <b>true</b></li>
</ul>
<h1>example</h1>
```javascript
$('.bg').shards([0,0,0,.5],[255,0,0,.2],[255,255,0,.1],10,2,2,.1,true);
```
