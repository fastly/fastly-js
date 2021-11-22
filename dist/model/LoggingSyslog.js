"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingAddressAndPort = _interopRequireDefault(require("./LoggingAddressAndPort"));

var _LoggingCommon = _interopRequireDefault(require("./LoggingCommon"));

var _LoggingMessageType = _interopRequireDefault(require("./LoggingMessageType"));

var _LoggingSyslogAllOf = _interopRequireDefault(require("./LoggingSyslogAllOf"));

var _LoggingTlsCommon = _interopRequireDefault(require("./LoggingTlsCommon"));

var _LoggingUseTls = _interopRequireDefault(require("./LoggingUseTls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingSyslog model module.
 * @module model/LoggingSyslog
 * @version 3.0.0-alpha1
 */
var LoggingSyslog = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingSyslog</code>.
   * @alias module:model/LoggingSyslog
   * @implements module:model/LoggingCommon
   * @implements module:model/LoggingTlsCommon
   * @implements module:model/LoggingAddressAndPort
   * @implements module:model/LoggingSyslogAllOf
   */
  function LoggingSyslog() {
    _classCallCheck(this, LoggingSyslog);

    _LoggingCommon["default"].initialize(this);

    _LoggingTlsCommon["default"].initialize(this);

    _LoggingAddressAndPort["default"].initialize(this);

    _LoggingSyslogAllOf["default"].initialize(this);

    LoggingSyslog.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingSyslog, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingSyslog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingSyslog} obj Optional instance to populate.
     * @return {module:model/LoggingSyslog} The populated <code>LoggingSyslog</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingSyslog();

        _LoggingCommon["default"].constructFromObject(data, obj);

        _LoggingTlsCommon["default"].constructFromObject(data, obj);

        _LoggingAddressAndPort["default"].constructFromObject(data, obj);

        _LoggingSyslogAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('placement')) {
          obj['placement'] = _ApiClient["default"].convertToType(data['placement'], 'String');
        }

        if (data.hasOwnProperty('format_version')) {
          obj['format_version'] = _ApiClient["default"].convertToType(data['format_version'], 'Number');
        }

        if (data.hasOwnProperty('response_condition')) {
          obj['response_condition'] = _ApiClient["default"].convertToType(data['response_condition'], 'String');
        }

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }

        if (data.hasOwnProperty('tls_ca_cert')) {
          obj['tls_ca_cert'] = _ApiClient["default"].convertToType(data['tls_ca_cert'], 'String');
        }

        if (data.hasOwnProperty('tls_client_cert')) {
          obj['tls_client_cert'] = _ApiClient["default"].convertToType(data['tls_client_cert'], 'String');
        }

        if (data.hasOwnProperty('tls_client_key')) {
          obj['tls_client_key'] = _ApiClient["default"].convertToType(data['tls_client_key'], 'String');
        }

        if (data.hasOwnProperty('tls_hostname')) {
          obj['tls_hostname'] = _ApiClient["default"].convertToType(data['tls_hostname'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('port')) {
          obj['port'] = _ApiClient["default"].convertToType(data['port'], 'Number');
        }

        if (data.hasOwnProperty('message_type')) {
          obj['message_type'] = _LoggingMessageType["default"].constructFromObject(data['message_type']);
        }

        if (data.hasOwnProperty('hostname')) {
          obj['hostname'] = _ApiClient["default"].convertToType(data['hostname'], 'String');
        }

        if (data.hasOwnProperty('ipv4')) {
          obj['ipv4'] = _ApiClient["default"].convertToType(data['ipv4'], 'String');
        }

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }

        if (data.hasOwnProperty('use_tls')) {
          obj['use_tls'] = _LoggingUseTls["default"].constructFromObject(data['use_tls']);
        }
      }

      return obj;
    }
  }]);

  return LoggingSyslog;
}();
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */


LoggingSyslog.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingSyslog.PlacementEnum} placement
 */

LoggingSyslog.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingSyslog.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

LoggingSyslog.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

LoggingSyslog.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */

LoggingSyslog.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */

LoggingSyslog.prototype['tls_ca_cert'] = 'null';
/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */

