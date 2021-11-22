"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingHttps = _interopRequireDefault(require("./LoggingHttps"));

var _LoggingMessageType = _interopRequireDefault(require("./LoggingMessageType"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingHttpsResponse model module.
 * @module model/LoggingHttpsResponse
 * @version 3.0.0-alpha1
 */
var LoggingHttpsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingHttpsResponse</code>.
   * @alias module:model/LoggingHttpsResponse
   * @implements module:model/LoggingHttps
   * @implements module:model/Timestamps
   * @implements module:model/ServiceIdAndVersion
   */
  function LoggingHttpsResponse() {
    _classCallCheck(this, LoggingHttpsResponse);

    _LoggingHttps["default"].initialize(this);

    _Timestamps["default"].initialize(this);

    _ServiceIdAndVersion["default"].initialize(this);

    LoggingHttpsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingHttpsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingHttpsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingHttpsResponse} obj Optional instance to populate.
     * @return {module:model/LoggingHttpsResponse} The populated <code>LoggingHttpsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingHttpsResponse();

        _LoggingHttps["default"].constructFromObject(data, obj);

        _Timestamps["default"].constructFromObject(data, obj);

        _ServiceIdAndVersion["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('content_type')) {
          obj['content_type'] = _ApiClient["default"].convertToType(data['content_type'], 'String');
        }

        if (data.hasOwnProperty('header_name')) {
          obj['header_name'] = _ApiClient["default"].convertToType(data['header_name'], 'String');
        }

        if (data.hasOwnProperty('message_type')) {
          obj['message_type'] = _LoggingMessageType["default"].constructFromObject(data['message_type']);
        }

        if (data.hasOwnProperty('header_value')) {
          obj['header_value'] = _ApiClient["default"].convertToType(data['header_value'], 'String');
        }

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient["default"].convertToType(data['method'], 'String');
        }

        if (data.hasOwnProperty('json_format')) {
          obj['json_format'] = _ApiClient["default"].convertToType(data['json_format'], 'String');
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
      }

      return obj;
    }
  }]);

  return LoggingHttpsResponse;
}();
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */


LoggingHttpsResponse.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingHttpsResponse.PlacementEnum} placement
 */

LoggingHttpsResponse.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingHttpsResponse.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

LoggingHttpsResponse.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

LoggingHttpsResponse.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */

LoggingHttpsResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */

LoggingHttpsResponse.prototype['tls_ca_cert'] = 'null';
/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */

LoggingHttpsResponse.prototype['tls_client_cert'] = 'null';
/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */

LoggingHttpsResponse.prototype['tls_client_key'] = 'null';
/**
 * The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
 * @member {String} tls_hostname
 * @default 'null'
 */

LoggingHttpsResponse.prototype['tls_hostname'] = 'null';
/**
 * The maximum number of logs sent in one request. Defaults `0` (no limit).
 * @member {Number} request_max_entries
 * @default 0
 */

LoggingHttpsResponse.prototype['request_max_entries'] = 0;
/**
 * The maximum number of bytes sent in one request. Defaults `0` (no limit).
 * @member {Number} request_max_bytes
 * @default 0
 */

LoggingHttpsResponse.prototype['request_max_bytes'] = 0;
/**
 * The URL to send logs to. Must use HTTPS. Required.
 * @member {String} url
 */

LoggingHttpsResponse.prototype['url'] = undefined;
/**
 * Content type of the header sent with the request.
 * @member {String} content_type
 * @default 'null'
 */

LoggingHttpsResponse.prototype['content_type'] = 'null';
/**
 * Name of the custom header sent with the request.
 * @member {String} header_name
 * @default 'null'
 */

LoggingHttpsResponse.prototype['header_name'] = 'null';
/**
 * @member {module:model/LoggingMessageType} message_type
 */

LoggingHttpsResponse.prototype['message_type'] = undefined;
/**
 * Value of the custom header sent with the request.
 * @member {String} header_value
 * @default 'null'
 */

LoggingHttpsResponse.prototype['header_value'] = 'null';
/**
 * HTTP method used for request.
 * @member {module:model/LoggingHttpsResponse.MethodEnum} method
 * @default 'POST'
 */

