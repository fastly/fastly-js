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
 * The LoggingNewrelicAllOf model module.
 * @module model/LoggingNewrelicAllOf
 * @version 3.0.0-alpha1
 */
var LoggingNewrelicAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingNewrelicAllOf</code>.
   * @alias module:model/LoggingNewrelicAllOf
   */
  function LoggingNewrelicAllOf() {
    _classCallCheck(this, LoggingNewrelicAllOf);

    LoggingNewrelicAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingNewrelicAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingNewrelicAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingNewrelicAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingNewrelicAllOf} The populated <code>LoggingNewrelicAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingNewrelicAllOf();

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], Object);
        }

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }

        if (data.hasOwnProperty('region')) {
          obj['region'] = _ApiClient["default"].convertToType(data['region'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingNewrelicAllOf;
}();
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that New Relic Logs can ingest.
 * @member {Object} format
 */


LoggingNewrelicAllOf.prototype['format'] = undefined;
/**
 * The Insert API key from the Account page of your New Relic account. Required.
 * @member {String} token
 */

LoggingNewrelicAllOf.prototype['token'] = undefined;
/**
 * The region to which to stream logs.
 * @member {module:model/LoggingNewrelicAllOf.RegionEnum} region
 * @default 'US'
 */

LoggingNewrelicAllOf.prototype['region'] = undefined;
/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */

LoggingNewrelicAllOf['RegionEnum'] = {
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
var _default = LoggingNewrelicAllOf;
exports["default"] = _default;