LoggingSyslog.prototype['tls_client_cert'] = 'null';
/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */

LoggingSyslog.prototype['tls_client_key'] = 'null';
/**
 * The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
 * @member {String} tls_hostname
 * @default 'null'
 */

LoggingSyslog.prototype['tls_hostname'] = 'null';
/**
 * A hostname or IPv4 address.
 * @member {String} address
 */

LoggingSyslog.prototype['address'] = undefined;
/**
 * The port number.
 * @member {Number} port
 * @default 514
 */

LoggingSyslog.prototype['port'] = 514;
/**
 * @member {module:model/LoggingMessageType} message_type
 */

LoggingSyslog.prototype['message_type'] = undefined;
/**
 * The hostname used for the syslog endpoint.
 * @member {String} hostname
 */

LoggingSyslog.prototype['hostname'] = undefined;
/**
 * The IPv4 address used for the syslog endpoint.
 * @member {String} ipv4
 */

LoggingSyslog.prototype['ipv4'] = undefined;
/**
 * Whether to prepend each message with a specific token.
 * @member {String} token
 * @default 'null'
 */

LoggingSyslog.prototype['token'] = 'null';
/**
 * @member {module:model/LoggingUseTls} use_tls
 */

LoggingSyslog.prototype['use_tls'] = undefined; // Implement LoggingCommon interface:

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */

_LoggingCommon["default"].prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingCommon.PlacementEnum} placement
 */

_LoggingCommon["default"].prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingCommon.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

_LoggingCommon["default"].prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

_LoggingCommon["default"].prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */

_LoggingCommon["default"].prototype['format'] = '%h %l %u %t "%r" %&gt;s %b'; // Implement LoggingTlsCommon interface:

/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */

_LoggingTlsCommon["default"].prototype['tls_ca_cert'] = 'null';
/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */

_LoggingTlsCommon["default"].prototype['tls_client_cert'] = 'null';
/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */

_LoggingTlsCommon["default"].prototype['tls_client_key'] = 'null';
/**
 * The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
 * @member {String} tls_hostname
 * @default 'null'
 */

_LoggingTlsCommon["default"].prototype['tls_hostname'] = 'null'; // Implement LoggingAddressAndPort interface:

/**
 * A hostname or IPv4 address.
 * @member {String} address
 */

_LoggingAddressAndPort["default"].prototype['address'] = undefined;
/**
 * The port number.
 * @member {Number} port
 * @default 514
 */

_LoggingAddressAndPort["default"].prototype['port'] = 514; // Implement LoggingSyslogAllOf interface:

/**
 * @member {module:model/LoggingMessageType} message_type
 */

_LoggingSyslogAllOf["default"].prototype['message_type'] = undefined;
/**
 * The hostname used for the syslog endpoint.
 * @member {String} hostname
 */

_LoggingSyslogAllOf["default"].prototype['hostname'] = undefined;
/**
 * The IPv4 address used for the syslog endpoint.
 * @member {String} ipv4
 */

_LoggingSyslogAllOf["default"].prototype['ipv4'] = undefined;
/**
 * Whether to prepend each message with a specific token.
 * @member {String} token
 * @default 'null'
 */

_LoggingSyslogAllOf["default"].prototype['token'] = 'null';
/**
 * @member {module:model/LoggingUseTls} use_tls
 */

_LoggingSyslogAllOf["default"].prototype['use_tls'] = undefined;
/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */

LoggingSyslog['PlacementEnum'] = {
  /**
   * value: "none"
   * @const
   */
  "none": "none",

  /**
   * value: "waf_debug"
   * @const
   */
  "waf_debug": "waf_debug",

  /**
   * value: "null"
   * @const
   */
  "null": "null"
};
/**
 * Allowed values for the <code>format_version</code> property.
 * @enum {Number}
 * @readonly
 */

LoggingSyslog['FormatVersionEnum'] = {
  /**
   * value: 1
   * @const
   */
  "v1": 1,

  /**
   * value: 2
   * @const
   */
  "v2": 2
};
var _default = LoggingSyslog;
exports["default"] = _default;