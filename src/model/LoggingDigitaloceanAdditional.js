/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://www.fastly.com/documentation/reference/api/) 
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
 * The LoggingDigitaloceanAdditional model module.
 * @module model/LoggingDigitaloceanAdditional
 * @version 15.0.0-beta.4
 */
class LoggingDigitaloceanAdditional {
    /**
     * Constructs a new <code>LoggingDigitaloceanAdditional</code>.
     * @alias module:model/LoggingDigitaloceanAdditional
     */
    constructor() { 
        
        LoggingDigitaloceanAdditional.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingDigitaloceanAdditional</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingDigitaloceanAdditional} obj Optional instance to populate.
     * @return {module:model/LoggingDigitaloceanAdditional} The populated <code>LoggingDigitaloceanAdditional</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingDigitaloceanAdditional();

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
LoggingDigitaloceanAdditional.prototype['bucket_name'] = undefined;

/**
 * Your DigitalOcean Spaces account access key.
 * @member {String} access_key
 */
LoggingDigitaloceanAdditional.prototype['access_key'] = undefined;

/**
 * Your DigitalOcean Spaces account secret key.
 * @member {String} secret_key
 */
LoggingDigitaloceanAdditional.prototype['secret_key'] = undefined;

/**
 * The domain of the DigitalOcean Spaces endpoint.
 * @member {String} domain
 * @default 'nyc3.digitaloceanspaces.com'
 */
LoggingDigitaloceanAdditional.prototype['domain'] = 'nyc3.digitaloceanspaces.com';

/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */
LoggingDigitaloceanAdditional.prototype['path'] = 'null';

/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingDigitaloceanAdditional.prototype['public_key'] = 'null';






export default LoggingDigitaloceanAdditional;

