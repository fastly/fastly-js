"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BillingAddressDataAttributes = _interopRequireDefault(require("./BillingAddressDataAttributes"));

var _RelationshipCustomer = _interopRequireDefault(require("./RelationshipCustomer"));

var _TypeBillingAddress = _interopRequireDefault(require("./TypeBillingAddress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BillingAddressData model module.
 * @module model/BillingAddressData
 * @version 3.0.0-alpha1
 */
var BillingAddressData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BillingAddressData</code>.
   * @alias module:model/BillingAddressData
   */
  function BillingAddressData() {
    _classCallCheck(this, BillingAddressData);

    BillingAddressData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BillingAddressData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BillingAddressData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingAddressData} obj Optional instance to populate.
     * @return {module:model/BillingAddressData} The populated <code>BillingAddressData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BillingAddressData();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _BillingAddressDataAttributes["default"].constructFromObject(data['attributes']);
        }

        if (data.hasOwnProperty('relationships')) {
          obj['relationships'] = _RelationshipCustomer["default"].constructFromObject(data['relationships']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _TypeBillingAddress["default"].constructFromObject(data['type']);
        }
      }

      return obj;
    }
  }]);

  return BillingAddressData;
}();
/**
 * @member {module:model/BillingAddressDataAttributes} attributes
 */


BillingAddressData.prototype['attributes'] = undefined;
/**
 * @member {module:model/RelationshipCustomer} relationships
 */

BillingAddressData.prototype['relationships'] = undefined;
/**
 * @member {module:model/TypeBillingAddress} type
 */

BillingAddressData.prototype['type'] = undefined;
var _default = BillingAddressData;
exports["default"] = _default;