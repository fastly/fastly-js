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
 * The LoggingAddressAndPort model module.
 * @module model/LoggingAddressAndPort
 * @version 3.0.0-alpha1
 */
var LoggingAddressAndPort = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingAddressAndPort</code>.
   * @alias module:model/LoggingAddressAndPort
   */
  function LoggingAddressAndPort() {
    _classCallCheck(this, LoggingAddressAndPort);

    LoggingAddressAndPort.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingAddressAndPort, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingAddressAndPort</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingAddressAndPort} obj Optional instance to populate.
     * @return {module:model/LoggingAddressAndPort} The populated <code>LoggingAddressAndPort</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingAddressAndPort();

        if (data.hasOwnProperty('address')) {
          obj['address'] = _ApiClient["default"].convertToType(data['address'], 'String');
        }

        if (data.hasOwnProperty('port')) {
          obj['port'] = _ApiClient["default"].convertToType(data['port'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LoggingAddressAndPort;
}();
/**
 * A hostname or IPv4 address.
 * @member {String} address
 */


LoggingAddressAndPort.prototype['address'] = undefined;
/**
 * The port number.
 * @member {Number} port
 * @default 514
 */

LoggingAddressAndPort.prototype['port'] = 514;
var _default = LoggingAddressAndPort;
exports["default"] = _default;