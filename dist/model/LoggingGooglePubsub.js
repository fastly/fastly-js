"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingCommon = _interopRequireDefault(require("./LoggingCommon"));

var _LoggingFormatVersion = _interopRequireDefault(require("./LoggingFormatVersion"));

var _LoggingGcsCommon = _interopRequireDefault(require("./LoggingGcsCommon"));

var _LoggingGooglePubsubAllOf = _interopRequireDefault(require("./LoggingGooglePubsubAllOf"));

var _LoggingPlacement = _interopRequireDefault(require("./LoggingPlacement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingGooglePubsub model module.
 * @module model/LoggingGooglePubsub
 * @version 3.0.0-alpha1
 */
var LoggingGooglePubsub = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingGooglePubsub</code>.
   * @alias module:model/LoggingGooglePubsub
   */
  function LoggingGooglePubsub() {
    _classCallCheck(this, LoggingGooglePubsub);

    LoggingGooglePubsub.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingGooglePubsub, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingGooglePubsub</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingGooglePubsub} obj Optional instance to populate.
     * @return {module:model/LoggingGooglePubsub} The populated <code>LoggingGooglePubsub</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingGooglePubsub();

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }

        if (data.hasOwnProperty('format_version')) {
          obj['format_version'] = _LoggingFormatVersion["default"].constructFromObject(data['format_version']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('placement')) {
          obj['placement'] = _LoggingPlacement["default"].constructFromObject(data['placement']);
        }

        if (data.hasOwnProperty('response_condition')) {
          obj['response_condition'] = _ApiClient["default"].convertToType(data['response_condition'], 'String');
        }

        if (data.hasOwnProperty('secret_key')) {
          obj['secret_key'] = _ApiClient["default"].convertToType(data['secret_key'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], 'String');
        }

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'String');
        }

        if (data.hasOwnProperty('topic')) {
          obj['topic'] = _ApiClient["default"].convertToType(data['topic'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingGooglePubsub;
}();
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */


LoggingGooglePubsub.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * @member {module:model/LoggingFormatVersion} format_version
 */

LoggingGooglePubsub.prototype['format_version'] = undefined;
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */

LoggingGooglePubsub.prototype['name'] = undefined;
/**
 * @member {module:model/LoggingPlacement} placement
 */

LoggingGooglePubsub.prototype['placement'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */

LoggingGooglePubsub.prototype['response_condition'] = undefined;
/**
 * Your Google Cloud Platform account secret key. The `private_key` field in your service account authentication JSON. Required.
 * @member {String} secret_key
 */

LoggingGooglePubsub.prototype['secret_key'] = undefined;
/**
 * Your Google Cloud Platform service account email address. The `client_email` field in your service account authentication JSON. Required.
 * @member {String} user
 */

LoggingGooglePubsub.prototype['user'] = undefined;
/**
 * Your Google Cloud Platform project ID. Required
 * @member {String} project_id
 */

LoggingGooglePubsub.prototype['project_id'] = undefined;
/**
 * The Google Cloud Pub/Sub topic to which logs will be published. Required.
 * @member {String} topic
 */

LoggingGooglePubsub.prototype['topic'] = undefined;
var _default = LoggingGooglePubsub;
exports["default"] = _default;