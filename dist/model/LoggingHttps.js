"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingCommon = _interopRequireDefault(require("./LoggingCommon"));

var _LoggingFormatVersion = _interopRequireDefault(require("./LoggingFormatVersion"));

var _LoggingHttpsAllOf = _interopRequireDefault(require("./LoggingHttpsAllOf"));

var _LoggingMessageType = _interopRequireDefault(require("./LoggingMessageType"));

var _LoggingPlacement = _interopRequireDefault(require("./LoggingPlacement"));

var _LoggingRequestCapsCommon = _interopRequireDefault(require("./LoggingRequestCapsCommon"));

var _LoggingTlsCommon = _interopRequireDefault(require("./LoggingTlsCommon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingHttps model module.
 * @module model/LoggingHttps
 * @version 3.0.0-alpha1
 */
var LoggingHttps = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingHttps</code>.
   * @alias module:model/LoggingHttps
   */
  function LoggingHttps() {
    _classCallCheck(this, LoggingHttps);

    LoggingHttps.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingHttps, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingHttps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingHttps} obj Optional instance to populate.
     * @return {module:model/LoggingHttps} The populated <code>LoggingHttps</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingHttps();

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }

        if (data.hasOwnProperty('format_version')) {
          obj['format_version'] = _LoggingFormatVersion["default"].constructFromObject(data['format_version']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('placement')) {
          obj['placement'] = _LoggingPlacement["default"].constructFromObject(data['placement']);
        }

        if (data.hasOwnProperty('response_condition')) {
          obj['response_condition'] = _ApiClient["default"].convertToType(data['response_condition'], 'String');
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

        if (data.hasOwnProperty('request_max_bytes')) {
          obj['request_max_bytes'] = _ApiClient["default"].convertToType(data['request_max_bytes'], 'Number');
        }

        if (data.hasOwnProperty('request_max_entries')) {
          obj['request_max_entries'] = _ApiClient["default"].convertToType(data['request_max_entries'], 'Number');
        }

        if (data.hasOwnProperty('content_type')) {
          obj['content_type'] = _ApiClient["default"].convertToType(data['content_type'], 'String');
        }

        if (data.hasOwnProperty('header_name')) {
          obj['header_name'] = _ApiClient["default"].convertToType(data['header_name'], 'String');
        }

        if (data.hasOwnProperty('header_value')) {
          obj['header_value'] = _ApiClient["default"].convertToType(data['header_value'], 'String');
        }

        if (data.hasOwnProperty('json_format')) {
          obj['json_format'] = _ApiClient["default"].convertToType(data['json_format'], 'String');
        }

        if (data.hasOwnProperty('message_type')) {
          obj['message_type'] = _LoggingMessageType["default"].constructFromObject(data['message_type']);
        }

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient["default"].convertToType(data['method'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingHttps;
}();
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */


LoggingHttps.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * @member {module:model/LoggingFormatVersion} format_version
 */

LoggingHttps.prototype['format_version'] = undefined;
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */

LoggingHttps.prototype['name'] = undefined;
/**
 * @member {module:model/LoggingPlacement} placement
 */

LoggingHttps.prototype['placement'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

LoggingHttps.prototype['response_condition'] = undefined;
/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */

LoggingHttps.prototype['tls_ca_cert'] = 'null';
/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */

LoggingHttps.prototype['tls_client_cert'] = 'null';
/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */

LoggingHttps.prototype['tls_client_key'] = 'null';
/**
 * The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
 * @member {String} tls_hostname
 * @default 'null'
 */

LoggingHttps.prototype['tls_hostname'] = 'null';
/**
 * The maximum number of bytes sent in one request. Defaults `0` (no limit).
 * @member {Number} request_max_bytes
 * @default 0
 */

LoggingHttps.prototype['request_max_bytes'] = 0;
/**
 * The maximum number of logs sent in one request. Defaults `0` (no limit).
 * @member {Number} request_max_entries
 * @default 0
 */

LoggingHttps.prototype['request_max_entries'] = 0;
/**
 * Content type of the header sent with the request.
 * @member {String} content_type
 * @default 'null'
 */

LoggingHttps.prototype['content_type'] = 'null';
/**
 * Name of the custom header sent with the request.
 * @member {String} header_name
 * @default 'null'
 */

LoggingHttps.prototype['header_name'] = 'null';
/**
 * Value of the custom header sent with the request.
 * @member {String} header_value
 * @default 'null'
 */

LoggingHttps.prototype['header_value'] = 'null';
/**
 * Enforces valid JSON formatting for log entries.
 * @member {module:model/LoggingHttps.JsonFormatEnum} json_format
 */

LoggingHttps.prototype['json_format'] = undefined;
/**
 * @member {module:model/LoggingMessageType} message_type
 */

LoggingHttps.prototype['message_type'] = undefined;
/**
 * HTTP method used for request.
 * @member {module:model/LoggingHttps.MethodEnum} method
 * @default 'POST'
 */

LoggingHttps.prototype['method'] = undefined;
/**
 * The URL to send logs to. Must use HTTPS. Required.
 * @member {String} url
 */

LoggingHttps.prototype['url'] = undefined;
/**
 * Allowed values for the <code>json_format</code> property.
 * @enum {String}
 * @readonly
 */

LoggingHttps['JsonFormatEnum'] = {
  /**
   * value: "0"
   * @const
   */
  "disabled": "0",

  /**
   * value: "1"
   * @const
   */
  "json_array": "1",

  /**
   * value: "2"
   * @const
   */
  "newline_delimited_json": "2"
};
/**
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */

LoggingHttps['MethodEnum'] = {
  /**
   * value: "POST"
   * @const
   */
  "POST": "POST",

  /**
   * value: "PUT"
   * @const
   */
  "PUT": "PUT"
};
var _default = LoggingHttps;
exports["default"] = _default;