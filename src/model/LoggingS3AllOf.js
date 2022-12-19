/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The LoggingS3AllOf model module.
 * @module model/LoggingS3AllOf
 * @version 3.0.1-alpha.1
 */
class LoggingS3AllOf {
    /**
     * Constructs a new <code>LoggingS3AllOf</code>.
     * @alias module:model/LoggingS3AllOf
     */
    constructor() { 
        
        LoggingS3AllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingS3AllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingS3AllOf} obj Optional instance to populate.
     * @return {module:model/LoggingS3AllOf} The populated <code>LoggingS3AllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingS3AllOf();

            if (data.hasOwnProperty('access_key')) {
                obj['access_key'] = ApiClient.convertToType(data['access_key'], 'String');
            }
            if (data.hasOwnProperty('acl')) {
                obj['acl'] = ApiClient.convertToType(data['acl'], 'String');
            }
            if (data.hasOwnProperty('bucket_name')) {
                obj['bucket_name'] = ApiClient.convertToType(data['bucket_name'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('iam_role')) {
                obj['iam_role'] = ApiClient.convertToType(data['iam_role'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('public_key')) {
                obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
            }
            if (data.hasOwnProperty('redundancy')) {
                obj['redundancy'] = ApiClient.convertToType(data['redundancy'], 'String');
            }
            if (data.hasOwnProperty('secret_key')) {
                obj['secret_key'] = ApiClient.convertToType(data['secret_key'], 'String');
            }
            if (data.hasOwnProperty('server_side_encryption_kms_key_id')) {
                obj['server_side_encryption_kms_key_id'] = ApiClient.convertToType(data['server_side_encryption_kms_key_id'], 'String');
            }
            if (data.hasOwnProperty('server_side_encryption')) {
                obj['server_side_encryption'] = ApiClient.convertToType(data['server_side_encryption'], 'String');
            }
        }
        return obj;
    }


}

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
 * Optional server-side KMS Key Id. Must be set if `server_side_encryption` is set to `aws:kms` or `AES256`.
 * @member {String} server_side_encryption_kms_key_id
 * @default 'null'
 */
LoggingS3AllOf.prototype['server_side_encryption_kms_key_id'] = 'null';

/**
 * Set this to `AES256` or `aws:kms` to enable S3 Server Side Encryption.
 * @member {String} server_side_encryption
 * @default 'null'
 */
LoggingS3AllOf.prototype['server_side_encryption'] = 'null';






export default LoggingS3AllOf;

