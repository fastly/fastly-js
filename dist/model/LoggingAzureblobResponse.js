"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingAzureblob = _interopRequireDefault(require("./LoggingAzureblob"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingAzureblobResponse model module.
 * @module model/LoggingAzureblobResponse
 * @version 3.0.0-alpha1
 */
var LoggingAzureblobResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingAzureblobResponse</code>.
   * @alias module:model/LoggingAzureblobResponse
   * @implements module:model/LoggingAzureblob
   * @implements module:model/Timestamps
   * @implements module:model/ServiceIdAndVersion
   */
  function LoggingAzureblobResponse() {
    _classCallCheck(this, LoggingAzureblobResponse);

    _LoggingAzureblob["default"].initialize(this);

    _Timestamps["default"].initialize(this);

    _ServiceIdAndVersion["default"].initialize(this);

    LoggingAzureblobResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingAzureblobResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingAzureblobResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingAzureblobResponse} obj Optional instance to populate.
     * @return {module:model/LoggingAzureblobResponse} The populated <code>LoggingAzureblobResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingAzureblobResponse();

        _LoggingAzureblob["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('account_name')) {
          obj['account_name'] = _ApiClient["default"].convertToType(data['account_name'], 'String');
        }

        if (data.hasOwnProperty('container')) {
          obj['container'] = _ApiClient["default"].convertToType(data['container'], 'String');
        }

        if (data.hasOwnProperty('sas_token')) {
          obj['sas_token'] = _ApiClient["default"].convertToType(data['sas_token'], 'String');
        }

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _ApiClient["default"].convertToType(data['public_key'], 'String');
        }

        if (data.hasOwnProperty('file_max_bytes')) {
          obj['file_max_bytes'] = _ApiClient["default"].convertToType(data['file_max_bytes'], 'Number');
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

  return LoggingAzureblobResponse;
}();
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */


LoggingAzureblobResponse.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingAzureblobResponse.PlacementEnum} placement
 */

LoggingAzureblobResponse.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingAzureblobResponse.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

LoggingAzureblobResponse.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

LoggingAzureblobResponse.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */

LoggingAzureblobResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * How the message should be formatted.
 * @member {module:model/LoggingAzureblobResponse.MessageTypeEnum} message_type
 * @default 'classic'
 */

LoggingAzureblobResponse.prototype['message_type'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} timestamp_format
 */

LoggingAzureblobResponse.prototype['timestamp_format'] = undefined;
/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {Number} period
 * @default 3600
 */

LoggingAzureblobResponse.prototype['period'] = 3600;
/**
 * What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \"gzip.\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */

LoggingAzureblobResponse.prototype['gzip_level'] = 0;
/**
 * The codec used for compression of your logs. Valid values are `zstd`, `snappy`, and `gzip`. If the specified codec is \"gzip\", `gzip_level` will default to 3. To specify a different level, leave `compression_codec` blank and explicitly set the level using `gzip_level`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {module:model/LoggingAzureblobResponse.CompressionCodecEnum} compression_codec
 */

LoggingAzureblobResponse.prototype['compression_codec'] = undefined;
/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */

LoggingAzureblobResponse.prototype['path'] = 'null';
/**
 * The unique Azure Blob Storage namespace in which your data objects are stored. Required.
 * @member {String} account_name
 */

LoggingAzureblobResponse.prototype['account_name'] = undefined;
/**
 * The name of the Azure Blob Storage container in which to store logs. Required.
 * @member {String} container
 */

LoggingAzureblobResponse.prototype['container'] = undefined;
/**
 * The Azure shared access signature providing write access to the blob service objects. Be sure to update your token before it expires or the logging functionality will not work. Required.
 * @member {String} sas_token
 */

LoggingAzureblobResponse.prototype['sas_token'] = undefined;
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */

LoggingAzureblobResponse.prototype['public_key'] = 'null';
/**
 * The maximum number of bytes for each uploaded file. A value of 0 can be used to indicate there is no limit on the size of uploaded files, otherwise the minimum value is 1048576 bytes (1 MiB.)
 * @member {Number} file_max_bytes
 */

LoggingAzureblobResponse.prototype['file_max_bytes'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

LoggingAzureblobResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

LoggingAzureblobResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

LoggingAzureblobResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

LoggingAzureblobResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

LoggingAzureblobResponse.prototype['version'] = undefined; // Implement LoggingAzureblob interface:

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */

_LoggingAzureblob["default"].prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingAzureblob.PlacementEnum} placement
 */

_LoggingAzureblob["default"].prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingAzureblob.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

_LoggingAzureblob["default"].prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

_LoggingAzureblob["default"].prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */

_LoggingAzureblob["default"].prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * How the message should be formatted.
 * @member {module:model/LoggingAzureblob.MessageTypeEnum} message_type
 * @default 'classic'
 */

_LoggingAzureblob["default"].prototype['message_type'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} timestamp_format
 */

_LoggingAzureblob["default"].prototype['timestamp_format'] = undefined;
/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {Number} period
 * @default 3600
 */

_LoggingAzureblob["default"].prototype['period'] = 3600;
/**
 * What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \"gzip.\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */

_LoggingAzureblob["default"].prototype['gzip_level'] = 0;
/**
 * The codec used for compression of your logs. Valid values are `zstd`, `snappy`, and `gzip`. If the specified codec is \"gzip\", `gzip_level` will default to 3. To specify a different level, leave `compression_codec` blank and explicitly set the level using `gzip_level`. Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {module:model/LoggingAzureblob.CompressionCodecEnum} compression_codec
 */

_LoggingAzureblob["default"].prototype['compression_codec'] = undefined;
/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */

_LoggingAzureblob["default"].prototype['path'] = 'null';
/**
 * The unique Azure Blob Storage namespace in which your data objects are stored. Required.
 * @member {String} account_name
 */

_LoggingAzureblob["default"].prototype['account_name'] = undefined;
/**
 * The name of the Azure Blob Storage container in which to store logs. Required.
 * @member {String} container
 */

_LoggingAzureblob["default"].prototype['container'] = undefined;
/**
 * The Azure shared access signature providing write access to the blob service objects. Be sure to update your token before it expires or the logging functionality will not work. Required.
 * @member {String} sas_token
 */

_LoggingAzureblob["default"].prototype['sas_token'] = undefined;
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */

_LoggingAzureblob["default"].prototype['public_key'] = 'null';
/**
 * The maximum number of bytes for each uploaded file. A value of 0 can be used to indicate there is no limit on the size of uploaded files, otherwise the minimum value is 1048576 bytes (1 MiB.)
 * @member {Number} file_max_bytes
 */

_LoggingAzureblob["default"].prototype['file_max_bytes'] = undefined; // Implement Timestamps interface:

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

LoggingAzureblobResponse['PlacementEnum'] = {
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

LoggingAzureblobResponse['FormatVersionEnum'] = {
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

LoggingAzureblobResponse['MessageTypeEnum'] = {
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

LoggingAzureblobResponse['CompressionCodecEnum'] = {
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
var _default = LoggingAzureblobResponse;
exports["default"] = _default;