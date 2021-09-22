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
 * The PoolAllOf model module.
 * @module model/PoolAllOf
 * @version 3.0.0-alpha1
 */
var PoolAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PoolAllOf</code>.
   * @alias module:model/PoolAllOf
   */
  function PoolAllOf() {
    _classCallCheck(this, PoolAllOf);

    PoolAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PoolAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PoolAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PoolAllOf} obj Optional instance to populate.
     * @return {module:model/PoolAllOf} The populated <code>PoolAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PoolAllOf();

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('connect_timeout')) {
          obj['connect_timeout'] = _ApiClient["default"].convertToType(data['connect_timeout'], 'Number');
        }

        if (data.hasOwnProperty('first_byte_timeout')) {
          obj['first_byte_timeout'] = _ApiClient["default"].convertToType(data['first_byte_timeout'], 'Number');
        }

        if (data.hasOwnProperty('healthcheck')) {
          obj['healthcheck'] = _ApiClient["default"].convertToType(data['healthcheck'], 'String');
        }

        if (data.hasOwnProperty('max_conn_default')) {
          obj['max_conn_default'] = _ApiClient["default"].convertToType(data['max_conn_default'], 'Number');
        }

        if (data.hasOwnProperty('max_tls_version')) {
          obj['max_tls_version'] = _ApiClient["default"].convertToType(data['max_tls_version'], 'Number');
        }

        if (data.hasOwnProperty('min_tls_version')) {
          obj['min_tls_version'] = _ApiClient["default"].convertToType(data['min_tls_version'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('override_host')) {
          obj['override_host'] = _ApiClient["default"].convertToType(data['override_host'], 'String');
        }

        if (data.hasOwnProperty('quorum')) {
          obj['quorum'] = _ApiClient["default"].convertToType(data['quorum'], 'Number');
        }

        if (data.hasOwnProperty('request_condition')) {
          obj['request_condition'] = _ApiClient["default"].convertToType(data['request_condition'], 'String');
        }

        if (data.hasOwnProperty('shield')) {
          obj['shield'] = _ApiClient["default"].convertToType(data['shield'], 'String');
        }

        if (data.hasOwnProperty('tls_check_cert')) {
          obj['tls_check_cert'] = _ApiClient["default"].convertToType(data['tls_check_cert'], 'Number');
        }

        if (data.hasOwnProperty('tls_ciphers')) {
          obj['tls_ciphers'] = _ApiClient["default"].convertToType(data['tls_ciphers'], 'String');
        }

        if (data.hasOwnProperty('tls_sni_hostname')) {
          obj['tls_sni_hostname'] = _ApiClient["default"].convertToType(data['tls_sni_hostname'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PoolAllOf;
}();
/**
 * A freeform descriptive note.
 * @member {String} comment
 */


PoolAllOf.prototype['comment'] = undefined;
/**
 * How long to wait for a timeout in milliseconds. Optional.
 * @member {Number} connect_timeout
 */

PoolAllOf.prototype['connect_timeout'] = undefined;
/**
 * How long to wait for the first byte in milliseconds. Optional.
 * @member {Number} first_byte_timeout
 */

PoolAllOf.prototype['first_byte_timeout'] = undefined;
/**
 * Name of the healthcheck to use with this pool. Can be empty and could be reused across multiple backend and pools.
 * @member {String} healthcheck
 */

PoolAllOf.prototype['healthcheck'] = undefined;
/**
 * Maximum number of connections.
 * @member {Number} max_conn_default
 */

PoolAllOf.prototype['max_conn_default'] = undefined;
/**
 * Maximum allowed TLS version on connections to this server. Optional.
 * @member {Number} max_tls_version
 */

PoolAllOf.prototype['max_tls_version'] = undefined;
/**
 * Minimum allowed TLS version on connections to this server. Optional.
 * @member {Number} min_tls_version
 */

PoolAllOf.prototype['min_tls_version'] = undefined;
/**
 * Name for the Pool.
 * @member {String} name
 */

PoolAllOf.prototype['name'] = undefined;
/**
 * The hostname to [override the Host header](https://docs.fastly.com/en/guides/specifying-an-override-host). Defaults to `null` meaning no override of the Host header will occur. This setting can also be added to a Server definition. If the field is set on a Server definition it will override the Pool setting.
 * @member {String} override_host
 * @default 'null'
 */

PoolAllOf.prototype['override_host'] = 'null';
/**
 * Percentage of capacity (`0-100`) that needs to be operationally available for a pool to be considered up.
 * @member {Number} quorum
 * @default 75
 */

PoolAllOf.prototype['quorum'] = 75;
/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */

PoolAllOf.prototype['request_condition'] = undefined;
/**
 * Selected POP to serve as a shield for the servers. Defaults to `null` meaning no origin shielding if not set. Refer to the [POPs API endpoint](/reference/api/utils/pops/) to get a list of available POPs used for shielding.
 * @member {String} shield
 * @default 'null'
 */

PoolAllOf.prototype['shield'] = 'null';
/**
 * Be strict on checking TLS certs. Optional.
 * @member {Number} tls_check_cert
 */

PoolAllOf.prototype['tls_check_cert'] = undefined;
/**
 * List of OpenSSL ciphers (see the [openssl.org manpages](https://www.openssl.org/docs/man1.0.2/man1/ciphers) for details). Optional.
 * @member {String} tls_ciphers
 */

PoolAllOf.prototype['tls_ciphers'] = undefined;
/**
 * SNI hostname. Optional.
 * @member {String} tls_sni_hostname
 */

PoolAllOf.prototype['tls_sni_hostname'] = undefined;
/**
 * What type of load balance group to use.
 * @member {module:model/PoolAllOf.TypeEnum} type
 */

PoolAllOf.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

PoolAllOf['TypeEnum'] = {
  /**
   * value: "random"
   * @const
   */
  "random": "random",

  /**
   * value: "hash"
   * @const
   */
  "hash": "hash",

  /**
   * value: "client"
   * @const
   */
  "client": "client"
};
var _default = PoolAllOf;
exports["default"] = _default;