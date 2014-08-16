;(function ($) {

	$.fn.valueGauge = function (params) {
		var cache = {};

		if (!cache[params.id])
			cache[params.id] = { el: $(this), params: params };

		return this;
	};

}(jQuery));

$('#gaugesWrap').valueGauge({
	id: 'currentMonthTurnover',
	title: 'Denne måned',
	value: 100000,
	valueMax: 700000
});

$('#gaugesWrap').valueGauge({
	id: 'lastMonthTurnover',
	title: 'Sidste måned',
	value: 850000,
	valueMax: 800000
});
