"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingDatadogAllOf model module.
 * @module model/LoggingDatadogAllOf
 * @version 3.0.0-alpha1
 */
var LoggingDatadogAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingDatadogAllOf</code>.
   * @alias module:model/LoggingDatadogAllOf
   */
  function LoggingDatadogAllOf() {
    _classCallCheck(this, LoggingDatadogAllOf);

    LoggingDatadogAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingDatadogAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingDatadogAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingDatadogAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingDatadogAllOf} The populated <code>LoggingDatadogAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingDatadogAllOf();

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], Object);
        }

        if (data.hasOwnProperty('region')) {
          obj['region'] = _ApiClient["default"].convertToType(data['region'], 'String');
        }

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingDatadogAllOf;
}();
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Datadog can ingest. 
 * @member {Object} format
 */


LoggingDatadogAllOf.prototype['format'] = undefined;
/**
 * The region that log data will be sent to.
 * @member {module:model/LoggingDatadogAllOf.RegionEnum} region
 * @default 'US'
 */

LoggingDatadogAllOf.prototype['region'] = undefined;
/**
 * The API key from your Datadog account. Required.
 * @member {String} token
 */

LoggingDatadogAllOf.prototype['token'] = undefined;
/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */

LoggingDatadogAllOf['RegionEnum'] = {
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
var _default = LoggingDatadogAllOf;
exports["default"] = _default;