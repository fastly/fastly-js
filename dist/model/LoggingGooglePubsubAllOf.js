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
 * The LoggingGooglePubsubAllOf model module.
 * @module model/LoggingGooglePubsubAllOf
 * @version 3.0.0-alpha1
 */
var LoggingGooglePubsubAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingGooglePubsubAllOf</code>.
   * @alias module:model/LoggingGooglePubsubAllOf
   */
  function LoggingGooglePubsubAllOf() {
    _classCallCheck(this, LoggingGooglePubsubAllOf);

    LoggingGooglePubsubAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingGooglePubsubAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingGooglePubsubAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingGooglePubsubAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingGooglePubsubAllOf} The populated <code>LoggingGooglePubsubAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingGooglePubsubAllOf();

        if (data.hasOwnProperty('topic')) {
          obj['topic'] = _ApiClient["default"].convertToType(data['topic'], 'String');
        }

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingGooglePubsubAllOf;
}();
/**
 * The Google Cloud Pub/Sub topic to which logs will be published. Required.
 * @member {String} topic
 */


LoggingGooglePubsubAllOf.prototype['topic'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */

LoggingGooglePubsubAllOf.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * Your Google Cloud Platform project ID. Required
 * @member {String} project_id
 */

LoggingGooglePubsubAllOf.prototype['project_id'] = undefined;
var _default = LoggingGooglePubsubAllOf;
exports["default"] = _default;