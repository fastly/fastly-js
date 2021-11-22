"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingMessageType = _interopRequireDefault(require("./LoggingMessageType"));

var _LoggingUseTls = _interopRequireDefault(require("./LoggingUseTls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingSyslogAllOf model module.
 * @module model/LoggingSyslogAllOf
 * @version 3.0.0-alpha1
 */
var LoggingSyslogAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingSyslogAllOf</code>.
   * @alias module:model/LoggingSyslogAllOf
   */
  function LoggingSyslogAllOf() {
    _classCallCheck(this, LoggingSyslogAllOf);

    LoggingSyslogAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingSyslogAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingSyslogAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingSyslogAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingSyslogAllOf} The populated <code>LoggingSyslogAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingSyslogAllOf();

        if (data.hasOwnProperty('message_type')) {
          obj['message_type'] = _LoggingMessageType["default"].constructFromObject(data['message_type']);
        }

        if (data.hasOwnProperty('hostname')) {
          obj['hostname'] = _ApiClient["default"].convertToType(data['hostname'], 'String');
        }

        if (data.hasOwnProperty('ipv4')) {
          obj['ipv4'] = _ApiClient["default"].convertToType(data['ipv4'], 'String');
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

  return LoggingSyslogAllOf;
}();
/**
 * @member {module:model/LoggingMessageType} message_type
 */


LoggingSyslogAllOf.prototype['message_type'] = undefined;
/**
 * The hostname used for the syslog endpoint.
 * @member {String} hostname
 */

LoggingSyslogAllOf.prototype['hostname'] = undefined;
/**
 * The IPv4 address used for the syslog endpoint.
 * @member {String} ipv4
 */

LoggingSyslogAllOf.prototype['ipv4'] = undefined;
/**
 * Whether to prepend each message with a specific token.
 * @member {String} token
 * @default 'null'
 */

LoggingSyslogAllOf.prototype['token'] = 'null';
/**
 * @member {module:model/LoggingUseTls} use_tls
 */

LoggingSyslogAllOf.prototype['use_tls'] = undefined;
var _default = LoggingSyslogAllOf;
exports["default"] = _default;