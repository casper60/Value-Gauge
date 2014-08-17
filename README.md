Value-Gauge
===========

jQuery + CSS3 Gauge showing value out of total.


How to use:<br>

Include javascript file and css file, located at:<br>

'js/gauge.js/gauge.min.css'<br>
'js/gauge.js/gauge.min.js'<br>


Images are base64 encoded so you don't have to worry about them.<br>

// Render value gauge<br>
$('#elementId').valueGauge({
	id: 'gaugeId',
	title: 'Gauge title',
	value: 200000,
	valueMax: 700000
});<br>

// Update value on existing gauge<br>
$('#gaugeId').trigger('updateValue', 710000);<br>

<img src="http://www.art-journal.dk/sites/gaugejs/gaugejsPreview.png" alt="" />

<a href="http://www.art-journal.dk/sites/gaugejs/index.html">Working demo here</a>
