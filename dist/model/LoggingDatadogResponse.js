"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingDatadog = _interopRequireDefault(require("./LoggingDatadog"));

var _ServiceIdAndVersion = _interopRequireDefault(require("./ServiceIdAndVersion"));

var _Timestamps = _interopRequireDefault(require("./Timestamps"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingDatadogResponse model module.
 * @module model/LoggingDatadogResponse
 * @version 3.0.0-alpha1
 */
var LoggingDatadogResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingDatadogResponse</code>.
   * @alias module:model/LoggingDatadogResponse
   * @implements module:model/LoggingDatadog
   * @implements module:model/Timestamps
   * @implements module:model/ServiceIdAndVersion
   */
  function LoggingDatadogResponse() {
    _classCallCheck(this, LoggingDatadogResponse);

    _LoggingDatadog["default"].initialize(this);

    _Timestamps["default"].initialize(this);

    _ServiceIdAndVersion["default"].initialize(this);

    LoggingDatadogResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingDatadogResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingDatadogResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingDatadogResponse} obj Optional instance to populate.
     * @return {module:model/LoggingDatadogResponse} The populated <code>LoggingDatadogResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingDatadogResponse();

        _LoggingDatadog["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('region')) {
          obj['region'] = _ApiClient["default"].convertToType(data['region'], 'String');
        }

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
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

  return LoggingDatadogResponse;
}();
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */


LoggingDatadogResponse.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingDatadogResponse.PlacementEnum} placement
 */

LoggingDatadogResponse.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingDatadogResponse.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

LoggingDatadogResponse.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

LoggingDatadogResponse.prototype['response_condition'] = undefined;
/**
 * @member {String} format
 */

LoggingDatadogResponse.prototype['format'] = undefined;
/**
 * The region that log data will be sent to.
 * @member {module:model/LoggingDatadogResponse.RegionEnum} region
 * @default 'US'
 */

LoggingDatadogResponse.prototype['region'] = undefined;
/**
 * The API key from your Datadog account. Required.
 * @member {String} token
 */

LoggingDatadogResponse.prototype['token'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} created_at
 */

LoggingDatadogResponse.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} deleted_at
 */

LoggingDatadogResponse.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {String} updated_at
 */

LoggingDatadogResponse.prototype['updated_at'] = undefined;
/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */

LoggingDatadogResponse.prototype['service_id'] = undefined;
/**
 * Integer identifying a service version.
 * @member {Number} version
 */

LoggingDatadogResponse.prototype['version'] = undefined; // Implement LoggingDatadog interface:

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */

_LoggingDatadog["default"].prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingDatadog.PlacementEnum} placement
 */

_LoggingDatadog["default"].prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingDatadog.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

_LoggingDatadog["default"].prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

_LoggingDatadog["default"].prototype['response_condition'] = undefined;
/**
 * @member {String} format
 */

_LoggingDatadog["default"].prototype['format'] = undefined;
/**
 * The region that log data will be sent to.
 * @member {module:model/LoggingDatadog.RegionEnum} region
 * @default 'US'
 */

_LoggingDatadog["default"].prototype['region'] = undefined;
/**
 * The API key from your Datadog account. Required.
 * @member {String} token
 */

_LoggingDatadog["default"].prototype['token'] = undefined; // Implement Timestamps interface:

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

LoggingDatadogResponse['PlacementEnum'] = {
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

LoggingDatadogResponse['FormatVersionEnum'] = {
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
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */

LoggingDatadogResponse['RegionEnum'] = {
  /**
   * value: "US"
   * @const
   */
  "US": "US",

  /**
   * value: "EU"
   * @const
   */
  "EU": "EU"
};
var _default = LoggingDatadogResponse;
exports["default"] = _default;