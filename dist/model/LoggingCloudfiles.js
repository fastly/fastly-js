"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingCloudfilesAllOf = _interopRequireDefault(require("./LoggingCloudfilesAllOf"));

var _LoggingCommon = _interopRequireDefault(require("./LoggingCommon"));

var _LoggingGenericCommon = _interopRequireDefault(require("./LoggingGenericCommon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingCloudfiles model module.
 * @module model/LoggingCloudfiles
 * @version 3.0.0-alpha1
 */
var LoggingCloudfiles = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingCloudfiles</code>.
   * @alias module:model/LoggingCloudfiles
   * @implements module:model/LoggingCommon
   * @implements module:model/LoggingGenericCommon
   * @implements module:model/LoggingCloudfilesAllOf
   */
  function LoggingCloudfiles() {
    _classCallCheck(this, LoggingCloudfiles);

    _LoggingCommon["default"].initialize(this);

    _LoggingGenericCommon["default"].initialize(this);

    _LoggingCloudfilesAllOf["default"].initialize(this);

    LoggingCloudfiles.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingCloudfiles, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingCloudfiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingCloudfiles} obj Optional instance to populate.
     * @return {module:model/LoggingCloudfiles} The populated <code>LoggingCloudfiles</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingCloudfiles();

        _LoggingCommon["default"].constructFromObject(data, obj);

        _LoggingGenericCommon["default"].constructFromObject(data, obj);

        _LoggingCloudfilesAllOf["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('access_key')) {
          obj['access_key'] = _ApiClient["default"].convertToType(data['access_key'], 'String');
        }

        if (data.hasOwnProperty('bucket_name')) {
          obj['bucket_name'] = _ApiClient["default"].convertToType(data['bucket_name'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('region')) {
          obj['region'] = _ApiClient["default"].convertToType(data['region'], 'String');
        }

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _ApiClient["default"].convertToType(data['public_key'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingCloudfiles;
}();
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */


LoggingCloudfiles.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingCloudfiles.PlacementEnum} placement
 */

LoggingCloudfiles.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingCloudfiles.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

LoggingCloudfiles.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

LoggingCloudfiles.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */

LoggingCloudfiles.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * How the message should be formatted.
 * @member {module:model/LoggingCloudfiles.MessageTypeEnum} message_type
 * @default 'classic'
 */

LoggingCloudfiles.prototype['message_type'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} timestamp_format
 */

LoggingCloudfiles.prototype['timestamp_format'] = undefined;
/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {Number} period
 * @default 3600
 */

LoggingCloudfiles.prototype['period'] = 3600;
/**
 * What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \"gzip.\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */

LoggingCloudfiles.prototype['gzip_level'] = 0;
/**
 * The codec used for compression of your logs. Valid values are `zstd`, `snappy`, and `gzip`. If the specified codec is \"gzip\", `gzip_level` will default to 3. To specify a different level, leave `compression_codec` blank and explicitly set the level using `gzip_level`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {module:model/LoggingCloudfiles.CompressionCodecEnum} compression_codec
 */

LoggingCloudfiles.prototype['compression_codec'] = undefined;
/**
 * Your Cloud Files account access key.
 * @member {String} access_key
 */

LoggingCloudfiles.prototype['access_key'] = undefined;
/**
 * The name of your Cloud Files container.
 * @member {String} bucket_name
 */

LoggingCloudfiles.prototype['bucket_name'] = undefined;
/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */

LoggingCloudfiles.prototype['path'] = 'null';
/**
 * The region to stream logs to.
 * @member {module:model/LoggingCloudfiles.RegionEnum} region
 */

LoggingCloudfiles.prototype['region'] = undefined;
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */

LoggingCloudfiles.prototype['public_key'] = 'null';
/**
 * The username for your Cloud Files account.
 * @member {String} user
 */

LoggingCloudfiles.prototype['user'] = undefined; // Implement LoggingCommon interface:

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

_LoggingGenericCommon["default"].prototype['compression_codec'] = undefined; // Implement LoggingCloudfilesAllOf interface:

/**
 * Your Cloud Files account access key.
 * @member {String} access_key
 */

_LoggingCloudfilesAllOf["default"].prototype['access_key'] = undefined;
/**
 * The name of your Cloud Files container.
 * @member {String} bucket_name
 */

_LoggingCloudfilesAllOf["default"].prototype['bucket_name'] = undefined;
/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */

_LoggingCloudfilesAllOf["default"].prototype['path'] = 'null';
/**
 * The region to stream logs to.
 * @member {module:model/LoggingCloudfilesAllOf.RegionEnum} region
 */

_LoggingCloudfilesAllOf["default"].prototype['region'] = undefined;
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */

_LoggingCloudfilesAllOf["default"].prototype['public_key'] = 'null';
/**
 * The username for your Cloud Files account.
 * @member {String} user
 */

_LoggingCloudfilesAllOf["default"].prototype['user'] = undefined;
/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */

LoggingCloudfiles['PlacementEnum'] = {
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

LoggingCloudfiles['FormatVersionEnum'] = {
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

LoggingCloudfiles['MessageTypeEnum'] = {
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

LoggingCloudfiles['CompressionCodecEnum'] = {
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
/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */

LoggingCloudfiles['RegionEnum'] = {
  /**
   * value: "DFW"
   * @const
   */
  "DFW": "DFW",

  /**
   * value: "ORD"
   * @const
   */
  "ORD": "ORD",

  /**
   * value: "IAD"
   * @const
   */
  "IAD": "IAD",

  /**
   * value: "LON"
   * @const
   */
  "LON": "LON",

  /**
   * value: "SYD"
   * @const
   */
  "SYD": "SYD",

  /**
   * value: "HKG"
   * @const
   */
  "HKG": "HKG",

  /**
   * value: "null"
   * @const
   */
  "null": "null"
};
var _default = LoggingCloudfiles;
exports["default"] = _default;