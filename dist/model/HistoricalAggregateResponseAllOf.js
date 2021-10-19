"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Results = _interopRequireDefault(require("./Results"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HistoricalAggregateResponseAllOf model module.
 * @module model/HistoricalAggregateResponseAllOf
 * @version 3.0.0-alpha1
 */
var HistoricalAggregateResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HistoricalAggregateResponseAllOf</code>.
   * @alias module:model/HistoricalAggregateResponseAllOf
   */
  function HistoricalAggregateResponseAllOf() {
    _classCallCheck(this, HistoricalAggregateResponseAllOf);

    HistoricalAggregateResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HistoricalAggregateResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HistoricalAggregateResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalAggregateResponseAllOf} obj Optional instance to populate.
     * @return {module:model/HistoricalAggregateResponseAllOf} The populated <code>HistoricalAggregateResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistoricalAggregateResponseAllOf();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_Results["default"]]);
        }
      }

      return obj;
    }
  }]);

  return HistoricalAggregateResponseAllOf;
}();
/**
 * @member {Array.<module:model/Results>} data
 */


HistoricalAggregateResponseAllOf.prototype['data'] = undefined;
var _default = HistoricalAggregateResponseAllOf;
exports["default"] = _default;