"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingGooglePubsub = _interopRequireDefault(require("./LoggingGooglePubsub"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingGooglePubsubResponse model module.
 * @module model/LoggingGooglePubsubResponse
 * @version 3.0.0-alpha1
 */
var LoggingGooglePubsubResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingGooglePubsubResponse</code>.
   * @alias module:model/LoggingGooglePubsubResponse
   * @implements module:model/LoggingGooglePubsub
   * @implements module:model/Timestamps
   * @implements module:model/ServiceIdAndVersion
   */
  function LoggingGooglePubsubResponse() {
    _classCallCheck(this, LoggingGooglePubsubResponse);

    _LoggingGooglePubsub["default"].initialize(this);

    _Timestamps["default"].initialize(this);

    _ServiceIdAndVersion["default"].initialize(this);

    LoggingGooglePubsubResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingGooglePubsubResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingGooglePubsubResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingGooglePubsubResponse} obj Optional instance to populate.
     * @return {module:model/LoggingGooglePubsubResponse} The populated <code>LoggingGooglePubsubResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingGooglePubsubResponse();

        _LoggingGooglePubsub["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], 'String');
        }

        if (data.hasOwnProperty('secret_key')) {
          obj['secret_key'] = _ApiClient["default"].convertToType(data['secret_key'], 'String');
        }

        if (data.hasOwnProperty('topic')) {
          obj['topic'] = _ApiClient["default"].convertToType(data['topic'], 'String');
        }

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'String');
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

  return LoggingGooglePubsubResponse;
}();
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */


LoggingGooglePubsubResponse.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingGooglePubsubResponse.PlacementEnum} placement
 */

LoggingGooglePubsubResponse.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingGooglePubsubResponse.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

LoggingGooglePubsubResponse.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

LoggingGooglePubsubResponse.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */

LoggingGooglePubsubResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
 * @member {String} user
 */

LoggingGooglePubsubResponse.prototype['user'] = undefined;
/**
 * Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
 * @member {String} secret_key
 */

LoggingGooglePubsubResponse.prototype['secret_key'] = undefined;
/**
 * The Google Cloud Pub/Sub topic to which logs will be published. Required.
 * @member {String} topic
 */

LoggingGooglePubsubResponse.prototype['topic'] = undefined;
/**
 * Your Google Cloud Platform project ID. Required
 * @member {String} project_id
 */

LoggingGooglePubsubResponse.prototype['project_id'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

LoggingGooglePubsubResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

LoggingGooglePubsubResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

LoggingGooglePubsubResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

LoggingGooglePubsubResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

LoggingGooglePubsubResponse.prototype['version'] = undefined; // Implement LoggingGooglePubsub interface:

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */

_LoggingGooglePubsub["default"].prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingGooglePubsub.PlacementEnum} placement
 */

_LoggingGooglePubsub["default"].prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingGooglePubsub.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

_LoggingGooglePubsub["default"].prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

_LoggingGooglePubsub["default"].prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */

_LoggingGooglePubsub["default"].prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
 * @member {String} user
 */

_LoggingGooglePubsub["default"].prototype['user'] = undefined;
/**
 * Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
 * @member {String} secret_key
 */

_LoggingGooglePubsub["default"].prototype['secret_key'] = undefined;
/**
 * The Google Cloud Pub/Sub topic to which logs will be published. Required.
 * @member {String} topic
 */

_LoggingGooglePubsub["default"].prototype['topic'] = undefined;
/**
 * Your Google Cloud Platform project ID. Required
 * @member {String} project_id
 */

_LoggingGooglePubsub["default"].prototype['project_id'] = undefined; // Implement Timestamps interface:

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

LoggingGooglePubsubResponse['PlacementEnum'] = {
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

LoggingGooglePubsubResponse['FormatVersionEnum'] = {
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
var _default = LoggingGooglePubsubResponse;
exports["default"] = _default;