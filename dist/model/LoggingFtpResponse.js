"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingFtp = _interopRequireDefault(require("./LoggingFtp"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingFtpResponse model module.
 * @module model/LoggingFtpResponse
 * @version 3.0.0-alpha1
 */
var LoggingFtpResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingFtpResponse</code>.
   * @alias module:model/LoggingFtpResponse
   * @implements module:model/LoggingFtp
   * @implements module:model/Timestamps
   * @implements module:model/ServiceIdAndVersion
   */
  function LoggingFtpResponse() {
    _classCallCheck(this, LoggingFtpResponse);

    _LoggingFtp["default"].initialize(this);

    _Timestamps["default"].initialize(this);

    _ServiceIdAndVersion["default"].initialize(this);

    LoggingFtpResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingFtpResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingFtpResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingFtpResponse} obj Optional instance to populate.
     * @return {module:model/LoggingFtpResponse} The populated <code>LoggingFtpResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingFtpResponse();

        _LoggingFtp["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('message_type')) {
          obj['message_type'] = _ApiClient["default"].convertToType(data['message_type'], 'String');
        }

        if (data.hasOwnProperty('timestamp_format')) {
          obj['timestamp_format'] = _ApiClient["default"].convertToType(data['timestamp_format'], 'String');
        }

        if (data.hasOwnProperty('period')) {
          obj['period'] = _ApiClient["default"].convertToType(data['period'], 'Number');
        }

        if (data.hasOwnProperty('gzip_level')) {
          obj['gzip_level'] = _ApiClient["default"].convertToType(data['gzip_level'], 'Number');
        }

        if (data.hasOwnProperty('compression_codec')) {
          obj['compression_codec'] = _ApiClient["default"].convertToType(data['compression_codec'], 'String');
        }

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('hostname')) {
          obj['hostname'] = _ApiClient["default"].convertToType(data['hostname'], 'String');
        }

        if (data.hasOwnProperty('ipv4')) {
          obj['ipv4'] = _ApiClient["default"].convertToType(data['ipv4'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('port')) {
          obj['port'] = _ApiClient["default"].convertToType(data['port'], 'Number');
        }

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _ApiClient["default"].convertToType(data['public_key'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], 'String');
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

  return LoggingFtpResponse;
}();
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */


LoggingFtpResponse.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingFtpResponse.PlacementEnum} placement
 */

LoggingFtpResponse.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingFtpResponse.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

LoggingFtpResponse.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

LoggingFtpResponse.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */

LoggingFtpResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * How the message should be formatted.
 * @member {module:model/LoggingFtpResponse.MessageTypeEnum} message_type
 * @default 'classic'
 */

LoggingFtpResponse.prototype['message_type'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} timestamp_format
 */

LoggingFtpResponse.prototype['timestamp_format'] = undefined;
/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {Number} period
 * @default 3600
 */

LoggingFtpResponse.prototype['period'] = 3600;
/**
 * What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \"gzip.\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */

LoggingFtpResponse.prototype['gzip_level'] = 0;
/**
 * The codec used for compression of your logs. Valid values are `zstd`, `snappy`, and `gzip`. If the specified codec is \"gzip\", `gzip_level` will default to 3. To specify a different level, leave `compression_codec` blank and explicitly set the level using `gzip_level`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {module:model/LoggingFtpResponse.CompressionCodecEnum} compression_codec
 */

LoggingFtpResponse.prototype['compression_codec'] = undefined;
/**
 * An hostname or IPv4 address.
 * @member {String} address
 */

LoggingFtpResponse.prototype['address'] = undefined;
/**
 * Hostname used.
 * @member {String} hostname
 */

LoggingFtpResponse.prototype['hostname'] = undefined;
/**
 * IPv4 address of the host.
 * @member {String} ipv4
 */

LoggingFtpResponse.prototype['ipv4'] = undefined;
/**
 * The password for the server. For anonymous use an email address.
 * @member {String} password
 */

LoggingFtpResponse.prototype['password'] = undefined;
/**
 * The path to upload log files to. If the path ends in `/` then it is treated as a directory.
 * @member {String} path
 */

