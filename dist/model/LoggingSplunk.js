"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingCommon = _interopRequireDefault(require("./LoggingCommon"));

var _LoggingRequestCapsCommon = _interopRequireDefault(require("./LoggingRequestCapsCommon"));

var _LoggingSplunkAllOf = _interopRequireDefault(require("./LoggingSplunkAllOf"));

var _LoggingTlsCommon = _interopRequireDefault(require("./LoggingTlsCommon"));

var _LoggingUseTls = _interopRequireDefault(require("./LoggingUseTls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingSplunk model module.
 * @module model/LoggingSplunk
 * @version 3.0.0-alpha1
 */
var LoggingSplunk = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingSplunk</code>.
   * @alias module:model/LoggingSplunk
   * @implements module:model/LoggingCommon
   * @implements module:model/LoggingTlsCommon
   * @implements module:model/LoggingRequestCapsCommon
   * @implements module:model/LoggingSplunkAllOf
   */
  function LoggingSplunk() {
    _classCallCheck(this, LoggingSplunk);

    _LoggingCommon["default"].initialize(this);

    _LoggingTlsCommon["default"].initialize(this);

    _LoggingRequestCapsCommon["default"].initialize(this);

    _LoggingSplunkAllOf["default"].initialize(this);

    LoggingSplunk.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingSplunk, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingSplunk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingSplunk} obj Optional instance to populate.
     * @return {module:model/LoggingSplunk} The populated <code>LoggingSplunk</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingSplunk();

        _LoggingCommon["default"].constructFromObject(data, obj);

        _LoggingTlsCommon["default"].constructFromObject(data, obj);

        _LoggingRequestCapsCommon["default"].constructFromObject(data, obj);

        _LoggingSplunkAllOf["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('request_max_entries')) {
          obj['request_max_entries'] = _ApiClient["default"].convertToType(data['request_max_entries'], 'Number');
        }

        if (data.hasOwnProperty('request_max_bytes')) {
          obj['request_max_bytes'] = _ApiClient["default"].convertToType(data['request_max_bytes'], 'Number');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
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

  return LoggingSplunk;
}();
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */


LoggingSplunk.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingSplunk.PlacementEnum} placement
 */

LoggingSplunk.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingSplunk.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

LoggingSplunk.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

LoggingSplunk.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */

LoggingSplunk.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */

LoggingSplunk.prototype['tls_ca_cert'] = 'null';
/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */

LoggingSplunk.prototype['tls_client_cert'] = 'null';
/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */

LoggingSplunk.prototype['tls_client_key'] = 'null';
/**
 * The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
 * @member {String} tls_hostname
 * @default 'null'
 */

LoggingSplunk.prototype['tls_hostname'] = 'null';
/**
 * The maximum number of logs sent in one request. Defaults `0` for unbounded.
 * @member {Number} request_max_entries
 * @default 0
 */

LoggingSplunk.prototype['request_max_entries'] = 0;
/**
 * The maximum number of bytes sent in one request. Defaults `0` for unbounded.
 * @member {Number} request_max_bytes
 * @default 0
 */

LoggingSplunk.prototype['request_max_bytes'] = 0;
/**
 * The URL to post logs to.
 * @member {String} url
 */

LoggingSplunk.prototype['url'] = undefined;
/**
 * A Splunk token for use in posting logs over HTTP to your collector.
 * @member {String} token
 */

LoggingSplunk.prototype['token'] = undefined;
/**
 * @member {module:model/LoggingUseTls} use_tls
 */

LoggingSplunk.prototype['use_tls'] = undefined; // Implement LoggingCommon interface:

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

_LoggingTlsCommon["default"].prototype['tls_hostname'] = 'null'; // Implement LoggingRequestCapsCommon interface:

/**
 * The maximum number of logs sent in one request. Defaults `0` for unbounded.
 * @member {Number} request_max_entries
 * @default 0
 */

_LoggingRequestCapsCommon["default"].prototype['request_max_entries'] = 0;
/**
 * The maximum number of bytes sent in one request. Defaults `0` for unbounded.
 * @member {Number} request_max_bytes
 * @default 0
 */

_LoggingRequestCapsCommon["default"].prototype['request_max_bytes'] = 0; // Implement LoggingSplunkAllOf interface:

/**
 * The URL to post logs to.
 * @member {String} url
 */

_LoggingSplunkAllOf["default"].prototype['url'] = undefined;
/**
 * A Splunk token for use in posting logs over HTTP to your collector.
 * @member {String} token
 */

_LoggingSplunkAllOf["default"].prototype['token'] = undefined;
/**
 * @member {module:model/LoggingUseTls} use_tls
 */

_LoggingSplunkAllOf["default"].prototype['use_tls'] = undefined;
/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */

LoggingSplunk['PlacementEnum'] = {
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

LoggingSplunk['FormatVersionEnum'] = {
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
var _default = LoggingSplunk;
exports["default"] = _default;