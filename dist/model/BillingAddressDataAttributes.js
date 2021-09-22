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
 * The BillingAddressDataAttributes model module.
 * @module model/BillingAddressDataAttributes
 * @version 3.0.0-alpha1
 */
var BillingAddressDataAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BillingAddressDataAttributes</code>.
   * @alias module:model/BillingAddressDataAttributes
   */
  function BillingAddressDataAttributes() {
    _classCallCheck(this, BillingAddressDataAttributes);

    BillingAddressDataAttributes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BillingAddressDataAttributes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BillingAddressDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingAddressDataAttributes} obj Optional instance to populate.
     * @return {module:model/BillingAddressDataAttributes} The populated <code>BillingAddressDataAttributes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BillingAddressDataAttributes();

        if (data.hasOwnProperty('address_1')) {
          obj['address_1'] = _ApiClient["default"].convertToType(data['address_1'], 'String');
        }

        if (data.hasOwnProperty('address_2')) {
          obj['address_2'] = _ApiClient["default"].convertToType(data['address_2'], 'String');
        }

        if (data.hasOwnProperty('city')) {
          obj['city'] = _ApiClient["default"].convertToType(data['city'], 'String');
        }

        if (data.hasOwnProperty('country')) {
          obj['country'] = _ApiClient["default"].convertToType(data['country'], 'String');
        }

        if (data.hasOwnProperty('locality')) {
          obj['locality'] = _ApiClient["default"].convertToType(data['locality'], 'String');
        }

        if (data.hasOwnProperty('postal_code')) {
          obj['postal_code'] = _ApiClient["default"].convertToType(data['postal_code'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }
      }

      return obj;
    }
  }]);

  return BillingAddressDataAttributes;
}();
/**
 * The first address line.
 * @member {String} address_1
 */


BillingAddressDataAttributes.prototype['address_1'] = undefined;
/**
 * The second address line.
 * @member {String} address_2
 */

BillingAddressDataAttributes.prototype['address_2'] = undefined;
/**
 * The city name.
 * @member {String} city
 */

BillingAddressDataAttributes.prototype['city'] = undefined;
/**
 * ISO 3166-1 two-letter country code.
 * @member {String} country
 */

BillingAddressDataAttributes.prototype['country'] = undefined;
/**
 * Other locality.
 * @member {String} locality
 */

BillingAddressDataAttributes.prototype['locality'] = undefined;
/**
 * Postal code (ZIP code for US addresses).
 * @member {String} postal_code
 */

BillingAddressDataAttributes.prototype['postal_code'] = undefined;
/**
 * The state or province name.
 * @member {String} state
 */

BillingAddressDataAttributes.prototype['state'] = undefined;
var _default = BillingAddressDataAttributes;
exports["default"] = _default;