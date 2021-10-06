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
 * The LoggingHoneycombAllOf model module.
 * @module model/LoggingHoneycombAllOf
 * @version 3.0.0-alpha1
 */
var LoggingHoneycombAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingHoneycombAllOf</code>.
   * @alias module:model/LoggingHoneycombAllOf
   */
  function LoggingHoneycombAllOf() {
    _classCallCheck(this, LoggingHoneycombAllOf);

    LoggingHoneycombAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingHoneycombAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingHoneycombAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingHoneycombAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingHoneycombAllOf} The populated <code>LoggingHoneycombAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingHoneycombAllOf();

        if (data.hasOwnProperty('dataset')) {
          obj['dataset'] = _ApiClient["default"].convertToType(data['dataset'], 'String');
        }

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], Object);
        }

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingHoneycombAllOf;
}();
/**
 * The Honeycomb Dataset you want to log to.
 * @member {String} dataset
 */


LoggingHoneycombAllOf.prototype['dataset'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats). Must produce valid JSON that Honeycomb can ingest.
 * @member {Object} format
 */

LoggingHoneycombAllOf.prototype['format'] = undefined;
/**
 * The Write Key from the Account page of your Honeycomb account.
 * @member {String} token
 */

LoggingHoneycombAllOf.prototype['token'] = undefined;
var _default = LoggingHoneycombAllOf;
exports["default"] = _default;