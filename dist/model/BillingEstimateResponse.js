"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Billing = _interopRequireDefault(require("./Billing"));

var _BillingEstimateResponseAllOf = _interopRequireDefault(require("./BillingEstimateResponseAllOf"));

var _BillingEstimateResponseAllOfLines = _interopRequireDefault(require("./BillingEstimateResponseAllOfLines"));

var _BillingStatus = _interopRequireDefault(require("./BillingStatus"));

var _BillingTotal = _interopRequireDefault(require("./BillingTotal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BillingEstimateResponse model module.
 * @module model/BillingEstimateResponse
 * @version 3.0.0-alpha1
 */
var BillingEstimateResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BillingEstimateResponse</code>.
   * @alias module:model/BillingEstimateResponse
   */
  function BillingEstimateResponse() {
    _classCallCheck(this, BillingEstimateResponse);

    BillingEstimateResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BillingEstimateResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BillingEstimateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingEstimateResponse} obj Optional instance to populate.
     * @return {module:model/BillingEstimateResponse} The populated <code>BillingEstimateResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BillingEstimateResponse();

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

        if (data.hasOwnProperty('lines')) {
          obj['lines'] = _ApiClient["default"].convertToType(data['lines'], [_BillingEstimateResponseAllOfLines["default"]]);
        }
      }

      return obj;
    }
  }]);

  return BillingEstimateResponse;
}();
/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */


BillingEstimateResponse.prototype['customer_id'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} end_time
 */

BillingEstimateResponse.prototype['end_time'] = undefined;
/**
 * Alphanumeric string identifying the invoice.
 * @member {String} invoice_id
 */

BillingEstimateResponse.prototype['invoice_id'] = undefined;
/**
 * @member {Object.<String, Object.<String, Object>>} regions
 */

BillingEstimateResponse.prototype['regions'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} start_time
 */

BillingEstimateResponse.prototype['start_time'] = undefined;
/**
 * @member {module:model/BillingStatus} status
 */

BillingEstimateResponse.prototype['status'] = undefined;
/**
 * @member {module:model/BillingTotal} total
 */

BillingEstimateResponse.prototype['total'] = undefined;
/**
 * @member {Array.<module:model/BillingEstimateResponseAllOfLines>} lines
 */

BillingEstimateResponse.prototype['lines'] = undefined;
var _default = BillingEstimateResponse;
exports["default"] = _default;