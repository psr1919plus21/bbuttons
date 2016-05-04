/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./static/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _buttonSubmit = __webpack_require__(1);
	
	var bbuttonSubmit = _interopRequireWildcard(_buttonSubmit);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	var btns = document.querySelectorAll('.bbtn-submit');
	btns = Object.keys(btns).map(function (key) {
	    return btns[key];
	});
	
	// Bbutton submit settings.
	var btnSubmitSettings = {
	    background: ' #7caa2d',
	    backgroundHover: '#6b991c',
	    backgroundActive: '#49770a',
	    border: 'none',
	    borderHover: 'none',
	    borderRadius: '2px',
	    color: '#ffffff',
	    colorHover: '#f2f2f2',
	    cursor: 'pointer',
	    fontSize: '22px',
	    minHeight: '60px',
	    outline: 'none',
	    padding: '0 10px',
	    width: '300px'
	};
	
	btns.forEach(function (button) {
	    var btnStyle = button.style;
	
	    var bgPreset = button.getAttribute('data-bg');
	    var bgHoverPreset = button.getAttribute('data-bg-hover');
	    var bgActivePreset = button.getAttribute('data-bg-active');
	    var borderPreset = button.getAttribute('data-border');
	    var borderHoverPreset = button.getAttribute('data-border-hover');
	    var brzPreset = button.getAttribute('data-brz');
	    var colorPreset = button.getAttribute('data-color');
	    var colorHoverPreset = button.getAttribute('data-color-hover');
	    var cursorPreset = button.getAttribute('data-cursor');
	    var fzPreset = button.getAttribute('data-fz');
	    var hPreset = button.getAttribute('data-h');
	    var outPreset = button.getAttribute('data-out');
	    var paddingPreset = button.getAttribute('data-p');
	    var wPreset = button.getAttribute('data-w');
	
	    // Set bbutton properties.
	    btnStyle.background = bgPreset || btnSubmitSettings.background;
	    btnStyle.border = borderPreset || btnSubmitSettings.border;
	    btnStyle.borderRadius = brzPreset || btnSubmitSettings.borderRadius;
	    btnStyle.color = colorPreset || btnSubmitSettings.color;
	    btnStyle.cursor = cursorPreset || btnSubmitSettings.cursor;
	    btnStyle.fontSize = fzPreset || btnSubmitSettings.fontSize;
	    btnStyle.height = hPreset || btnSubmitSettings.minHeight;
	    btnStyle.outline = outPreset || btnSubmitSettings.outline;
	    btnStyle.padding = paddingPreset || btnSubmitSettings.padding;
	    btnStyle.width = wPreset || btnSubmitSettings.width;
	
	    // Bbutton Events.
	    button.addEventListener('mouseenter', function () {
	        btnStyle.border = borderHoverPreset || btnSubmitSettings.borderHover;
	        btnStyle.background = bgHoverPreset || btnSubmitSettings.backgroundHover;
	        btnStyle.color = colorHoverPreset || btnSubmitSettings.colorHover;
	    });
	
	    button.addEventListener('mouseleave', function () {
	        btnStyle.border = borderPreset || btnSubmitSettings.border;
	        btnStyle.background = bgPreset || btnSubmitSettings.background;
	        btnStyle.color = colorPreset || btnSubmitSettings.color;
	    });
	
	    button.addEventListener('mousedown', function () {
	        // btnStyle.border = borderHoverPreset || btnSubmitSettings.borderHover;
	        btnStyle.background = bgActivePreset || btnSubmitSettings.backgroundActive;
	        // btnStyle.color = colorHoverPreset || btnSubmitSettings.colorHover;
	    });
	
	    button.addEventListener('mouseup', function () {
	        btnStyle.border = borderHoverPreset || btnSubmitSettings.borderHover;
	        btnStyle.background = bgHoverPreset || btnSubmitSettings.backgroundHover;
	        btnStyle.color = colorHoverPreset || btnSubmitSettings.colorHover;
	    });
	});

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzkyOTQ1MmM3YzQ0M2RmYTk2OTEiLCJ3ZWJwYWNrOi8vLy4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL21hcmt1cC9tb2R1bGVzL2J1dHRvbi1zdWJtaXQvYnV0dG9uLXN1Ym1pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUFFQTs7S0FBWTs7Ozs7Ozs7OztBQ0ZaLEtBQUksT0FBTyxTQUFTLGdCQUFULENBQTBCLGNBQTFCLENBQVA7QUFDSixRQUFPLE9BQU8sSUFBUCxDQUFZLElBQVosRUFBa0IsR0FBbEIsQ0FBc0I7WUFBTyxLQUFLLEdBQUw7RUFBUCxDQUE3Qjs7O0FBR0EsS0FBTSxvQkFBb0I7QUFDdEIsaUJBQVksVUFBWjtBQUNBLHNCQUFpQixTQUFqQjtBQUNBLHVCQUFrQixTQUFsQjtBQUNBLGFBQVEsTUFBUjtBQUNBLGtCQUFhLE1BQWI7QUFDQSxtQkFBYyxLQUFkO0FBQ0EsWUFBTyxTQUFQO0FBQ0EsaUJBQVksU0FBWjtBQUNBLGFBQVEsU0FBUjtBQUNBLGVBQVUsTUFBVjtBQUNBLGdCQUFXLE1BQVg7QUFDQSxjQUFTLE1BQVQ7QUFDQSxjQUFTLFFBQVQ7QUFDQSxZQUFPLE9BQVA7RUFkRTs7QUFpQk4sTUFBSyxPQUFMLENBQWEsa0JBQVU7QUFDbkIsU0FBSSxXQUFXLE9BQU8sS0FBUCxDQURJOztBQUduQixTQUFJLFdBQVcsT0FBTyxZQUFQLENBQW9CLFNBQXBCLENBQVgsQ0FIZTtBQUluQixTQUFJLGdCQUFnQixPQUFPLFlBQVAsQ0FBb0IsZUFBcEIsQ0FBaEIsQ0FKZTtBQUtuQixTQUFJLGlCQUFpQixPQUFPLFlBQVAsQ0FBb0IsZ0JBQXBCLENBQWpCLENBTGU7QUFNbkIsU0FBSSxlQUFlLE9BQU8sWUFBUCxDQUFvQixhQUFwQixDQUFmLENBTmU7QUFPbkIsU0FBSSxvQkFBb0IsT0FBTyxZQUFQLENBQW9CLG1CQUFwQixDQUFwQixDQVBlO0FBUW5CLFNBQUksWUFBWSxPQUFPLFlBQVAsQ0FBb0IsVUFBcEIsQ0FBWixDQVJlO0FBU25CLFNBQUksY0FBYyxPQUFPLFlBQVAsQ0FBb0IsWUFBcEIsQ0FBZCxDQVRlO0FBVW5CLFNBQUksbUJBQW1CLE9BQU8sWUFBUCxDQUFvQixrQkFBcEIsQ0FBbkIsQ0FWZTtBQVduQixTQUFJLGVBQWUsT0FBTyxZQUFQLENBQW9CLGFBQXBCLENBQWYsQ0FYZTtBQVluQixTQUFJLFdBQVcsT0FBTyxZQUFQLENBQW9CLFNBQXBCLENBQVgsQ0FaZTtBQWFuQixTQUFJLFVBQVUsT0FBTyxZQUFQLENBQW9CLFFBQXBCLENBQVYsQ0FiZTtBQWNuQixTQUFJLFlBQVksT0FBTyxZQUFQLENBQW9CLFVBQXBCLENBQVosQ0FkZTtBQWVuQixTQUFJLGdCQUFnQixPQUFPLFlBQVAsQ0FBb0IsUUFBcEIsQ0FBaEIsQ0FmZTtBQWdCbkIsU0FBSSxVQUFVLE9BQU8sWUFBUCxDQUFvQixRQUFwQixDQUFWOzs7QUFoQmUsYUFtQm5CLENBQVMsVUFBVCxHQUFzQixZQUFZLGtCQUFrQixVQUFsQixDQW5CZjtBQW9CbkIsY0FBUyxNQUFULEdBQWtCLGdCQUFnQixrQkFBa0IsTUFBbEIsQ0FwQmY7QUFxQm5CLGNBQVMsWUFBVCxHQUF3QixhQUFhLGtCQUFrQixZQUFsQixDQXJCbEI7QUFzQm5CLGNBQVMsS0FBVCxHQUFpQixlQUFlLGtCQUFrQixLQUFsQixDQXRCYjtBQXVCbkIsY0FBUyxNQUFULEdBQWtCLGdCQUFnQixrQkFBa0IsTUFBbEIsQ0F2QmY7QUF3Qm5CLGNBQVMsUUFBVCxHQUFvQixZQUFZLGtCQUFrQixRQUFsQixDQXhCYjtBQXlCbkIsY0FBUyxNQUFULEdBQWtCLFdBQVcsa0JBQWtCLFNBQWxCLENBekJWO0FBMEJuQixjQUFTLE9BQVQsR0FBbUIsYUFBYSxrQkFBa0IsT0FBbEIsQ0ExQmI7QUEyQm5CLGNBQVMsT0FBVCxHQUFtQixpQkFBaUIsa0JBQWtCLE9BQWxCLENBM0JqQjtBQTRCbkIsY0FBUyxLQUFULEdBQWlCLFdBQVcsa0JBQWtCLEtBQWxCOzs7QUE1QlQsV0ErQm5CLENBQU8sZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0MsWUFBTTtBQUN4QyxrQkFBUyxNQUFULEdBQWtCLHFCQUFxQixrQkFBa0IsV0FBbEIsQ0FEQztBQUV4QyxrQkFBUyxVQUFULEdBQXNCLGlCQUFpQixrQkFBa0IsZUFBbEIsQ0FGQztBQUd4QyxrQkFBUyxLQUFULEdBQWlCLG9CQUFvQixrQkFBa0IsVUFBbEIsQ0FIRztNQUFOLENBQXRDLENBL0JtQjs7QUFxQ25CLFlBQU8sZ0JBQVAsQ0FBd0IsWUFBeEIsRUFBc0MsWUFBTTtBQUN4QyxrQkFBUyxNQUFULEdBQWtCLGdCQUFnQixrQkFBa0IsTUFBbEIsQ0FETTtBQUV4QyxrQkFBUyxVQUFULEdBQXNCLFlBQVksa0JBQWtCLFVBQWxCLENBRk07QUFHeEMsa0JBQVMsS0FBVCxHQUFpQixlQUFlLGtCQUFrQixLQUFsQixDQUhRO01BQU4sQ0FBdEMsQ0FyQ21COztBQTJDbkIsWUFBTyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxZQUFNOztBQUV2QyxrQkFBUyxVQUFULEdBQXNCLGtCQUFrQixrQkFBa0IsZ0JBQWxCOztBQUZELE1BQU4sQ0FBckMsQ0EzQ21COztBQWlEbkIsWUFBTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxZQUFNO0FBQ3JDLGtCQUFTLE1BQVQsR0FBa0IscUJBQXFCLGtCQUFrQixXQUFsQixDQURGO0FBRXJDLGtCQUFTLFVBQVQsR0FBc0IsaUJBQWlCLGtCQUFrQixlQUFsQixDQUZGO0FBR3JDLGtCQUFTLEtBQVQsR0FBaUIsb0JBQW9CLGtCQUFrQixVQUFsQixDQUhBO01BQU4sQ0FBbkMsQ0FqRG1CO0VBQVYsQ0FBYixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL3N0YXRpYy9qcy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGM5Mjk0NTJjN2M0NDNkZmE5NjkxXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgKiBhcyBiYnV0dG9uU3VibWl0IGZyb20gJ21vZHVsZXMvYnV0dG9uLXN1Ym1pdC9idXR0b24tc3VibWl0JztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vbWFya3VwL3N0YXRpYy9qcy9tYWluLmpzXG4gKiovIiwibGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmJ0bi1zdWJtaXQnKTtcbmJ0bnMgPSBPYmplY3Qua2V5cyhidG5zKS5tYXAoa2V5ID0+IGJ0bnNba2V5XSk7XG5cbi8vIEJidXR0b24gc3VibWl0IHNldHRpbmdzLlxuY29uc3QgYnRuU3VibWl0U2V0dGluZ3MgPSB7XG4gICAgYmFja2dyb3VuZDogJyAjN2NhYTJkJyxcbiAgICBiYWNrZ3JvdW5kSG92ZXI6ICcjNmI5OTFjJyxcbiAgICBiYWNrZ3JvdW5kQWN0aXZlOiAnIzQ5NzcwYScsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgYm9yZGVySG92ZXI6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgIGNvbG9yOiAnI2ZmZmZmZicsXG4gICAgY29sb3JIb3ZlcjogJyNmMmYyZjInLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIGZvbnRTaXplOiAnMjJweCcsXG4gICAgbWluSGVpZ2h0OiAnNjBweCcsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIHBhZGRpbmc6ICcwIDEwcHgnLFxuICAgIHdpZHRoOiAnMzAwcHgnXG59O1xuXG5idG5zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICBsZXQgYnRuU3R5bGUgPSBidXR0b24uc3R5bGU7XG5cbiAgICBsZXQgYmdQcmVzZXQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWJnJyk7XG4gICAgbGV0IGJnSG92ZXJQcmVzZXQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWJnLWhvdmVyJyk7XG4gICAgbGV0IGJnQWN0aXZlUHJlc2V0ID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1iZy1hY3RpdmUnKTtcbiAgICBsZXQgYm9yZGVyUHJlc2V0ID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1ib3JkZXInKTtcbiAgICBsZXQgYm9yZGVySG92ZXJQcmVzZXQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWJvcmRlci1ob3ZlcicpO1xuICAgIGxldCBicnpQcmVzZXQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWJyeicpO1xuICAgIGxldCBjb2xvclByZXNldCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKTtcbiAgICBsZXQgY29sb3JIb3ZlclByZXNldCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3ItaG92ZXInKTtcbiAgICBsZXQgY3Vyc29yUHJlc2V0ID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1jdXJzb3InKTtcbiAgICBsZXQgZnpQcmVzZXQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWZ6Jyk7XG4gICAgbGV0IGhQcmVzZXQgPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLWgnKTtcbiAgICBsZXQgb3V0UHJlc2V0ID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1vdXQnKTtcbiAgICBsZXQgcGFkZGluZ1ByZXNldCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtcCcpO1xuICAgIGxldCB3UHJlc2V0ID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS13Jyk7XG5cbiAgICAvLyBTZXQgYmJ1dHRvbiBwcm9wZXJ0aWVzLlxuICAgIGJ0blN0eWxlLmJhY2tncm91bmQgPSBiZ1ByZXNldCB8fCBidG5TdWJtaXRTZXR0aW5ncy5iYWNrZ3JvdW5kO1xuICAgIGJ0blN0eWxlLmJvcmRlciA9IGJvcmRlclByZXNldCB8fCBidG5TdWJtaXRTZXR0aW5ncy5ib3JkZXI7XG4gICAgYnRuU3R5bGUuYm9yZGVyUmFkaXVzID0gYnJ6UHJlc2V0IHx8IGJ0blN1Ym1pdFNldHRpbmdzLmJvcmRlclJhZGl1cztcbiAgICBidG5TdHlsZS5jb2xvciA9IGNvbG9yUHJlc2V0IHx8IGJ0blN1Ym1pdFNldHRpbmdzLmNvbG9yO1xuICAgIGJ0blN0eWxlLmN1cnNvciA9IGN1cnNvclByZXNldCB8fCBidG5TdWJtaXRTZXR0aW5ncy5jdXJzb3I7XG4gICAgYnRuU3R5bGUuZm9udFNpemUgPSBmelByZXNldCB8fCBidG5TdWJtaXRTZXR0aW5ncy5mb250U2l6ZTtcbiAgICBidG5TdHlsZS5oZWlnaHQgPSBoUHJlc2V0IHx8IGJ0blN1Ym1pdFNldHRpbmdzLm1pbkhlaWdodDtcbiAgICBidG5TdHlsZS5vdXRsaW5lID0gb3V0UHJlc2V0IHx8IGJ0blN1Ym1pdFNldHRpbmdzLm91dGxpbmU7XG4gICAgYnRuU3R5bGUucGFkZGluZyA9IHBhZGRpbmdQcmVzZXQgfHwgYnRuU3VibWl0U2V0dGluZ3MucGFkZGluZztcbiAgICBidG5TdHlsZS53aWR0aCA9IHdQcmVzZXQgfHwgYnRuU3VibWl0U2V0dGluZ3Mud2lkdGg7XG5cbiAgICAvLyBCYnV0dG9uIEV2ZW50cy5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgYnRuU3R5bGUuYm9yZGVyID0gYm9yZGVySG92ZXJQcmVzZXQgfHwgYnRuU3VibWl0U2V0dGluZ3MuYm9yZGVySG92ZXI7XG4gICAgICAgIGJ0blN0eWxlLmJhY2tncm91bmQgPSBiZ0hvdmVyUHJlc2V0IHx8IGJ0blN1Ym1pdFNldHRpbmdzLmJhY2tncm91bmRIb3ZlcjtcbiAgICAgICAgYnRuU3R5bGUuY29sb3IgPSBjb2xvckhvdmVyUHJlc2V0IHx8IGJ0blN1Ym1pdFNldHRpbmdzLmNvbG9ySG92ZXI7XG4gICAgfSk7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgYnRuU3R5bGUuYm9yZGVyID0gYm9yZGVyUHJlc2V0IHx8IGJ0blN1Ym1pdFNldHRpbmdzLmJvcmRlcjtcbiAgICAgICAgYnRuU3R5bGUuYmFja2dyb3VuZCA9IGJnUHJlc2V0IHx8IGJ0blN1Ym1pdFNldHRpbmdzLmJhY2tncm91bmQ7XG4gICAgICAgIGJ0blN0eWxlLmNvbG9yID0gY29sb3JQcmVzZXQgfHwgYnRuU3VibWl0U2V0dGluZ3MuY29sb3I7XG4gICAgfSk7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgICAvLyBidG5TdHlsZS5ib3JkZXIgPSBib3JkZXJIb3ZlclByZXNldCB8fCBidG5TdWJtaXRTZXR0aW5ncy5ib3JkZXJIb3ZlcjtcbiAgICAgICAgYnRuU3R5bGUuYmFja2dyb3VuZCA9IGJnQWN0aXZlUHJlc2V0IHx8IGJ0blN1Ym1pdFNldHRpbmdzLmJhY2tncm91bmRBY3RpdmU7XG4gICAgICAgIC8vIGJ0blN0eWxlLmNvbG9yID0gY29sb3JIb3ZlclByZXNldCB8fCBidG5TdWJtaXRTZXR0aW5ncy5jb2xvckhvdmVyO1xuICAgIH0pO1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgIGJ0blN0eWxlLmJvcmRlciA9IGJvcmRlckhvdmVyUHJlc2V0IHx8IGJ0blN1Ym1pdFNldHRpbmdzLmJvcmRlckhvdmVyO1xuICAgICAgICBidG5TdHlsZS5iYWNrZ3JvdW5kID0gYmdIb3ZlclByZXNldCB8fCBidG5TdWJtaXRTZXR0aW5ncy5iYWNrZ3JvdW5kSG92ZXI7XG4gICAgICAgIGJ0blN0eWxlLmNvbG9yID0gY29sb3JIb3ZlclByZXNldCB8fCBidG5TdWJtaXRTZXR0aW5ncy5jb2xvckhvdmVyO1xuICAgIH0pO1xufSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21hcmt1cC9tb2R1bGVzL2J1dHRvbi1zdWJtaXQvYnV0dG9uLXN1Ym1pdC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=