"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingCommon = _interopRequireDefault(require("./LoggingCommon"));

var _LoggingLogentriesAllOf = _interopRequireDefault(require("./LoggingLogentriesAllOf"));

var _LoggingUseTls = _interopRequireDefault(require("./LoggingUseTls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingLogentries model module.
 * @module model/LoggingLogentries
 * @version 3.0.0-alpha1
 */
var LoggingLogentries = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingLogentries</code>.
   * @alias module:model/LoggingLogentries
   * @implements module:model/LoggingCommon
   * @implements module:model/LoggingLogentriesAllOf
   */
  function LoggingLogentries() {
    _classCallCheck(this, LoggingLogentries);

    _LoggingCommon["default"].initialize(this);

    _LoggingLogentriesAllOf["default"].initialize(this);

    LoggingLogentries.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingLogentries, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingLogentries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingLogentries} obj Optional instance to populate.
     * @return {module:model/LoggingLogentries} The populated <code>LoggingLogentries</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingLogentries();

        _LoggingCommon["default"].constructFromObject(data, obj);

        _LoggingLogentriesAllOf["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('port')) {
          obj['port'] = _ApiClient["default"].convertToType(data['port'], 'Number');
        }

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }

        if (data.hasOwnProperty('use_tls')) {
          obj['use_tls'] = _LoggingUseTls["default"].constructFromObject(data['use_tls']);
        }

        if (data.hasOwnProperty('region')) {
          obj['region'] = _ApiClient["default"].convertToType(data['region'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingLogentries;
}();
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */


LoggingLogentries.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingLogentries.PlacementEnum} placement
 */

LoggingLogentries.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`.  
 * @member {module:model/LoggingLogentries.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */

LoggingLogentries.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

LoggingLogentries.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */

LoggingLogentries.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * The port number.
 * @member {Number} port
 * @default 20000
 */

LoggingLogentries.prototype['port'] = 20000;
/**
 * Use token based authentication ([https://logentries.com/doc/input-token/](https://logentries.com/doc/input-token/)).
 * @member {String} token
 */

LoggingLogentries.prototype['token'] = undefined;
/**
 * @member {module:model/LoggingUseTls} use_tls
 */

LoggingLogentries.prototype['use_tls'] = undefined;
/**
 * The region to which to stream logs.
 * @member {module:model/LoggingLogentries.RegionEnum} region
 */

LoggingLogentries.prototype['region'] = undefined; // Implement LoggingCommon interface:

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

_LoggingCommon["default"].prototype['format'] = '%h %l %u %t "%r" %&gt;s %b'; // Implement LoggingLogentriesAllOf interface:

/**
 * The port number.
 * @member {Number} port
 * @default 20000
 */

_LoggingLogentriesAllOf["default"].prototype['port'] = 20000;
/**
 * Use token based authentication ([https://logentries.com/doc/input-token/](https://logentries.com/doc/input-token/)).
 * @member {String} token
 */

_LoggingLogentriesAllOf["default"].prototype['token'] = undefined;
/**
 * @member {module:model/LoggingUseTls} use_tls
 */

_LoggingLogentriesAllOf["default"].prototype['use_tls'] = undefined;
/**
 * The region to which to stream logs.
 * @member {module:model/LoggingLogentriesAllOf.RegionEnum} region
 */

_LoggingLogentriesAllOf["default"].prototype['region'] = undefined;
/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */

LoggingLogentries['PlacementEnum'] = {
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

LoggingLogentries['FormatVersionEnum'] = {
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

LoggingLogentries['RegionEnum'] = {
  /**
   * value: "US"
   * @const
   */
  "US": "US",

  /**
   * value: "US-2"
   * @const
   */
  "US-2": "US-2",

  /**
   * value: "US-3"
   * @const
   */
  "US-3": "US-3",

  /**
   * value: "EU"
   * @const
   */
  "EU": "EU",

  /**
   * value: "CA"
   * @const
   */
  "CA": "CA",

  /**
   * value: "AU"
   * @const
   */
  "AU": "AU",

  /**
   * value: "AP"
   * @const
   */
  "AP": "AP"
};
var _default = LoggingLogentries;
exports["default"] = _default;