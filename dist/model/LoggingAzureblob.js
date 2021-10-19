"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingAzureblobAllOf = _interopRequireDefault(require("./LoggingAzureblobAllOf"));

var _LoggingCommon = _interopRequireDefault(require("./LoggingCommon"));

var _LoggingCompressionCodec = _interopRequireDefault(require("./LoggingCompressionCodec"));

var _LoggingFormatVersion = _interopRequireDefault(require("./LoggingFormatVersion"));

var _LoggingGenericCommon = _interopRequireDefault(require("./LoggingGenericCommon"));

var _LoggingMessageType = _interopRequireDefault(require("./LoggingMessageType"));

var _LoggingPlacement = _interopRequireDefault(require("./LoggingPlacement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingAzureblob model module.
 * @module model/LoggingAzureblob
 * @version 3.0.0-alpha1
 */
var LoggingAzureblob = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingAzureblob</code>.
   * @alias module:model/LoggingAzureblob
   */
  function LoggingAzureblob() {
    _classCallCheck(this, LoggingAzureblob);

    LoggingAzureblob.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingAzureblob, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingAzureblob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingAzureblob} obj Optional instance to populate.
     * @return {module:model/LoggingAzureblob} The populated <code>LoggingAzureblob</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingAzureblob();

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

        if (data.hasOwnProperty('account_name')) {
          obj['account_name'] = _ApiClient["default"].convertToType(data['account_name'], 'String');
        }

        if (data.hasOwnProperty('container')) {
          obj['container'] = _ApiClient["default"].convertToType(data['container'], 'String');
        }

        if (data.hasOwnProperty('file_max_bytes')) {
          obj['file_max_bytes'] = _ApiClient["default"].convertToType(data['file_max_bytes'], 'Number');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _ApiClient["default"].convertToType(data['public_key'], 'String');
        }

        if (data.hasOwnProperty('sas_token')) {
          obj['sas_token'] = _ApiClient["default"].convertToType(data['sas_token'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingAzureblob;
}();
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */


LoggingAzureblob.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * @member {module:model/LoggingFormatVersion} format_version
 */

LoggingAzureblob.prototype['format_version'] = undefined;
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */

LoggingAzureblob.prototype['name'] = undefined;
/**
 * @member {module:model/LoggingPlacement} placement
 */

LoggingAzureblob.prototype['placement'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

LoggingAzureblob.prototype['response_condition'] = undefined;
/**
 * @member {module:model/LoggingCompressionCodec} compression_codec
 */

LoggingAzureblob.prototype['compression_codec'] = undefined;
/**
 * What level of gzip encoding to have when sending logs (default `0`, no compression). If an explicit non-zero value is set, then `compression_codec` will default to \"gzip.\" Specifying both `compression_codec` and `gzip_level` in the same API request will result in an error.
 * @member {Number} gzip_level
 * @default 0
 */

LoggingAzureblob.prototype['gzip_level'] = 0;
/**
 * @member {module:model/LoggingMessageType} message_type
 */

LoggingAzureblob.prototype['message_type'] = undefined;
/**
 * How frequently log files are finalized so they can be available for reading (in seconds).
 * @member {Number} period
 * @default 3600
 */

LoggingAzureblob.prototype['period'] = 3600;
/**
 * Date and time in ISO 8601 format.
 * @member {String} timestamp_format
 */

LoggingAzureblob.prototype['timestamp_format'] = undefined;
/**
 * The unique Azure Blob Storage namespace in which your data objects are stored. Required.
 * @member {String} account_name
 */

LoggingAzureblob.prototype['account_name'] = undefined;
/**
 * The name of the Azure Blob Storage container in which to store logs. Required.
 * @member {String} container
 */

LoggingAzureblob.prototype['container'] = undefined;
/**
 * The maximum number of bytes for each uploaded file. A value of 0 can be used to indicate there is no limit on the size of uploaded files, otherwise the minimum value is 1048576 bytes (1 MiB.)
 * @member {Number} file_max_bytes
 */

LoggingAzureblob.prototype['file_max_bytes'] = undefined;
/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */

LoggingAzureblob.prototype['path'] = 'null';
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */

LoggingAzureblob.prototype['public_key'] = 'null';
/**
 * The Azure shared access signature providing write access to the blob service objects. Be sure to update your token before it expires or the logging functionality will not work. Required.
 * @member {String} sas_token
 */

LoggingAzureblob.prototype['sas_token'] = undefined;
var _default = LoggingAzureblob;
exports["default"] = _default;