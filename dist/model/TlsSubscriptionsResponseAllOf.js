"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TlsSubscriptionResponse = _interopRequireDefault(require("./TlsSubscriptionResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsSubscriptionsResponseAllOf model module.
 * @module model/TlsSubscriptionsResponseAllOf
 * @version 3.0.0-alpha1
 */
var TlsSubscriptionsResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsSubscriptionsResponseAllOf</code>.
   * @alias module:model/TlsSubscriptionsResponseAllOf
   */
  function TlsSubscriptionsResponseAllOf() {
    _classCallCheck(this, TlsSubscriptionsResponseAllOf);

    TlsSubscriptionsResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsSubscriptionsResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsSubscriptionsResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsSubscriptionsResponseAllOf} obj Optional instance to populate.
     * @return {module:model/TlsSubscriptionsResponseAllOf} The populated <code>TlsSubscriptionsResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsSubscriptionsResponseAllOf();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_TlsSubscriptionResponse["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TlsSubscriptionsResponseAllOf;
}();
/**
 * @member {Array.<module:model/TlsSubscriptionResponse>} data
 */


TlsSubscriptionsResponseAllOf.prototype['data'] = undefined;
var _default = TlsSubscriptionsResponseAllOf;
exports["default"] = _default;