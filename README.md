Value-Gauge
===========

jQuery + CSS3 Gauge showing value out of total.

// Render value gauge
$('#elementId').valueGauge({
	id: 'gaugeId',
	title: 'Gauge title',
	value: 200000,
	valueMax: 700000
});

// Update value on existing gauge
$('#gaugeId').trigger('updateValue', 710000);