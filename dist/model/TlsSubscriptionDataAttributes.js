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
 * The TlsSubscriptionDataAttributes model module.
 * @module model/TlsSubscriptionDataAttributes
 * @version 3.0.0-alpha1
 */
var TlsSubscriptionDataAttributes = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsSubscriptionDataAttributes</code>.
   * @alias module:model/TlsSubscriptionDataAttributes
   */
  function TlsSubscriptionDataAttributes() {
    _classCallCheck(this, TlsSubscriptionDataAttributes);

    TlsSubscriptionDataAttributes.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsSubscriptionDataAttributes, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsSubscriptionDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsSubscriptionDataAttributes} obj Optional instance to populate.
     * @return {module:model/TlsSubscriptionDataAttributes} The populated <code>TlsSubscriptionDataAttributes</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsSubscriptionDataAttributes();

        if (data.hasOwnProperty('certificate_authority')) {
          obj['certificate_authority'] = _ApiClient["default"].convertToType(data['certificate_authority'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TlsSubscriptionDataAttributes;
}();
/**
 * The entity that issues and certifies the TLS certificates for your subscription.
 * @member {module:model/TlsSubscriptionDataAttributes.CertificateAuthorityEnum} certificate_authority
 */


TlsSubscriptionDataAttributes.prototype['certificate_authority'] = undefined;
/**
 * Allowed values for the <code>certificate_authority</code> property.
 * @enum {String}
 * @readonly
 */

TlsSubscriptionDataAttributes['CertificateAuthorityEnum'] = {
  /**
   * value: "lets-encrypt"
   * @const
   */
  "lets-encrypt": "lets-encrypt",

  /**
   * value: "globalsign"
   * @const
   */
  "globalsign": "globalsign"
};
var _default = TlsSubscriptionDataAttributes;
exports["default"] = _default;