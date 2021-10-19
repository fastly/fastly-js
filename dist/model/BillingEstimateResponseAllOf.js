"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BillingEstimateResponseAllOfLines = _interopRequireDefault(require("./BillingEstimateResponseAllOfLines"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BillingEstimateResponseAllOf model module.
 * @module model/BillingEstimateResponseAllOf
 * @version 3.0.0-alpha1
 */
var BillingEstimateResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BillingEstimateResponseAllOf</code>.
   * @alias module:model/BillingEstimateResponseAllOf
   */
  function BillingEstimateResponseAllOf() {
    _classCallCheck(this, BillingEstimateResponseAllOf);

    BillingEstimateResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BillingEstimateResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BillingEstimateResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingEstimateResponseAllOf} obj Optional instance to populate.
     * @return {module:model/BillingEstimateResponseAllOf} The populated <code>BillingEstimateResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BillingEstimateResponseAllOf();

        if (data.hasOwnProperty('lines')) {
          obj['lines'] = _ApiClient["default"].convertToType(data['lines'], [_BillingEstimateResponseAllOfLines["default"]]);
        }
      }

      return obj;
    }
  }]);

  return BillingEstimateResponseAllOf;
}();
/**
 * @member {Array.<module:model/BillingEstimateResponseAllOfLines>} lines
 */


BillingEstimateResponseAllOf.prototype['lines'] = undefined;
var _default = BillingEstimateResponseAllOf;
exports["default"] = _default;