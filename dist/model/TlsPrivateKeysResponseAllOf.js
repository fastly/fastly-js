"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TlsPrivateKeyResponseData = _interopRequireDefault(require("./TlsPrivateKeyResponseData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TlsPrivateKeysResponseAllOf model module.
 * @module model/TlsPrivateKeysResponseAllOf
 * @version 3.0.0-alpha1
 */
var TlsPrivateKeysResponseAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsPrivateKeysResponseAllOf</code>.
   * @alias module:model/TlsPrivateKeysResponseAllOf
   */
  function TlsPrivateKeysResponseAllOf() {
    _classCallCheck(this, TlsPrivateKeysResponseAllOf);

    TlsPrivateKeysResponseAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsPrivateKeysResponseAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsPrivateKeysResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsPrivateKeysResponseAllOf} obj Optional instance to populate.
     * @return {module:model/TlsPrivateKeysResponseAllOf} The populated <code>TlsPrivateKeysResponseAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsPrivateKeysResponseAllOf();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_TlsPrivateKeyResponseData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TlsPrivateKeysResponseAllOf;
}();
/**
 * @member {Array.<module:model/TlsPrivateKeyResponseData>} data
 */


TlsPrivateKeysResponseAllOf.prototype['data'] = undefined;
var _default = TlsPrivateKeysResponseAllOf;
exports["default"] = _default;