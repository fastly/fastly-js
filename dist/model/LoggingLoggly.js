"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingCommon = _interopRequireDefault(require("./LoggingCommon"));

var _LoggingLogglyAllOf = _interopRequireDefault(require("./LoggingLogglyAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingLoggly model module.
 * @module model/LoggingLoggly
 * @version 3.0.0-alpha1
 */
var LoggingLoggly = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingLoggly</code>.
   * @alias module:model/LoggingLoggly
   * @implements module:model/LoggingCommon
   * @implements module:model/LoggingLogglyAllOf
   */
  function LoggingLoggly() {
    _classCallCheck(this, LoggingLoggly);

    _LoggingCommon["default"].initialize(this);

    _LoggingLogglyAllOf["default"].initialize(this);

    LoggingLoggly.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingLoggly, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingLoggly</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingLoggly} obj Optional instance to populate.
     * @return {module:model/LoggingLoggly} The populated <code>LoggingLoggly</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingLoggly();

        _LoggingCommon["default"].constructFromObject(data, obj);

        _LoggingLogglyAllOf["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingLoggly;
}();
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */


LoggingLoggly.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingLoggly.PlacementEnum} placement
 */

LoggingLoggly.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingLoggly.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

LoggingLoggly.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

LoggingLoggly.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */

LoggingLoggly.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * The token to use for authentication ([https://www.loggly.com/docs/customer-token-authentication-token/](https://www.loggly.com/docs/customer-token-authentication-token/)).
 * @member {String} token
 */

LoggingLoggly.prototype['token'] = undefined; // Implement LoggingCommon interface:

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

_LoggingCommon["default"].prototype['format'] = '%h %l %u %t "%r" %&gt;s %b'; // Implement LoggingLogglyAllOf interface:

/**
 * The token to use for authentication ([https://www.loggly.com/docs/customer-token-authentication-token/](https://www.loggly.com/docs/customer-token-authentication-token/)).
 * @member {String} token
 */

_LoggingLogglyAllOf["default"].prototype['token'] = undefined;
/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */

LoggingLoggly['PlacementEnum'] = {
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

LoggingLoggly['FormatVersionEnum'] = {
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
var _default = LoggingLoggly;
exports["default"] = _default;