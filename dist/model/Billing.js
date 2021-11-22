"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BillingStatus = _interopRequireDefault(require("./BillingStatus"));

var _BillingTotal = _interopRequireDefault(require("./BillingTotal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Billing model module.
 * @module model/Billing
 * @version 3.0.0-alpha1
 */
var Billing = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Billing</code>.
   * @alias module:model/Billing
   */
  function Billing() {
    _classCallCheck(this, Billing);

    Billing.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Billing, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Billing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Billing} obj Optional instance to populate.
     * @return {module:model/Billing} The populated <code>Billing</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Billing();

        if (data.hasOwnProperty('end_time')) {
          obj['end_time'] = _ApiClient["default"].convertToType(data['end_time'], 'String');
        }

        if (data.hasOwnProperty('start_time')) {
          obj['start_time'] = _ApiClient["default"].convertToType(data['start_time'], 'String');
        }

        if (data.hasOwnProperty('invoice_id')) {
          obj['invoice_id'] = _ApiClient["default"].convertToType(data['invoice_id'], 'String');
        }

        if (data.hasOwnProperty('customer_id')) {
          obj['customer_id'] = _ApiClient["default"].convertToType(data['customer_id'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _BillingStatus["default"].constructFromObject(data['status']);
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _BillingTotal["default"].constructFromObject(data['total']);
        }

        if (data.hasOwnProperty('regions')) {
          obj['regions'] = _ApiClient["default"].convertToType(data['regions'], {
            'String': {
              'String': Object
            }
          });
        }
      }

      return obj;
    }
  }]);

  return Billing;
}();
/**
 * Date and time in ISO 8601 format.
 * @member {String} end_time
 */


Billing.prototype['end_time'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} start_time
 */

Billing.prototype['start_time'] = undefined;
/**
 * Alphanumeric string identifying the invoice.
 * @member {String} invoice_id
 */

Billing.prototype['invoice_id'] = undefined;
/**
 * Alphanumeric string identifying the customer.
 * @member {String} customer_id
 */

Billing.prototype['customer_id'] = undefined;
/**
 * @member {module:model/BillingStatus} status
 */

Billing.prototype['status'] = undefined;
/**
 * @member {module:model/BillingTotal} total
 */

Billing.prototype['total'] = undefined;
/**
 * @member {Object.<String, Object.<String, Object>>} regions
 */

Billing.prototype['regions'] = undefined;
var _default = Billing;
exports["default"] = _default;