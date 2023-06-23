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
 * The LoggingOpenstackAllOf model module.
 * @module model/LoggingOpenstackAllOf
 * @version 4.2.2
 */
class LoggingOpenstackAllOf {
    /**
     * Constructs a new <code>LoggingOpenstackAllOf</code>.
     * @alias module:model/LoggingOpenstackAllOf
     */
    constructor() { 
        
        LoggingOpenstackAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingOpenstackAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingOpenstackAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingOpenstackAllOf} The populated <code>LoggingOpenstackAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingOpenstackAllOf();

            if (data.hasOwnProperty('access_key')) {
                obj['access_key'] = ApiClient.convertToType(data['access_key'], 'String');
            }
            if (data.hasOwnProperty('bucket_name')) {
                obj['bucket_name'] = ApiClient.convertToType(data['bucket_name'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('public_key')) {
                obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Your OpenStack account access key.
 * @member {String} access_key
 */
LoggingOpenstackAllOf.prototype['access_key'] = undefined;

/**
 * The name of your OpenStack container.
 * @member {String} bucket_name
 */
LoggingOpenstackAllOf.prototype['bucket_name'] = undefined;

/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */
LoggingOpenstackAllOf.prototype['path'] = 'null';

/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingOpenstackAllOf.prototype['public_key'] = 'null';

/**
 * Your OpenStack auth url.
 * @member {String} url
 */
LoggingOpenstackAllOf.prototype['url'] = undefined;

/**
 * The username for your OpenStack account.
 * @member {String} user
 */
LoggingOpenstackAllOf.prototype['user'] = undefined;






export default LoggingOpenstackAllOf;

