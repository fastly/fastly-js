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
 * The LoggingHttpsAllOf model module.
 * @module model/LoggingHttpsAllOf
 * @version 3.0.0-alpha1
 */
var LoggingHttpsAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingHttpsAllOf</code>.
   * @alias module:model/LoggingHttpsAllOf
   */
  function LoggingHttpsAllOf() {
    _classCallCheck(this, LoggingHttpsAllOf);

    LoggingHttpsAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingHttpsAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingHttpsAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingHttpsAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingHttpsAllOf} The populated <code>LoggingHttpsAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingHttpsAllOf();

        if (data.hasOwnProperty('content_type')) {
          obj['content_type'] = _ApiClient["default"].convertToType(data['content_type'], 'String');
        }

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }

        if (data.hasOwnProperty('header_name')) {
          obj['header_name'] = _ApiClient["default"].convertToType(data['header_name'], 'String');
        }

        if (data.hasOwnProperty('header_value')) {
          obj['header_value'] = _ApiClient["default"].convertToType(data['header_value'], 'String');
        }

        if (data.hasOwnProperty('json_format')) {
          obj['json_format'] = _ApiClient["default"].convertToType(data['json_format'], 'String');
        }

        if (data.hasOwnProperty('message_type')) {
          obj['message_type'] = _LoggingMessageType["default"].constructFromObject(data['message_type']);
        }

        if (data.hasOwnProperty('method')) {
          obj['method'] = _ApiClient["default"].convertToType(data['method'], 'String');
        }

        if (data.hasOwnProperty('request_max_bytes')) {
          obj['request_max_bytes'] = _ApiClient["default"].convertToType(data['request_max_bytes'], 'Number');
        }

        if (data.hasOwnProperty('request_max_entries')) {
          obj['request_max_entries'] = _ApiClient["default"].convertToType(data['request_max_entries'], 'Number');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingHttpsAllOf;
}();
/**
 * Content type of the header sent with the request.
 * @member {String} content_type
 * @default 'null'
 */


LoggingHttpsAllOf.prototype['content_type'] = 'null';
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */

LoggingHttpsAllOf.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * Name of the custom header sent with the request.
 * @member {String} header_name
 * @default 'null'
 */

LoggingHttpsAllOf.prototype['header_name'] = 'null';
/**
 * Value of the custom header sent with the request.
 * @member {String} header_value
 * @default 'null'
 */

LoggingHttpsAllOf.prototype['header_value'] = 'null';
/**
 * Enforces valid JSON formatting for log entries.
 * @member {module:model/LoggingHttpsAllOf.JsonFormatEnum} json_format
 */

LoggingHttpsAllOf.prototype['json_format'] = undefined;
/**
 * @member {module:model/LoggingMessageType} message_type
 */

LoggingHttpsAllOf.prototype['message_type'] = undefined;
/**
 * HTTP method used for request.
 * @member {module:model/LoggingHttpsAllOf.MethodEnum} method
 * @default 'POST'
 */

LoggingHttpsAllOf.prototype['method'] = undefined;
/**
 * The maximum number of bytes sent in one request. Defaults `0` (no limit).
 * @member {Number} request_max_bytes
 * @default 0
 */

LoggingHttpsAllOf.prototype['request_max_bytes'] = 0;
/**
 * The maximum number of logs sent in one request. Defaults `0` (no limit).
 * @member {Number} request_max_entries
 * @default 0
 */

LoggingHttpsAllOf.prototype['request_max_entries'] = 0;
/**
 * The URL to send logs to. Must use HTTPS. Required.
 * @member {String} url
 */

LoggingHttpsAllOf.prototype['url'] = undefined;
/**
 * Allowed values for the <code>json_format</code> property.
 * @enum {String}
 * @readonly
 */

LoggingHttpsAllOf['JsonFormatEnum'] = {
  /**
   * value: "0"
   * @const
   */
  "disabled": "0",

  /**
   * value: "1"
   * @const
   */
  "json_array": "1",

  /**
   * value: "2"
   * @const
   */
  "newline_delimited_json": "2"
};
/**
 * Allowed values for the <code>method</code> property.
 * @enum {String}
 * @readonly
 */

LoggingHttpsAllOf['MethodEnum'] = {
  /**
   * value: "POST"
   * @const
   */
  "POST": "POST",

  /**
   * value: "PUT"
   * @const
   */
  "PUT": "PUT"
};
var _default = LoggingHttpsAllOf;
exports["default"] = _default;