"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BillingAddress = _interopRequireDefault(require("./BillingAddress"));

var _BillingAddressResponseAllOf = _interopRequireDefault(require("./BillingAddressResponseAllOf"));

var _BillingAddressResponseAllOfData = _interopRequireDefault(require("./BillingAddressResponseAllOfData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BillingAddressResponse model module.
 * @module model/BillingAddressResponse
 * @version 3.0.0-alpha1
 */
var BillingAddressResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BillingAddressResponse</code>.
   * @alias module:model/BillingAddressResponse
   * @implements module:model/BillingAddress
   * @implements module:model/BillingAddressResponseAllOf
   */
  function BillingAddressResponse() {
    _classCallCheck(this, BillingAddressResponse);

    _BillingAddress["default"].initialize(this);

    _BillingAddressResponseAllOf["default"].initialize(this);

    BillingAddressResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BillingAddressResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BillingAddressResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BillingAddressResponse} obj Optional instance to populate.
     * @return {module:model/BillingAddressResponse} The populated <code>BillingAddressResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BillingAddressResponse();

        _BillingAddress["default"].constructFromObject(data, obj);

        _BillingAddressResponseAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('data')) {
          obj['data'] = _BillingAddressResponseAllOfData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return BillingAddressResponse;
}();
/**
 * @member {module:model/BillingAddressResponseAllOfData} data
 */


BillingAddressResponse.prototype['data'] = undefined; // Implement BillingAddress interface:

/**
 * @member {module:model/BillingAddressData} data
 */

_BillingAddress["default"].prototype['data'] = undefined; // Implement BillingAddressResponseAllOf interface:

/**
 * @member {module:model/BillingAddressResponseAllOfData} data
 */

_BillingAddressResponseAllOf["default"].prototype['data'] = undefined;
var _default = BillingAddressResponse;
exports["default"] = _default;