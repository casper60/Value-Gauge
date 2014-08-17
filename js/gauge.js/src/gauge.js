;(function ($) {

	$.fn.valueGauge = function (params) {
		var range = { from: -135, to: 135 },
			ticks = range.to - range.from,
			element = formatTemplate(params);

		/*
			Formatting methods
			------------------
			Methods for formatting data for output
		*/
		function formatNum(num) {
			num = String(parseInt(num, 10));

			// Formats number from 10.000 and up (eg. 10.210 => 10k)
			return num < 10000 ? num : (num / 1000).toFixed(num % 1000 !== 0) + 'k';
		}

		function formatTransformCss(transform) {
			// Build CSS transform object with vendor prefixes
			return {
				webkitTransform: transform, MozTransform: transform,
				msTransform: transform, transform: transform
			};
		}

		function formatTemplate(data) {
			var gaugeWrap = $('<div />', { class: 'valueGauge', id: data.id }),
				circle = $('<div />', { class: 'gauge' }),
				needle = $('<div />', { class: 'needle' }),
				values = $('<div />', { class: 'values' }).text(formatNum(data.value)),
				title = $('<div />', { class: 'title' }).text(data.title);

			// Apply data values
			values.attr('data-min', 0).attr('data-max', formatNum(data.valueMax));

			// Merge elements to one object
			return gaugeWrap.append(circle).append(values).append(needle).append(title);
		}

		/*
			Render methods
			--------------
			Update elements in DOM
		*/
		function updateValue(value, valueMax) {
			var rangeMax = range.to,
				valueMaxOption = (valueMax || params.valueMax),
				percentage = value / valueMaxOption,
				transform = 'rotate(' + Math.min((ticks * percentage) - rangeMax, rangeMax) + 'deg)';

			// Updates needle rotation to reflect progress
			element.find('.needle').css(formatTransformCss(transform));
			// Update text values
			element.find('.values').text(formatNum(value));
			element.find('.values').attr('data-max', formatNum(valueMaxOption));
			// Add maxed out animation when valueMax is reached
			element.one('webkitTransitionEnd transitionend', function () {
				element.toggleClass('isMaxed', value > valueMaxOption);
			});
		}

		// Expose update function on element & append to DOM
		element.on('updateValue', function (e, value) { updateValue(value); });
		element.appendTo(this);

		// Wait for element to get inserted into DOM
		setTimeout(function () { updateValue(params.value, params.valueMax); }, 0);
	};

}(jQuery));
