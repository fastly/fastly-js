"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BillingTotalExtras = _interopRequireDefault(require("./BillingTotalExtras"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BillingTotal model module.
 * @module model/BillingTotal
 * @version 3.0.0-alpha1
 */
var BillingTotal = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BillingTotal</code>.
   * @alias module:model/BillingTotal
   */
  function BillingTotal() {
    _classCallCheck(this, BillingTotal);

    BillingTotal.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BillingTotal, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BillingTotal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingTotal} obj Optional instance to populate.
     * @return {module:model/BillingTotal} The populated <code>BillingTotal</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BillingTotal();

        if (data.hasOwnProperty('bandwidth')) {
          obj['bandwidth'] = _ApiClient["default"].convertToType(data['bandwidth'], 'Number');
        }

        if (data.hasOwnProperty('bandwidth_cost')) {
          obj['bandwidth_cost'] = _ApiClient["default"].convertToType(data['bandwidth_cost'], 'Number');
        }

        if (data.hasOwnProperty('bandwidth_units')) {
          obj['bandwidth_units'] = _ApiClient["default"].convertToType(data['bandwidth_units'], 'String');
        }

        if (data.hasOwnProperty('cost')) {
          obj['cost'] = _ApiClient["default"].convertToType(data['cost'], 'Number');
        }

        if (data.hasOwnProperty('cost_before_discount')) {
          obj['cost_before_discount'] = _ApiClient["default"].convertToType(data['cost_before_discount'], 'Number');
        }

        if (data.hasOwnProperty('discount')) {
          obj['discount'] = _ApiClient["default"].convertToType(data['discount'], 'Number');
        }

        if (data.hasOwnProperty('extras')) {
          obj['extras'] = _ApiClient["default"].convertToType(data['extras'], [_BillingTotalExtras["default"]]);
        }

        if (data.hasOwnProperty('extras_cost')) {
          obj['extras_cost'] = _ApiClient["default"].convertToType(data['extras_cost'], 'Number');
        }

        if (data.hasOwnProperty('incurred_cost')) {
          obj['incurred_cost'] = _ApiClient["default"].convertToType(data['incurred_cost'], 'Number');
        }

        if (data.hasOwnProperty('overage')) {
          obj['overage'] = _ApiClient["default"].convertToType(data['overage'], 'Number');
        }

        if (data.hasOwnProperty('plan_code')) {
          obj['plan_code'] = _ApiClient["default"].convertToType(data['plan_code'], 'String');
        }

        if (data.hasOwnProperty('plan_minimum')) {
          obj['plan_minimum'] = _ApiClient["default"].convertToType(data['plan_minimum'], 'Number');
        }

        if (data.hasOwnProperty('plan_name')) {
          obj['plan_name'] = _ApiClient["default"].convertToType(data['plan_name'], 'String');
        }

        if (data.hasOwnProperty('requests')) {
          obj['requests'] = _ApiClient["default"].convertToType(data['requests'], 'Number');
        }

        if (data.hasOwnProperty('requests_cost')) {
          obj['requests_cost'] = _ApiClient["default"].convertToType(data['requests_cost'], 'Number');
        }

        if (data.hasOwnProperty('terms')) {
          obj['terms'] = _ApiClient["default"].convertToType(data['terms'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BillingTotal;
}();
/**
 * The total amount of bandwidth used this month (See bandwidth_units for measurement).
 * @member {Number} bandwidth
 */


BillingTotal.prototype['bandwidth'] = undefined;
/**
 * The cost of the bandwidth used this month in USD.
 * @member {Number} bandwidth_cost
 */

BillingTotal.prototype['bandwidth_cost'] = undefined;
/**
 * Bandwidth measurement units based on billing plan.
 * @member {String} bandwidth_units
 */

BillingTotal.prototype['bandwidth_units'] = undefined;
/**
 * The final amount to be paid.
 * @member {Number} cost
 */

BillingTotal.prototype['cost'] = undefined;
/**
 * Total incurred cost plus extras cost.
 * @member {Number} cost_before_discount
 */

BillingTotal.prototype['cost_before_discount'] = undefined;
/**
 * Calculated discount rate.
 * @member {Number} discount
 */

BillingTotal.prototype['discount'] = undefined;
/**
 * A list of any extras for this invoice.
 * @member {Array.<module:model/BillingTotalExtras>} extras
 */

BillingTotal.prototype['extras'] = undefined;
/**
 * Total cost of all extras.
 * @member {Number} extras_cost
 */

BillingTotal.prototype['extras_cost'] = undefined;
/**
 * The total cost of bandwidth and requests used this month.
 * @member {Number} incurred_cost
 */

BillingTotal.prototype['incurred_cost'] = undefined;
/**
 * How much over the plan minimum has been incurred.
 * @member {Number} overage
 */

BillingTotal.prototype['overage'] = undefined;
/**
 * The short code the plan this invoice was generated under.
 * @member {String} plan_code
 */

BillingTotal.prototype['plan_code'] = undefined;
/**
 * The minimum cost of this plan.
 * @member {Number} plan_minimum
 */

BillingTotal.prototype['plan_minimum'] = undefined;
/**
 * The name of the plan this invoice was generated under.
 * @member {String} plan_name
 */

BillingTotal.prototype['plan_name'] = undefined;
/**
 * The total number of requests used this month.
 * @member {Number} requests
 */

BillingTotal.prototype['requests'] = undefined;
/**
 * The cost of the requests used this month.
 * @member {Number} requests_cost
 */

BillingTotal.prototype['requests_cost'] = undefined;
/**
 * Payment terms. Almost always Net15.
 * @member {String} terms
 */

BillingTotal.prototype['terms'] = undefined;
var _default = BillingTotal;
exports["default"] = _default;