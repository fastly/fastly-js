"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Backend = _interopRequireDefault(require("./Backend"));

var _BackendResponseAllOf = _interopRequireDefault(require("./BackendResponseAllOf"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BackendResponse model module.
 * @module model/BackendResponse
 * @version 3.0.0-alpha1
 */
var BackendResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BackendResponse</code>.
   * @alias module:model/BackendResponse
   */
  function BackendResponse() {
    _classCallCheck(this, BackendResponse);

    BackendResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BackendResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BackendResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BackendResponse} obj Optional instance to populate.
     * @return {module:model/BackendResponse} The populated <code>BackendResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BackendResponse();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('auto_loadbalance')) {
          obj['auto_loadbalance'] = _ApiClient["default"].convertToType(data['auto_loadbalance'], 'Boolean');
        }

        if (data.hasOwnProperty('between_bytes_timeout')) {
          obj['between_bytes_timeout'] = _ApiClient["default"].convertToType(data['between_bytes_timeout'], 'Number');
        }

        if (data.hasOwnProperty('client_cert')) {
          obj['client_cert'] = _ApiClient["default"].convertToType(data['client_cert'], 'String');
        }

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

        if (data.hasOwnProperty('hostname')) {
          obj['hostname'] = _ApiClient["default"].convertToType(data['hostname'], 'String');
        }

        if (data.hasOwnProperty('ipv4')) {
          obj['ipv4'] = _ApiClient["default"].convertToType(data['ipv4'], 'String');
        }

        if (data.hasOwnProperty('ipv6')) {
          obj['ipv6'] = _ApiClient["default"].convertToType(data['ipv6'], 'String');
        }

        if (data.hasOwnProperty('max_conn')) {
          obj['max_conn'] = _ApiClient["default"].convertToType(data['max_conn'], 'Number');
        }

        if (data.hasOwnProperty('max_tls_version')) {
          obj['max_tls_version'] = _ApiClient["default"].convertToType(data['max_tls_version'], 'String');
        }

        if (data.hasOwnProperty('min_tls_version')) {
          obj['min_tls_version'] = _ApiClient["default"].convertToType(data['min_tls_version'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('override_host')) {
          obj['override_host'] = _ApiClient["default"].convertToType(data['override_host'], 'String');
        }

        if (data.hasOwnProperty('port')) {
          obj['port'] = _ApiClient["default"].convertToType(data['port'], 'Number');
        }

        if (data.hasOwnProperty('request_condition')) {
          obj['request_condition'] = _ApiClient["default"].convertToType(data['request_condition'], 'String');
        }

        if (data.hasOwnProperty('shield')) {
          obj['shield'] = _ApiClient["default"].convertToType(data['shield'], 'String');
        }

        if (data.hasOwnProperty('ssl_ca_cert')) {
          obj['ssl_ca_cert'] = _ApiClient["default"].convertToType(data['ssl_ca_cert'], 'String');
        }

        if (data.hasOwnProperty('ssl_cert_hostname')) {
          obj['ssl_cert_hostname'] = _ApiClient["default"].convertToType(data['ssl_cert_hostname'], 'String');
        }

        if (data.hasOwnProperty('ssl_check_cert')) {
          obj['ssl_check_cert'] = _ApiClient["default"].convertToType(data['ssl_check_cert'], 'Boolean');
        }

        if (data.hasOwnProperty('ssl_ciphers')) {
          obj['ssl_ciphers'] = _ApiClient["default"].convertToType(data['ssl_ciphers'], 'String');
        }

        if (data.hasOwnProperty('ssl_client_cert')) {
          obj['ssl_client_cert'] = _ApiClient["default"].convertToType(data['ssl_client_cert'], 'String');
        }

        if (data.hasOwnProperty('ssl_client_key')) {
          obj['ssl_client_key'] = _ApiClient["default"].convertToType(data['ssl_client_key'], 'String');
        }

        if (data.hasOwnProperty('ssl_hostname')) {
          obj['ssl_hostname'] = _ApiClient["default"].convertToType(data['ssl_hostname'], 'String');
        }

        if (data.hasOwnProperty('ssl_sni_hostname')) {
          obj['ssl_sni_hostname'] = _ApiClient["default"].convertToType(data['ssl_sni_hostname'], 'String');
        }

        if (data.hasOwnProperty('use_ssl')) {
          obj['use_ssl'] = _ApiClient["default"].convertToType(data['use_ssl'], 'Boolean');
        }

        if (data.hasOwnProperty('weight')) {
          obj['weight'] = _ApiClient["default"].convertToType(data['weight'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('deleted_at')) {
          obj['deleted_at'] = _ApiClient["default"].convertToType(data['deleted_at'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('service_id')) {
          obj['service_id'] = _ApiClient["default"].convertToType(data['service_id'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }

        if (data.hasOwnProperty('locked')) {
          obj['locked'] = _ApiClient["default"].convertToType(data['locked'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return BackendResponse;
}();
/**
 * A hostname, IPv4, or IPv6 address for the backend. This is the preferred way to specify the location of your backend.
 * @member {String} address
 */


BackendResponse.prototype['address'] = undefined;
/**
 * Whether or not this backend should be automatically load balanced. If true, all backends with this setting that don't have a `request_condition` will be selected based on their `weight`.
 * @member {Boolean} auto_loadbalance
 */

BackendResponse.prototype['auto_loadbalance'] = undefined;
/**
 * Maximum duration in milliseconds that Fastly will wait while receiving no data on a download from a backend. If exceeded, the response received so far will be considered complete and the fetch will end. May be set at runtime using `bereq.between_bytes_timeout`.
 * @member {Number} between_bytes_timeout
 */

BackendResponse.prototype['between_bytes_timeout'] = undefined;
/**
 * Unused.
 * @member {String} client_cert
 */

BackendResponse.prototype['client_cert'] = undefined;
/**
 * A freeform descriptive note.
 * @member {String} comment
 */

BackendResponse.prototype['comment'] = undefined;
/**
 * Maximum duration in milliseconds to wait for a connection to this backend to be established. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.connect_timeout`.
 * @member {Number} connect_timeout
 */

BackendResponse.prototype['connect_timeout'] = undefined;
/**
 * Maximum duration in milliseconds to wait for the server response to begin after a TCP connection is established and the request has been sent. If exceeded, the connection is aborted and a synthethic `503` response will be presented instead. May be set at runtime using `bereq.first_byte_timeout`.
 * @member {Number} first_byte_timeout
 */

BackendResponse.prototype['first_byte_timeout'] = undefined;
/**
 * The name of the healthcheck to use with this backend.
 * @member {String} healthcheck
 */

BackendResponse.prototype['healthcheck'] = undefined;
/**
 * The hostname of the backend. May be used as an alternative to `address` to set the backend location.
 * @member {String} hostname
 */

BackendResponse.prototype['hostname'] = undefined;
/**
 * IPv4 address of the backend. May be used as an alternative to `address` to set the backend location.
 * @member {String} ipv4
 */

BackendResponse.prototype['ipv4'] = undefined;
/**
 * IPv6 address of the backend. May be used as an alternative to `address` to set the backend location.
 * @member {String} ipv6
 */

BackendResponse.prototype['ipv6'] = undefined;
/**
 * Maximum number of concurrent connections this backend will accept.
 * @member {Number} max_conn
 */

BackendResponse.prototype['max_conn'] = undefined;
/**
 * Maximum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
 * @member {String} max_tls_version
 */

BackendResponse.prototype['max_tls_version'] = undefined;
/**
 * Minimum allowed TLS version on SSL connections to this backend. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
 * @member {String} min_tls_version
 */

BackendResponse.prototype['min_tls_version'] = undefined;
/**
 * The name of the backend.
 * @member {String} name
 */

BackendResponse.prototype['name'] = undefined;
/**
 * If set, will replace the client-supplied HTTP `Host` header on connections to this backend. Applied after VCL has been processed, so this setting will take precedence over changing `bereq.http.Host` in VCL.
 * @member {String} override_host
 */

BackendResponse.prototype['override_host'] = undefined;
/**
 * Port on which the backend server is listening for connections from Fastly. Setting `port` to 80 or 443 will also set `use_ssl` automatically (to false and true respectively), unless explicitly overridden by setting `use_ssl` in the same request.
 * @member {Number} port
 */

BackendResponse.prototype['port'] = undefined;
/**
 * Name of a Condition, which if satisfied, will select this backend during a request. If set, will override any `auto_loadbalance` setting. By default, the first backend added to a service is selected for all requests.
 * @member {String} request_condition
 */

BackendResponse.prototype['request_condition'] = undefined;
/**
 * Data center POP code of the data center to use as a [shield](https://docs.fastly.com/en/guides/shielding).
 * @member {String} shield
 */

BackendResponse.prototype['shield'] = undefined;
/**
 * CA certificate attached to origin.
 * @member {String} ssl_ca_cert
 */

BackendResponse.prototype['ssl_ca_cert'] = undefined;
/**
 * Overrides `ssl_hostname`, but only for cert verification. Does not affect SNI at all.
 * @member {String} ssl_cert_hostname
 */

BackendResponse.prototype['ssl_cert_hostname'] = undefined;
/**
 * Be strict on checking SSL certs.
 * @member {Boolean} ssl_check_cert
 * @default true
 */

BackendResponse.prototype['ssl_check_cert'] = true;
/**
 * List of [OpenSSL ciphers](https://www.openssl.org/docs/manmaster/man1/ciphers.html) to support for connections to this origin. If your backend server is not able to negotiate a connection meeting this constraint, a synthetic `503` error response will be generated.
 * @member {String} ssl_ciphers
 */

BackendResponse.prototype['ssl_ciphers'] = undefined;
/**
 * Client certificate attached to origin.
 * @member {String} ssl_client_cert
 */

BackendResponse.prototype['ssl_client_cert'] = undefined;
/**
 * Client key attached to origin.
 * @member {String} ssl_client_key
 */

BackendResponse.prototype['ssl_client_key'] = undefined;
/**
 * Use `ssl_cert_hostname` and `ssl_sni_hostname` to configure certificate validation.
 * @member {String} ssl_hostname
 */

BackendResponse.prototype['ssl_hostname'] = undefined;
/**
 * Overrides `ssl_hostname`, but only for SNI in the handshake. Does not affect cert validation at all.
 * @member {String} ssl_sni_hostname
 */

BackendResponse.prototype['ssl_sni_hostname'] = undefined;
/**
 * Whether or not to require TLS for connections to this backend.
 * @member {Boolean} use_ssl
 */

BackendResponse.prototype['use_ssl'] = undefined;
/**
 * Weight used to load balance this backend against others. May be any positive integer. If `auto_loadbalance` is true, the chance of this backend being selected is equal to its own weight over the sum of all weights for backends that have `auto_loadbalance` set to true.
 * @member {Number} weight
 */

BackendResponse.prototype['weight'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

BackendResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

BackendResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

BackendResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

BackendResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

BackendResponse.prototype['version'] = undefined;
/**
 * Indicates whether the version of the service this backend is attached to accepts edits.
 * @member {Boolean} locked
 */

BackendResponse.prototype['locked'] = undefined;
var _default = BackendResponse;
exports["default"] = _default;