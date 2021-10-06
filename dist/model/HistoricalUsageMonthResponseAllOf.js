"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HistoricalUsageMonthResponseAllOfData = _interopRequireDefault(require("./HistoricalUsageMonthResponseAllOfData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HistoricalUsageMonthResponseAllOf model module.
 * @module model/HistoricalUsageMonthResponseAllOf
 * @version 3.0.0-alpha1
 */
var HistoricalUsageMonthResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HistoricalUsageMonthResponseAllOf</code>.
   * @alias module:model/HistoricalUsageMonthResponseAllOf
   */
  function HistoricalUsageMonthResponseAllOf() {
    _classCallCheck(this, HistoricalUsageMonthResponseAllOf);

    HistoricalUsageMonthResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HistoricalUsageMonthResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HistoricalUsageMonthResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalUsageMonthResponseAllOf} obj Optional instance to populate.
     * @return {module:model/HistoricalUsageMonthResponseAllOf} The populated <code>HistoricalUsageMonthResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistoricalUsageMonthResponseAllOf();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _HistoricalUsageMonthResponseAllOfData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return HistoricalUsageMonthResponseAllOf;
}();
/**
 * @member {module:model/HistoricalUsageMonthResponseAllOfData} data
 */


HistoricalUsageMonthResponseAllOf.prototype['data'] = undefined;
var _default = HistoricalUsageMonthResponseAllOf;
exports["default"] = _default;