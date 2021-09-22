"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsSubscriptionResponseDataAllOf model module.
 * @module model/TlsSubscriptionResponseDataAllOf
 * @version 3.0.0-alpha1
 */
var TlsSubscriptionResponseDataAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsSubscriptionResponseDataAllOf</code>.
   * @alias module:model/TlsSubscriptionResponseDataAllOf
   */
  function TlsSubscriptionResponseDataAllOf() {
    _classCallCheck(this, TlsSubscriptionResponseDataAllOf);

    TlsSubscriptionResponseDataAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsSubscriptionResponseDataAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsSubscriptionResponseDataAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsSubscriptionResponseDataAllOf} obj Optional instance to populate.
     * @return {module:model/TlsSubscriptionResponseDataAllOf} The populated <code>TlsSubscriptionResponseDataAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsSubscriptionResponseDataAllOf();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], _Timestamps["default"]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TlsSubscriptionResponseDataAllOf;
}();
/**
 * @member {module:model/Timestamps} attributes
 */


TlsSubscriptionResponseDataAllOf.prototype['attributes'] = undefined;
/**
 * Alphanumeric string identifying a TLS subscription.
 * @member {String} id
 */

TlsSubscriptionResponseDataAllOf.prototype['id'] = undefined;
var _default = TlsSubscriptionResponseDataAllOf;
exports["default"] = _default;