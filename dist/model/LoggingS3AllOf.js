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
 * The LoggingS3AllOf model module.
 * @module model/LoggingS3AllOf
 * @version 3.0.0-alpha1
 */
var LoggingS3AllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>LoggingS3AllOf</code>.
   * @alias module:model/LoggingS3AllOf
   */
  function LoggingS3AllOf() {
    _classCallCheck(this, LoggingS3AllOf);

    LoggingS3AllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoggingS3AllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoggingS3AllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingS3AllOf} obj Optional instance to populate.
     * @return {module:model/LoggingS3AllOf} The populated <code>LoggingS3AllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoggingS3AllOf();

        if (data.hasOwnProperty('access_key')) {
          obj['access_key'] = _ApiClient["default"].convertToType(data['access_key'], 'String');
        }

        if (data.hasOwnProperty('acl')) {
          obj['acl'] = _ApiClient["default"].convertToType(data['acl'], 'String');
        }

        if (data.hasOwnProperty('bucket_name')) {
          obj['bucket_name'] = _ApiClient["default"].convertToType(data['bucket_name'], 'String');
        }

        if (data.hasOwnProperty('domain')) {
          obj['domain'] = _ApiClient["default"].convertToType(data['domain'], 'String');
        }

        if (data.hasOwnProperty('iam_role')) {
          obj['iam_role'] = _ApiClient["default"].convertToType(data['iam_role'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('public_key')) {
          obj['public_key'] = _ApiClient["default"].convertToType(data['public_key'], 'String');
        }

        if (data.hasOwnProperty('redundancy')) {
          obj['redundancy'] = _ApiClient["default"].convertToType(data['redundancy'], 'String');
        }

        if (data.hasOwnProperty('secret_key')) {
          obj['secret_key'] = _ApiClient["default"].convertToType(data['secret_key'], 'String');
        }

        if (data.hasOwnProperty('server_side_encryption')) {
          obj['server_side_encryption'] = _ApiClient["default"].convertToType(data['server_side_encryption'], 'String');
        }

        if (data.hasOwnProperty('server_side_encryption_kms_key_id')) {
          obj['server_side_encryption_kms_key_id'] = _ApiClient["default"].convertToType(data['server_side_encryption_kms_key_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return LoggingS3AllOf;
}();
/**
 * The access key for your S3 account. Not required if `iam_role` is provided.
 * @member {String} access_key
 */


LoggingS3AllOf.prototype['access_key'] = undefined;
/**
 * The access control list (ACL) specific request header. See the AWS documentation for [Access Control List (ACL) Specific Request Headers](https://docs.aws.amazon.com/AmazonS3/latest/API/mpUploadInitiate.html#initiate-mpu-acl-specific-request-headers) for more information.
 * @member {String} acl
 */

LoggingS3AllOf.prototype['acl'] = undefined;
/**
 * The bucket name for S3 account.
 * @member {String} bucket_name
 */

LoggingS3AllOf.prototype['bucket_name'] = undefined;
/**
 * The domain of the Amazon S3 endpoint.
 * @member {String} domain
 */

LoggingS3AllOf.prototype['domain'] = undefined;
/**
 * The Amazon Resource Name (ARN) for the IAM role granting Fastly access to S3. Not required if `access_key` and `secret_key` are provided.
 * @member {String} iam_role
 */

LoggingS3AllOf.prototype['iam_role'] = undefined;
/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */

LoggingS3AllOf.prototype['path'] = 'null';
/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */

LoggingS3AllOf.prototype['public_key'] = 'null';
/**
 * The S3 redundancy level.
 * @member {String} redundancy
 * @default 'null'
 */

LoggingS3AllOf.prototype['redundancy'] = 'null';
/**
 * The secret key for your S3 account. Not required if `iam_role` is provided.
 * @member {String} secret_key
 */

LoggingS3AllOf.prototype['secret_key'] = undefined;
/**
 * Set this to `AES256` or `aws:kms` to enable S3 Server Side Encryption.
 * @member {String} server_side_encryption
 * @default 'null'
 */

LoggingS3AllOf.prototype['server_side_encryption'] = 'null';
/**
 * Optional server-side KMS Key Id. Must be set if `server_side_encryption` is set to `aws:kms` or `AES256`.
 * @member {String} server_side_encryption_kms_key_id
 * @default 'null'
 */

LoggingS3AllOf.prototype['server_side_encryption_kms_key_id'] = 'null';
var _default = LoggingS3AllOf;
exports["default"] = _default;