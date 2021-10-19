"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingCloudfiles = _interopRequireDefault(require("./LoggingCloudfiles"));

var _LoggingCompressionCodec = _interopRequireDefault(require("./LoggingCompressionCodec"));

var _LoggingFormatVersion = _interopRequireDefault(require("./LoggingFormatVersion"));

var _LoggingMessageType = _interopRequireDefault(require("./LoggingMessageType"));

var _LoggingPlacement = _interopRequireDefault(require("./LoggingPlacement"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingCloudfilesResponse model module.
 * @module model/LoggingCloudfilesResponse
 * @version 3.0.0-alpha1
 */
var LoggingCloudfilesResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingCloudfilesResponse</code>.
   * @alias module:model/LoggingCloudfilesResponse
   */
  function LoggingCloudfilesResponse() {
    _classCallCheck(this, LoggingCloudfilesResponse);

    LoggingCloudfilesResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingCloudfilesResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingCloudfilesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingCloudfilesResponse} obj Optional instance to populate.
     * @return {module:model/LoggingCloudfilesResponse} The populated <code>LoggingCloudfilesResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingCloudfilesResponse();

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

        if (data.hasOwnProperty('compression_codec')) {
          obj['compression_codec'] = _LoggingCompressionCodec["default"].constructFromObject(data['compression_codec']);
        }

        if (data.hasOwnProperty('gzip_level')) {
          obj['gzip_level'] = _ApiClient["default"].convertToType(data['gzip_level'], 'Number');
        }

        if (data.hasOwnProperty('message_type')) {
          obj['message_type'] = _LoggingMessageType["default"].constructFromObject(data['message_type']);
        }

        if (data.hasOwnProperty('period')) {
          obj['period'] = _ApiClient["default"].convertToType(data['period'], 'Number');
        }

        if (data.hasOwnProperty('timestamp_format')) {
          obj['timestamp_format'] = _ApiClient["default"].convertToType(data['timestamp_format'], 'String');
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

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _ApiClient["default"].convertToType(data['public_key'], 'String');
        }

        if (data.hasOwnProperty('region')) {
          obj['region'] = _ApiClient["default"].convertToType(data['region'], 'String');
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

  return LoggingCloudfilesResponse;
}();
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */


LoggingCloudfilesResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * @member {module:model/LoggingFormatVersion} format_version
 */

LoggingCloudfilesResponse.prototype['format_version'] = undefined;
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */

LoggingCloudfilesResponse.prototype['name'] = undefined;
/**
 * @member {module:model/LoggingPlacement} placement
 */

LoggingCloudfilesResponse.prototype['placement'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

LoggingCloudfilesResponse.prototype['response_condition'] = undefined;
/**
 * @member {module:model/LoggingCompressionCodec} compression_codec
 */

LoggingCloudfilesResponse.prototype['compression_codec'] = undefined;
/**
 * What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \"gzip.\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */

LoggingCloudfilesResponse.prototype['gzip_level'] = 0;
/**
 * @member {module:model/LoggingMessageType} message_type
 */

LoggingCloudfilesResponse.prototype['message_type'] = undefined;
/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {Number} period
 * @default 3600
 */

LoggingCloudfilesResponse.prototype['period'] = 3600;
/**
 * Date and time in ISO 8601 format.
 * @member {String} timestamp_format
 */

LoggingCloudfilesResponse.prototype['timestamp_format'] = undefined;
/**
 * Your Cloud Files account access key.
 * @member {String} access_key
 */

LoggingCloudfilesResponse.prototype['access_key'] = undefined;
/**
 * The name of your Cloud Files container.
 * @member {String} bucket_name
 */

LoggingCloudfilesResponse.prototype['bucket_name'] = undefined;
/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */

LoggingCloudfilesResponse.prototype['path'] = 'null';
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */

LoggingCloudfilesResponse.prototype['public_key'] = 'null';
/**
 * The region to stream logs to.
 * @member {module:model/LoggingCloudfilesResponse.RegionEnum} region
 */

LoggingCloudfilesResponse.prototype['region'] = undefined;
/**
 * The username for your Cloud Files account.
 * @member {String} user
 */

LoggingCloudfilesResponse.prototype['user'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

LoggingCloudfilesResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

LoggingCloudfilesResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

LoggingCloudfilesResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

LoggingCloudfilesResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

LoggingCloudfilesResponse.prototype['version'] = undefined;
/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */

LoggingCloudfilesResponse['RegionEnum'] = {
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
  "HKG": "HKG"
};
var _default = LoggingCloudfilesResponse;
exports["default"] = _default;