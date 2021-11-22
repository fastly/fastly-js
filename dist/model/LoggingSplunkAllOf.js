"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingUseTls = _interopRequireDefault(require("./LoggingUseTls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingSplunkAllOf model module.
 * @module model/LoggingSplunkAllOf
 * @version 3.0.0-alpha1
 */
var LoggingSplunkAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingSplunkAllOf</code>.
   * @alias module:model/LoggingSplunkAllOf
   */
  function LoggingSplunkAllOf() {
    _classCallCheck(this, LoggingSplunkAllOf);

    LoggingSplunkAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingSplunkAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingSplunkAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingSplunkAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingSplunkAllOf} The populated <code>LoggingSplunkAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingSplunkAllOf();

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }

        if (data.hasOwnProperty('use_tls')) {
          obj['use_tls'] = _LoggingUseTls["default"].constructFromObject(data['use_tls']);
        }
      }

      return obj;
    }
  }]);

  return LoggingSplunkAllOf;
}();
/**
 * The URL to post logs to.
 * @member {String} url
 */


LoggingSplunkAllOf.prototype['url'] = undefined;
/**
 * A Splunk token for use in posting logs over HTTP to your collector.
 * @member {String} token
 */

LoggingSplunkAllOf.prototype['token'] = undefined;
/**
 * @member {module:model/LoggingUseTls} use_tls
 */

LoggingSplunkAllOf.prototype['use_tls'] = undefined;
var _default = LoggingSplunkAllOf;
exports["default"] = _default;