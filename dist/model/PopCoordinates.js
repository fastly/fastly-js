"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PopCoordinates model module.
 * @module model/PopCoordinates
 * @version 3.0.0-alpha1
 */
var PopCoordinates = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PopCoordinates</code>.
   * @alias module:model/PopCoordinates
   */
  function PopCoordinates() {
    _classCallCheck(this, PopCoordinates);

    PopCoordinates.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PopCoordinates, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PopCoordinates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PopCoordinates} obj Optional instance to populate.
     * @return {module:model/PopCoordinates} The populated <code>PopCoordinates</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PopCoordinates();

        if (data.hasOwnProperty('x')) {
          obj['x'] = _ApiClient["default"].convertToType(data['x'], 'Number');
        }

        if (data.hasOwnProperty('y')) {
          obj['y'] = _ApiClient["default"].convertToType(data['y'], 'Number');
        }

        if (data.hasOwnProperty('latitude')) {
          obj['latitude'] = _ApiClient["default"].convertToType(data['latitude'], 'Number');
        }

        if (data.hasOwnProperty('longitude')) {
          obj['longitude'] = _ApiClient["default"].convertToType(data['longitude'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return PopCoordinates;
}();
/**
 * @member {Number} x
 */


PopCoordinates.prototype['x'] = undefined;
/**
 * @member {Number} y
 */

PopCoordinates.prototype['y'] = undefined;
/**
 * @member {Number} latitude
 */

PopCoordinates.prototype['latitude'] = undefined;
/**
 * @member {Number} longitude
 */

PopCoordinates.prototype['longitude'] = undefined;
var _default = PopCoordinates;
exports["default"] = _default;