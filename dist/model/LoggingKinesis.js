"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LoggingFormatVersion = _interopRequireDefault(require("./LoggingFormatVersion"));

var _LoggingPlacement = _interopRequireDefault(require("./LoggingPlacement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoggingKinesis model module.
 * @module model/LoggingKinesis
 * @version 3.0.0-alpha1
 */
var LoggingKinesis = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingKinesis</code>.
   * @alias module:model/LoggingKinesis
   */
  function LoggingKinesis() {
    _classCallCheck(this, LoggingKinesis);

    LoggingKinesis.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingKinesis, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingKinesis</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingKinesis} obj Optional instance to populate.
     * @return {module:model/LoggingKinesis} The populated <code>LoggingKinesis</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingKinesis();

        if (data.hasOwnProperty('access_key')) {
          obj['access_key'] = _ApiClient["default"].convertToType(data['access_key'], 'String');
        }

        if (data.hasOwnProperty('format')) {
          obj['format'] = _ApiClient["default"].convertToType(data['format'], 'String');
        }

        if (data.hasOwnProperty('format_version')) {
          obj['format_version'] = _LoggingFormatVersion["default"].constructFromObject(data['format_version']);
        }

        if (data.hasOwnProperty('iam_role')) {
          obj['iam_role'] = _ApiClient["default"].convertToType(data['iam_role'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('placement')) {
          obj['placement'] = _LoggingPlacement["default"].constructFromObject(data['placement']);
        }

        if (data.hasOwnProperty('region')) {
          obj['region'] = _ApiClient["default"].convertToType(data['region'], 'String');
        }

        if (data.hasOwnProperty('secret_key')) {
          obj['secret_key'] = _ApiClient["default"].convertToType(data['secret_key'], 'String');
        }

        if (data.hasOwnProperty('topic')) {
          obj['topic'] = _ApiClient["default"].convertToType(data['topic'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingKinesis;
}();
/**
 * The access key associated with the target Amazon Kinesis stream. Not required if `iam_role` is specified.
 * @member {String} access_key
 */


LoggingKinesis.prototype['access_key'] = undefined;
/**
 * @member {String} format
 */

LoggingKinesis.prototype['format'] = undefined;
/**
 * @member {module:model/LoggingFormatVersion} format_version
 */

LoggingKinesis.prototype['format_version'] = undefined;
/**
 * The ARN for an IAM role granting Fastly access to the target Amazon Kinesis stream. Not required if `access_key` and `secret_key` are provided.
 * @member {String} iam_role
 */

LoggingKinesis.prototype['iam_role'] = undefined;
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */

LoggingKinesis.prototype['name'] = undefined;
/**
 * @member {module:model/LoggingPlacement} placement
 */

LoggingKinesis.prototype['placement'] = undefined;
/**
 * The [AWS region](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints) to stream logs to.
 * @member {module:model/LoggingKinesis.RegionEnum} region
 */

LoggingKinesis.prototype['region'] = undefined;
/**
 * The secret key associated with the target Amazon Kinesis stream. Not required if `iam_role` is specified.
 * @member {String} secret_key
 */

LoggingKinesis.prototype['secret_key'] = undefined;
/**
 * The Amazon Kinesis stream to send logs to. Required.
 * @member {String} topic
 */

LoggingKinesis.prototype['topic'] = undefined;
/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */

LoggingKinesis['RegionEnum'] = {
  /**
   * value: "us-east-1"
   * @const
   */
  "us-east-1": "us-east-1",

  /**
   * value: "us-east-2"
   * @const
   */
  "us-east-2": "us-east-2",

  /**
   * value: "us-west-1"
   * @const
   */
  "us-west-1": "us-west-1",

  /**
   * value: "us-west-2"
   * @const
   */
  "us-west-2": "us-west-2",

  /**
   * value: "af-south-1"
   * @const
   */
  "af-south-1": "af-south-1",

  /**
   * value: "ap-east-1"
   * @const
   */
  "ap-east-1": "ap-east-1",

  /**
   * value: "ap-south-1"
   * @const
   */
  "ap-south-1": "ap-south-1",

  /**
   * value: "ap-northeast-3"
   * @const
   */
  "ap-northeast-3": "ap-northeast-3",

  /**
   * value: "ap-northeast-2"
   * @const
   */
  "ap-northeast-2": "ap-northeast-2",

  /**
   * value: "ap-southeast-1"
   * @const
   */
  "ap-southeast-1": "ap-southeast-1",

  /**
   * value: "ap-southeast-2"
   * @const
   */
  "ap-southeast-2": "ap-southeast-2",

  /**
   * value: "ap-northeast-1"
   * @const
   */
  "ap-northeast-1": "ap-northeast-1",

  /**
   * value: "ca-central-1"
   * @const
   */
  "ca-central-1": "ca-central-1",

  /**
   * value: "cn-north-1"
   * @const
   */
  "cn-north-1": "cn-north-1",

  /**
   * value: "cn-northwest-1"
   * @const
   */
  "cn-northwest-1": "cn-northwest-1",

  /**
   * value: "eu-central-1"
   * @const
   */
  "eu-central-1": "eu-central-1",

  /**
   * value: "eu-west-1"
   * @const
   */
  "eu-west-1": "eu-west-1",

  /**
   * value: "eu-west-2"
   * @const
   */
  "eu-west-2": "eu-west-2",

  /**
   * value: "eu-south-1"
   * @const
   */
  "eu-south-1": "eu-south-1",

  /**
   * value: "eu-west-3"
   * @const
   */
  "eu-west-3": "eu-west-3",

  /**
   * value: "eu-north-1"
   * @const
   */
  "eu-north-1": "eu-north-1",

  /**
   * value: "me-south-1"
   * @const
   */
  "me-south-1": "me-south-1",

  /**
   * value: "sa-east-1"
   * @const
   */
  "sa-east-1": "sa-east-1"
};
var _default = LoggingKinesis;
exports["default"] = _default;