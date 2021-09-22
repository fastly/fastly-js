"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingMessageType = _interopRequireDefault(require("./LoggingMessageType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingSumologicAllOf model module.
 * @module model/LoggingSumologicAllOf
 * @version 3.0.0-alpha1
 */
var LoggingSumologicAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingSumologicAllOf</code>.
   * @alias module:model/LoggingSumologicAllOf
   */
  function LoggingSumologicAllOf() {
    _classCallCheck(this, LoggingSumologicAllOf);

    LoggingSumologicAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingSumologicAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingSumologicAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingSumologicAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingSumologicAllOf} The populated <code>LoggingSumologicAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingSumologicAllOf();

        if (data.hasOwnProperty('message_type')) {
          obj['message_type'] = _LoggingMessageType["default"].constructFromObject(data['message_type']);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingSumologicAllOf;
}();
/**
 * @member {module:model/LoggingMessageType} message_type
 */


LoggingSumologicAllOf.prototype['message_type'] = undefined;
/**
 * The URL to post logs to.
 * @member {String} url
 */

LoggingSumologicAllOf.prototype['url'] = undefined;
var _default = LoggingSumologicAllOf;
exports["default"] = _default;