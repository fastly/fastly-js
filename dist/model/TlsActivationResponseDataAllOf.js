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
 * The TlsActivationResponseDataAllOf model module.
 * @module model/TlsActivationResponseDataAllOf
 * @version 3.0.0-alpha1
 */
var TlsActivationResponseDataAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsActivationResponseDataAllOf</code>.
   * @alias module:model/TlsActivationResponseDataAllOf
   */
  function TlsActivationResponseDataAllOf() {
    _classCallCheck(this, TlsActivationResponseDataAllOf);

    TlsActivationResponseDataAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsActivationResponseDataAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsActivationResponseDataAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsActivationResponseDataAllOf} obj Optional instance to populate.
     * @return {module:model/TlsActivationResponseDataAllOf} The populated <code>TlsActivationResponseDataAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsActivationResponseDataAllOf();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _Timestamps["default"].constructFromObject(data['attributes']);
        }
      }

      return obj;
    }
  }]);

  return TlsActivationResponseDataAllOf;
}();
/**
 * Alphanumeric string identifying a TLS activation.
 * @member {String} id
 */


TlsActivationResponseDataAllOf.prototype['id'] = undefined;
/**
 * @member {module:model/Timestamps} attributes
 */

TlsActivationResponseDataAllOf.prototype['attributes'] = undefined;
var _default = TlsActivationResponseDataAllOf;
exports["default"] = _default;