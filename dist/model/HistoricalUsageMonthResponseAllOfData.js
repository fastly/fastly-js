"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AdditionalProperties = _interopRequireDefault(require("./AdditionalProperties"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HistoricalUsageMonthResponseAllOfData model module.
 * @module model/HistoricalUsageMonthResponseAllOfData
 * @version 3.0.0-alpha1
 */
var HistoricalUsageMonthResponseAllOfData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HistoricalUsageMonthResponseAllOfData</code>.
   * @alias module:model/HistoricalUsageMonthResponseAllOfData
   */
  function HistoricalUsageMonthResponseAllOfData() {
    _classCallCheck(this, HistoricalUsageMonthResponseAllOfData);

    HistoricalUsageMonthResponseAllOfData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HistoricalUsageMonthResponseAllOfData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HistoricalUsageMonthResponseAllOfData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalUsageMonthResponseAllOfData} obj Optional instance to populate.
     * @return {module:model/HistoricalUsageMonthResponseAllOfData} The populated <code>HistoricalUsageMonthResponseAllOfData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistoricalUsageMonthResponseAllOfData();

        if (data.hasOwnProperty('customer_id')) {
          obj['customer_id'] = _ApiClient["default"].convertToType(data['customer_id'], 'String');
        }

        if (data.hasOwnProperty('services')) {
          obj['services'] = _ApiClient["default"].convertToType(data['services'], {
            'String': {
              'String': _AdditionalProperties["default"]
            }
          });
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], {
            'String': Object
          });
        }
      }

      return obj;
    }
  }]);

  return HistoricalUsageMonthResponseAllOfData;
}();
/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */


HistoricalUsageMonthResponseAllOfData.prototype['customer_id'] = undefined;
/**
 * @member {Object.<String, Object.<String, module:model/AdditionalProperties>>} services
 */

HistoricalUsageMonthResponseAllOfData.prototype['services'] = undefined;
/**
 * @member {Object.<String, Object>} total
 */

HistoricalUsageMonthResponseAllOfData.prototype['total'] = undefined;
var _default = HistoricalUsageMonthResponseAllOfData;
exports["default"] = _default;