LoggingHttpsResponse.prototype['method'] = undefined;
/**
 * Enforces valid JSON formatting for log entries.
 * @member {module:model/LoggingHttpsResponse.JsonFormatEnum} json_format
 */

LoggingHttpsResponse.prototype['json_format'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

LoggingHttpsResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

LoggingHttpsResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

LoggingHttpsResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

LoggingHttpsResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

LoggingHttpsResponse.prototype['version'] = undefined; // Implement LoggingHttps interface:

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */

_LoggingHttps["default"].prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingHttps.PlacementEnum} placement
 */

_LoggingHttps["default"].prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingHttps.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

_LoggingHttps["default"].prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

_LoggingHttps["default"].prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */

_LoggingHttps["default"].prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * A secure certificate to authenticate a server with. Must be in PEM format.
 * @member {String} tls_ca_cert
 * @default 'null'
 */

_LoggingHttps["default"].prototype['tls_ca_cert'] = 'null';
/**
 * The client certificate used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_cert
 * @default 'null'
 */

_LoggingHttps["default"].prototype['tls_client_cert'] = 'null';
/**
 * The client private key used to make authenticated requests. Must be in PEM format.
 * @member {String} tls_client_key
 * @default 'null'
 */

_LoggingHttps["default"].prototype['tls_client_key'] = 'null';
/**
 * The hostname to verify the server's certificate. This should be one of the Subject Alternative Name (SAN) fields for the certificate. Common Names (CN) are not supported.
 * @member {String} tls_hostname
 * @default 'null'
 */

_LoggingHttps["default"].prototype['tls_hostname'] = 'null';
/**
 * The maximum number of logs sent in one request. Defaults `0` (no limit).
 * @member {Number} request_max_entries
 * @default 0
 */

_LoggingHttps["default"].prototype['request_max_entries'] = 0;
/**
 * The maximum number of bytes sent in one request. Defaults `0` (no limit).
 * @member {Number} request_max_bytes
 * @default 0
 */

_LoggingHttps["default"].prototype['request_max_bytes'] = 0;
/**
 * The URL to send logs to. Must use HTTPS. Required.
 * @member {String} url
 */

_LoggingHttps["default"].prototype['url'] = undefined;
/**
 * Content type of the header sent with the request.
 * @member {String} content_type
 * @default 'null'
 */

_LoggingHttps["default"].prototype['content_type'] = 'null';
/**
 * Name of the custom header sent with the request.
 * @member {String} header_name
 * @default 'null'
 */

_LoggingHttps["default"].prototype['header_name'] = 'null';
/**
 * @member {module:model/LoggingMessageType} message_type
 */

_LoggingHttps["default"].prototype['message_type'] = undefined;
/**
 * Value of the custom header sent with the request.
 * @member {String} header_value
 * @default 'null'
 */

_LoggingHttps["default"].prototype['header_value'] = 'null';
/**
 * HTTP method used for request.
 * @member {module:model/LoggingHttps.MethodEnum} method
 * @default 'POST'
 */

_LoggingHttps["default"].prototype['method'] = undefined;
/**
 * Enforces valid JSON formatting for log entries.
 * @member {module:model/LoggingHttps.JsonFormatEnum} json_format
 */

_LoggingHttps["default"].prototype['json_format'] = undefined; // Implement Timestamps interface:

/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

_Timestamps["default"].prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

_Timestamps["default"].prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

_Timestamps["default"].prototype['updated_at'] = undefined; // Implement ServiceIdAndVersion interface:

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

_ServiceIdAndVersion["default"].prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

_ServiceIdAndVersion["default"].prototype['version'] = undefined;
/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */

LoggingHttpsResponse['PlacementEnum'] = {
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

LoggingHttpsResponse['FormatVersionEnum'] = {
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
/**
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */

LoggingHttpsResponse['MethodEnum'] = {
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
/**
 * Allowed values for the <code>json_format</code> property.
 * @enum {String}
 * @readonly
 */

LoggingHttpsResponse['JsonFormatEnum'] = {
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
var _default = LoggingHttpsResponse;
exports["default"] = _default;