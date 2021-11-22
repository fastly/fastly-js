"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingBigqueryAllOf = _interopRequireDefault(require("./LoggingBigqueryAllOf"));

var _LoggingCommon = _interopRequireDefault(require("./LoggingCommon"));

var _LoggingGcsCommon = _interopRequireDefault(require("./LoggingGcsCommon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingBigquery model module.
 * @module model/LoggingBigquery
 * @version 3.0.0-alpha1
 */
var LoggingBigquery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingBigquery</code>.
   * @alias module:model/LoggingBigquery
   * @implements module:model/LoggingCommon
   * @implements module:model/LoggingGcsCommon
   * @implements module:model/LoggingBigqueryAllOf
   */
  function LoggingBigquery() {
    _classCallCheck(this, LoggingBigquery);

    _LoggingCommon["default"].initialize(this);

    _LoggingGcsCommon["default"].initialize(this);

    _LoggingBigqueryAllOf["default"].initialize(this);

    LoggingBigquery.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingBigquery, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingBigquery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingBigquery} obj Optional instance to populate.
     * @return {module:model/LoggingBigquery} The populated <code>LoggingBigquery</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingBigquery();

        _LoggingCommon["default"].constructFromObject(data, obj);

        _LoggingGcsCommon["default"].constructFromObject(data, obj);

        _LoggingBigqueryAllOf["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], 'String');
        }

        if (data.hasOwnProperty('secret_key')) {
          obj['secret_key'] = _ApiClient["default"].convertToType(data['secret_key'], 'String');
        }

        if (data.hasOwnProperty('dataset')) {
          obj['dataset'] = _ApiClient["default"].convertToType(data['dataset'], 'String');
        }

        if (data.hasOwnProperty('table')) {
          obj['table'] = _ApiClient["default"].convertToType(data['table'], 'String');
        }

        if (data.hasOwnProperty('template_suffix')) {
          obj['template_suffix'] = _ApiClient["default"].convertToType(data['template_suffix'], 'String');
        }

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingBigquery;
}();
/**
 * The name of the BigQuery logging object. Used as a primary key for API access.
 * @member {String} name
 */


LoggingBigquery.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingBigquery.PlacementEnum} placement
 */

LoggingBigquery.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingBigquery.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

LoggingBigquery.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

LoggingBigquery.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table.
 * @member {String} format
 */

LoggingBigquery.prototype['format'] = undefined;
/**
 * Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
 * @member {String} user
 */

LoggingBigquery.prototype['user'] = undefined;
/**
 * Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
 * @member {String} secret_key
 */

LoggingBigquery.prototype['secret_key'] = undefined;
/**
 * Your BigQuery dataset.
 * @member {String} dataset
 */

LoggingBigquery.prototype['dataset'] = undefined;
/**
 * Your BigQuery table.
 * @member {String} table
 */

LoggingBigquery.prototype['table'] = undefined;
/**
 * BigQuery table name suffix template. Optional.
 * @member {String} template_suffix
 */

LoggingBigquery.prototype['template_suffix'] = undefined;
/**
 * Your Google Cloud Platform project ID. Required
 * @member {String} project_id
 */

LoggingBigquery.prototype['project_id'] = undefined; // Implement LoggingCommon interface:

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

_LoggingCommon["default"].prototype['format'] = '%h %l %u %t "%r" %&gt;s %b'; // Implement LoggingGcsCommon interface:

/**
 * Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
 * @member {String} user
 */

_LoggingGcsCommon["default"].prototype['user'] = undefined;
/**
 * Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
 * @member {String} secret_key
 */

_LoggingGcsCommon["default"].prototype['secret_key'] = undefined; // Implement LoggingBigqueryAllOf interface:

/**
 * The name of the BigQuery logging object. Used as a primary key for API access.
 * @member {String} name
 */

_LoggingBigqueryAllOf["default"].prototype['name'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce JSON that matches the schema of your BigQuery table.
 * @member {String} format
 */

_LoggingBigqueryAllOf["default"].prototype['format'] = undefined;
/**
 * Your BigQuery dataset.
 * @member {String} dataset
 */

_LoggingBigqueryAllOf["default"].prototype['dataset'] = undefined;
/**
 * Your BigQuery table.
 * @member {String} table
 */

_LoggingBigqueryAllOf["default"].prototype['table'] = undefined;
/**
 * BigQuery table name suffix template. Optional.
 * @member {String} template_suffix
 */

_LoggingBigqueryAllOf["default"].prototype['template_suffix'] = undefined;
/**
 * Your Google Cloud Platform project ID. Required
 * @member {String} project_id
 */

_LoggingBigqueryAllOf["default"].prototype['project_id'] = undefined;
/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */

LoggingBigquery['PlacementEnum'] = {
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

LoggingBigquery['FormatVersionEnum'] = {
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
var _default = LoggingBigquery;
exports["default"] = _default;