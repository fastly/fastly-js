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
 * The LoggingDigitaloceanAllOf model module.
 * @module model/LoggingDigitaloceanAllOf
 * @version 4.0.0
 */
class LoggingDigitaloceanAllOf {
    /**
     * Constructs a new <code>LoggingDigitaloceanAllOf</code>.
     * @alias module:model/LoggingDigitaloceanAllOf
     */
    constructor() { 
        
        LoggingDigitaloceanAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingDigitaloceanAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingDigitaloceanAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingDigitaloceanAllOf} The populated <code>LoggingDigitaloceanAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingDigitaloceanAllOf();

            if (data.hasOwnProperty('bucket_name')) {
                obj['bucket_name'] = ApiClient.convertToType(data['bucket_name'], 'String');
            }
            if (data.hasOwnProperty('access_key')) {
                obj['access_key'] = ApiClient.convertToType(data['access_key'], 'String');
            }
            if (data.hasOwnProperty('secret_key')) {
                obj['secret_key'] = ApiClient.convertToType(data['secret_key'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('public_key')) {
                obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the DigitalOcean Space.
 * @member {String} bucket_name
 */
LoggingDigitaloceanAllOf.prototype['bucket_name'] = undefined;

/**
 * Your DigitalOcean Spaces account access key.
 * @member {String} access_key
 */
LoggingDigitaloceanAllOf.prototype['access_key'] = undefined;

/**
 * Your DigitalOcean Spaces account secret key.
 * @member {String} secret_key
 */
LoggingDigitaloceanAllOf.prototype['secret_key'] = undefined;

/**
 * The domain of the DigitalOcean Spaces endpoint.
 * @member {String} domain
 * @default 'nyc3.digitaloceanspaces.com'
 */
LoggingDigitaloceanAllOf.prototype['domain'] = 'nyc3.digitaloceanspaces.com';

/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */
LoggingDigitaloceanAllOf.prototype['path'] = 'null';

/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingDigitaloceanAllOf.prototype['public_key'] = 'null';






export default LoggingDigitaloceanAllOf;

