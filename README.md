Value-Gauge
===========

jQuery + CSS3 Gauge showing value out of total.

// Render value gauge<br>
$('#elementId').valueGauge({
	id: 'gaugeId',
	title: 'Gauge title',
	value: 200000,
	valueMax: 700000
});<br>

// Update value on existing gauge<br>
$('#gaugeId').trigger('updateValue', 710000);
