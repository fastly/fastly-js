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
 * The TlsCommon model module.
 * @module model/TlsCommon
 * @version 3.0.0-alpha1
 */
var TlsCommon = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TlsCommon</code>.
   * @alias module:model/TlsCommon
   */
  function TlsCommon() {
    _classCallCheck(this, TlsCommon);

    TlsCommon.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TlsCommon, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TlsCommon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TlsCommon} obj Optional instance to populate.
     * @return {module:model/TlsCommon} The populated <code>TlsCommon</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TlsCommon();

        if (data.hasOwnProperty('tls_ca_cert')) {
          obj['tls_ca_cert'] = _ApiClient["default"].convertToType(data['tls_ca_cert'], 'String');
        }

        if (data.hasOwnProperty('tls_client_cert')) {
          obj['tls_client_cert'] = _ApiClient["default"].convertToType(data['tls_client_cert'], 'String');
        }

        if (data.hasOwnProperty('tls_client_key')) {
          obj['tls_client_key'] = _ApiClient["default"].convertToType(data['tls_client_key'], 'String');
        }

        if (data.hasOwnProperty('tls_cert_hostname')) {
          obj['tls_cert_hostname'] = _ApiClient["default"].convertToType(data['tls_cert_hostname'], 'String');
        }

        if (data.hasOwnProperty('use_tls')) {
          obj['use_tls'] = _ApiClient["default"].convertToType(data['use_tls'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TlsCommon;
}();
/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */


TlsCommon.prototype['tls_ca_cert'] = 'null';
/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */

TlsCommon.prototype['tls_client_cert'] = 'null';
/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */

TlsCommon.prototype['tls_client_key'] = 'null';
/**
 * The hostname used to verify a server's certificate. It can either be the Common Name (CN) or a Subject Alternative Name (SAN).
 * @member {String} tls_cert_hostname
 * @default 'null'
 */

TlsCommon.prototype['tls_cert_hostname'] = 'null';
/**
 * Whether to use TLS.
 * @member {module:model/TlsCommon.UseTlsEnum} use_tls
 * @default UseTlsEnum.no_tls
 */

TlsCommon.prototype['use_tls'] = undefined;
/**
 * Allowed values for the <code>use_tls</code> property.
 * @enum {Number}
 * @readonly
 */

TlsCommon['UseTlsEnum'] = {
  /**
   * value: 0
   * @const
   */
  "no_tls": 0,

  /**
   * value: 1
   * @const
   */
  "use_tls": 1
};
var _default = TlsCommon;
exports["default"] = _default;