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
 * The LoggingRequestCapsCommon model module.
 * @module model/LoggingRequestCapsCommon
 * @version 3.0.0-alpha1
 */
var LoggingRequestCapsCommon = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingRequestCapsCommon</code>.
   * @alias module:model/LoggingRequestCapsCommon
   */
  function LoggingRequestCapsCommon() {
    _classCallCheck(this, LoggingRequestCapsCommon);

    LoggingRequestCapsCommon.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingRequestCapsCommon, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingRequestCapsCommon</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingRequestCapsCommon} obj Optional instance to populate.
     * @return {module:model/LoggingRequestCapsCommon} The populated <code>LoggingRequestCapsCommon</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingRequestCapsCommon();

        if (data.hasOwnProperty('request_max_bytes')) {
          obj['request_max_bytes'] = _ApiClient["default"].convertToType(data['request_max_bytes'], 'Number');
        }

        if (data.hasOwnProperty('request_max_entries')) {
          obj['request_max_entries'] = _ApiClient["default"].convertToType(data['request_max_entries'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return LoggingRequestCapsCommon;
}();
/**
 * The maximum number of bytes sent in one request. Defaults `0` for unbounded.
 * @member {Number} request_max_bytes
 * @default 0
 */


LoggingRequestCapsCommon.prototype['request_max_bytes'] = 0;
/**
 * The maximum number of logs sent in one request. Defaults `0` for unbounded.
 * @member {Number} request_max_entries
 * @default 0
 */

LoggingRequestCapsCommon.prototype['request_max_entries'] = 0;
var _default = LoggingRequestCapsCommon;
exports["default"] = _default;