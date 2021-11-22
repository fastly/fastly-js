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
 * The BillingEstimateResponseAllOfLine model module.
 * @module model/BillingEstimateResponseAllOfLine
 * @version 3.0.0-alpha1
 */
var BillingEstimateResponseAllOfLine = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BillingEstimateResponseAllOfLine</code>.
   * @alias module:model/BillingEstimateResponseAllOfLine
   */
  function BillingEstimateResponseAllOfLine() {
    _classCallCheck(this, BillingEstimateResponseAllOfLine);

    BillingEstimateResponseAllOfLine.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BillingEstimateResponseAllOfLine, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BillingEstimateResponseAllOfLine</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingEstimateResponseAllOfLine} obj Optional instance to populate.
     * @return {module:model/BillingEstimateResponseAllOfLine} The populated <code>BillingEstimateResponseAllOfLine</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BillingEstimateResponseAllOfLine();

        if (data.hasOwnProperty('plan_no')) {
          obj['plan_no'] = _ApiClient["default"].convertToType(data['plan_no'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('units')) {
          obj['units'] = _ApiClient["default"].convertToType(data['units'], 'Number');
        }

        if (data.hasOwnProperty('per_unit_cost')) {
          obj['per_unit_cost'] = _ApiClient["default"].convertToType(data['per_unit_cost'], 'Number');
        }

        if (data.hasOwnProperty('service_no')) {
          obj['service_no'] = _ApiClient["default"].convertToType(data['service_no'], 'Number');
        }

        if (data.hasOwnProperty('service_type')) {
          obj['service_type'] = _ApiClient["default"].convertToType(data['service_type'], 'String');
        }

        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }

        if (data.hasOwnProperty('client_service_id')) {
          obj['client_service_id'] = _ApiClient["default"].convertToType(data['client_service_id'], 'String');
        }

        if (data.hasOwnProperty('client_plan_id')) {
          obj['client_plan_id'] = _ApiClient["default"].convertToType(data['client_plan_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BillingEstimateResponseAllOfLine;
}();
/**
 * @member {Number} plan_no
 */


BillingEstimateResponseAllOfLine.prototype['plan_no'] = undefined;
/**
 * @member {String} description
 */

BillingEstimateResponseAllOfLine.prototype['description'] = undefined;
/**
 * @member {Number} units
 */

BillingEstimateResponseAllOfLine.prototype['units'] = undefined;
/**
 * @member {Number} per_unit_cost
 */

BillingEstimateResponseAllOfLine.prototype['per_unit_cost'] = undefined;
/**
 * @member {Number} service_no
 */

BillingEstimateResponseAllOfLine.prototype['service_no'] = undefined;
/**
 * @member {String} service_type
 */

BillingEstimateResponseAllOfLine.prototype['service_type'] = undefined;
/**
 * @member {Number} amount
 */

BillingEstimateResponseAllOfLine.prototype['amount'] = undefined;
/**
 * @member {String} client_service_id
 */

BillingEstimateResponseAllOfLine.prototype['client_service_id'] = undefined;
/**
 * @member {String} client_plan_id
 */

BillingEstimateResponseAllOfLine.prototype['client_plan_id'] = undefined;
var _default = BillingEstimateResponseAllOfLine;
exports["default"] = _default;