"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingAddressAndPort = _interopRequireDefault(require("./LoggingAddressAndPort"));

var _LoggingCommon = _interopRequireDefault(require("./LoggingCommon"));

var _LoggingGenericCommon = _interopRequireDefault(require("./LoggingGenericCommon"));

var _LoggingSftpAllOf = _interopRequireDefault(require("./LoggingSftpAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingSftp model module.
 * @module model/LoggingSftp
 * @version 3.0.0-alpha1
 */
var LoggingSftp = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingSftp</code>.
   * @alias module:model/LoggingSftp
   * @implements module:model/LoggingCommon
   * @implements module:model/LoggingGenericCommon
   * @implements module:model/LoggingAddressAndPort
   * @implements module:model/LoggingSftpAllOf
   */
  function LoggingSftp() {
    _classCallCheck(this, LoggingSftp);

    _LoggingCommon["default"].initialize(this);

    _LoggingGenericCommon["default"].initialize(this);

    _LoggingAddressAndPort["default"].initialize(this);

    _LoggingSftpAllOf["default"].initialize(this);

    LoggingSftp.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingSftp, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingSftp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingSftp} obj Optional instance to populate.
     * @return {module:model/LoggingSftp} The populated <code>LoggingSftp</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingSftp();

        _LoggingCommon["default"].constructFromObject(data, obj);

        _LoggingGenericCommon["default"].constructFromObject(data, obj);

        _LoggingAddressAndPort["default"].constructFromObject(data, obj);

        _LoggingSftpAllOf["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('port')) {
          obj['port'] = _ApiClient["default"].convertToType(data['port'], Object);
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _ApiClient["default"].convertToType(data['public_key'], 'String');
        }

        if (data.hasOwnProperty('secret_key')) {
          obj['secret_key'] = _ApiClient["default"].convertToType(data['secret_key'], 'String');
        }

        if (data.hasOwnProperty('ssh_known_hosts')) {
          obj['ssh_known_hosts'] = _ApiClient["default"].convertToType(data['ssh_known_hosts'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingSftp;
}();
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */


LoggingSftp.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingSftp.PlacementEnum} placement
 */

LoggingSftp.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingSftp.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

LoggingSftp.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

LoggingSftp.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */

LoggingSftp.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * How the message should be formatted.
 * @member {module:model/LoggingSftp.MessageTypeEnum} message_type
 * @default 'classic'
 */

LoggingSftp.prototype['message_type'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} timestamp_format
 */

LoggingSftp.prototype['timestamp_format'] = undefined;
/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {Number} period
 * @default 3600
 */

LoggingSftp.prototype['period'] = 3600;
/**
 * What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \"gzip.\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */

LoggingSftp.prototype['gzip_level'] = 0;
/**
 * The codec used for compression of your logs. Valid values are `zstd`, `snappy`, and `gzip`. If the specified codec is \"gzip\", `gzip_level` will default to 3. To specify a different level, leave `compression_codec` blank and explicitly set the level using `gzip_level`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {module:model/LoggingSftp.CompressionCodecEnum} compression_codec
 */

LoggingSftp.prototype['compression_codec'] = undefined;
/**
 * A hostname or IPv4 address.
 * @member {String} address
 */

LoggingSftp.prototype['address'] = undefined;
/**
 * The port number.
 * @member {Object} port
 */

LoggingSftp.prototype['port'] = undefined;
/**
 * The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
 * @member {String} password
 */

LoggingSftp.prototype['password'] = undefined;
/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */

LoggingSftp.prototype['path'] = 'null';
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */

LoggingSftp.prototype['public_key'] = 'null';
/**
 * The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
 * @member {String} secret_key
 * @default 'null'
 */

LoggingSftp.prototype['secret_key'] = 'null';
/**
 * A list of host keys for all hosts we can connect to over SFTP.
 * @member {String} ssh_known_hosts
 */

LoggingSftp.prototype['ssh_known_hosts'] = undefined;
/**
 * The username for the server.
 * @member {String} user
 */

LoggingSftp.prototype['user'] = undefined; // Implement LoggingCommon interface:

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

_LoggingCommon["default"].prototype['format'] = '%h %l %u %t "%r" %&gt;s %b'; // Implement LoggingGenericCommon interface:

/**
 * How the message should be formatted.
 * @member {module:model/LoggingGenericCommon.MessageTypeEnum} message_type
 * @default 'classic'
 */

_LoggingGenericCommon["default"].prototype['message_type'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} timestamp_format
 */

_LoggingGenericCommon["default"].prototype['timestamp_format'] = undefined;
/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {Number} period
 * @default 3600
 */

_LoggingGenericCommon["default"].prototype['period'] = 3600;
/**
 * What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \"gzip.\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */

_LoggingGenericCommon["default"].prototype['gzip_level'] = 0;
/**
 * The codec used for compression of your logs. Valid values are `zstd`, `snappy`, and `gzip`. If the specified codec is \"gzip\", `gzip_level` will default to 3. To specify a different level, leave `compression_codec` blank and explicitly set the level using `gzip_level`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {module:model/LoggingGenericCommon.CompressionCodecEnum} compression_codec
 */

_LoggingGenericCommon["default"].prototype['compression_codec'] = undefined; // Implement LoggingAddressAndPort interface:

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

_LoggingAddressAndPort["default"].prototype['port'] = 514; // Implement LoggingSftpAllOf interface:

/**
 * The password for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
 * @member {String} password
 */

_LoggingSftpAllOf["default"].prototype['password'] = undefined;
/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */

_LoggingSftpAllOf["default"].prototype['path'] = 'null';
/**
 * The port number.
 * @member {Object} port
 */

_LoggingSftpAllOf["default"].prototype['port'] = undefined;
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */

_LoggingSftpAllOf["default"].prototype['public_key'] = 'null';
/**
 * The SSH private key for the server. If both `password` and `secret_key` are passed, `secret_key` will be used in preference.
 * @member {String} secret_key
 * @default 'null'
 */

_LoggingSftpAllOf["default"].prototype['secret_key'] = 'null';
/**
 * A list of host keys for all hosts we can connect to over SFTP.
 * @member {String} ssh_known_hosts
 */

_LoggingSftpAllOf["default"].prototype['ssh_known_hosts'] = undefined;
/**
 * The username for the server.
 * @member {String} user
 */

_LoggingSftpAllOf["default"].prototype['user'] = undefined;
/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */

LoggingSftp['PlacementEnum'] = {
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

LoggingSftp['FormatVersionEnum'] = {
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

LoggingSftp['MessageTypeEnum'] = {
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

LoggingSftp['CompressionCodecEnum'] = {
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
var _default = LoggingSftp;
exports["default"] = _default;