LoggingFtpResponse.prototype['path'] = undefined;
/**
 * The port number.
 * @member {Number} port
 * @default 21
 */

LoggingFtpResponse.prototype['port'] = 21;
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */

LoggingFtpResponse.prototype['public_key'] = 'null';
/**
 * The username for the server. Can be anonymous.
 * @member {String} user
 */

LoggingFtpResponse.prototype['user'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

LoggingFtpResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

LoggingFtpResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

LoggingFtpResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

LoggingFtpResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

LoggingFtpResponse.prototype['version'] = undefined; // Implement LoggingFtp interface:

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */

_LoggingFtp["default"].prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingFtp.PlacementEnum} placement
 */

_LoggingFtp["default"].prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingFtp.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

_LoggingFtp["default"].prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

_LoggingFtp["default"].prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */

_LoggingFtp["default"].prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * How the message should be formatted.
 * @member {module:model/LoggingFtp.MessageTypeEnum} message_type
 * @default 'classic'
 */

_LoggingFtp["default"].prototype['message_type'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} timestamp_format
 */

_LoggingFtp["default"].prototype['timestamp_format'] = undefined;
/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {Number} period
 * @default 3600
 */

_LoggingFtp["default"].prototype['period'] = 3600;
/**
 * What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \"gzip.\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */

_LoggingFtp["default"].prototype['gzip_level'] = 0;
/**
 * The codec used for compression of your logs. Valid values are `zstd`, `snappy`, and `gzip`. If the specified codec is \"gzip\", `gzip_level` will default to 3. To specify a different level, leave `compression_codec` blank and explicitly set the level using `gzip_level`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {module:model/LoggingFtp.CompressionCodecEnum} compression_codec
 */

_LoggingFtp["default"].prototype['compression_codec'] = undefined;
/**
 * An hostname or IPv4 address.
 * @member {String} address
 */

_LoggingFtp["default"].prototype['address'] = undefined;
/**
 * Hostname used.
 * @member {String} hostname
 */

_LoggingFtp["default"].prototype['hostname'] = undefined;
/**
 * IPv4 address of the host.
 * @member {String} ipv4
 */

_LoggingFtp["default"].prototype['ipv4'] = undefined;
/**
 * The password for the server. For anonymous use an email address.
 * @member {String} password
 */

_LoggingFtp["default"].prototype['password'] = undefined;
/**
 * The path to upload log files to. If the path ends in `/` then it is treated as a directory.
 * @member {String} path
 */

_LoggingFtp["default"].prototype['path'] = undefined;
/**
 * The port number.
 * @member {Number} port
 * @default 21
 */

_LoggingFtp["default"].prototype['port'] = 21;
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */

_LoggingFtp["default"].prototype['public_key'] = 'null';
/**
 * The username for the server. Can be anonymous.
 * @member {String} user
 */

_LoggingFtp["default"].prototype['user'] = undefined; // Implement Timestamps interface:

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

LoggingFtpResponse['PlacementEnum'] = {
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

LoggingFtpResponse['FormatVersionEnum'] = {
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
 * Allowed values for the <code>message_type</code> property.
 * @enum {String}
 * @readonly
 */

LoggingFtpResponse['MessageTypeEnum'] = {
  /**
   * value: "classic"
   * @const
   */
  "classic": "classic",

  /**
   * value: "loggly"
   * @const
   */
  "loggly": "loggly",

  /**
   * value: "logplex"
   * @const
   */
  "logplex": "logplex",

  /**
   * value: "blank"
   * @const
   */
  "blank": "blank"
};
/**
 * Allowed values for the <code>compression_codec</code> property.
 * @enum {String}
 * @readonly
 */

LoggingFtpResponse['CompressionCodecEnum'] = {
  /**
   * value: "zstd"
   * @const
   */
  "zstd": "zstd",

  /**
   * value: "snappy"
   * @const
   */
  "snappy": "snappy",

  /**
   * value: "gzip"
   * @const
   */
  "gzip": "gzip"
};
var _default = LoggingFtpResponse;
exports["default"] = _default;