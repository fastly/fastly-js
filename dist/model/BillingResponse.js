"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Billing = _interopRequireDefault(require("./Billing"));

var _BillingResponseAllOf = _interopRequireDefault(require("./BillingResponseAllOf"));

var _BillingStatus = _interopRequireDefault(require("./BillingStatus"));

var _BillingTotal = _interopRequireDefault(require("./BillingTotal"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BillingResponse model module.
 * @module model/BillingResponse
 * @version 3.0.0-alpha1
 */
var BillingResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BillingResponse</code>.
   * @alias module:model/BillingResponse
   */
  function BillingResponse() {
    _classCallCheck(this, BillingResponse);

    BillingResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BillingResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BillingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingResponse} obj Optional instance to populate.
     * @return {module:model/BillingResponse} The populated <code>BillingResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BillingResponse();

        if (data.hasOwnProperty('customer_id')) {
          obj['customer_id'] = _ApiClient["default"].convertToType(data['customer_id'], 'String');
        }

        if (data.hasOwnProperty('end_time')) {
          obj['end_time'] = _ApiClient["default"].convertToType(data['end_time'], 'String');
        }

        if (data.hasOwnProperty('invoice_id')) {
          obj['invoice_id'] = _ApiClient["default"].convertToType(data['invoice_id'], 'String');
        }

        if (data.hasOwnProperty('regions')) {
          obj['regions'] = _ApiClient["default"].convertToType(data['regions'], {
            'String': {
              'String': Object
            }
          });
        }

        if (data.hasOwnProperty('start_time')) {
          obj['start_time'] = _ApiClient["default"].convertToType(data['start_time'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _BillingStatus["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _BillingTotal["default"].constructFromObject(data['total']);
        }

        if (data.hasOwnProperty('line_items')) {
          obj['line_items'] = _ApiClient["default"].convertToType(data['line_items'], [_Timestamps["default"]]);
        }
      }

      return obj;
    }
  }]);

  return BillingResponse;
}();
/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */


BillingResponse.prototype['customer_id'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} end_time
 */

BillingResponse.prototype['end_time'] = undefined;
/**
 * Alphanumeric string identifying the invoice.
 * @member {String} invoice_id
 */

BillingResponse.prototype['invoice_id'] = undefined;
/**
 * @member {Object.<String, Object.<String, Object>>} regions
 */

BillingResponse.prototype['regions'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} start_time
 */

BillingResponse.prototype['start_time'] = undefined;
/**
 * @member {module:model/BillingStatus} status
 */

BillingResponse.prototype['status'] = undefined;
/**
 * @member {module:model/BillingTotal} total
 */

BillingResponse.prototype['total'] = undefined;
/**
 * @member {Array.<module:model/Timestamps>} line_items
 */

BillingResponse.prototype['line_items'] = undefined;
var _default = BillingResponse;
exports["default"] = _default;