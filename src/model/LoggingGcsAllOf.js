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
 * The LoggingGcsAllOf model module.
 * @module model/LoggingGcsAllOf
 * @version 5.0.0
 */
class LoggingGcsAllOf {
    /**
     * Constructs a new <code>LoggingGcsAllOf</code>.
     * @alias module:model/LoggingGcsAllOf
     */
    constructor() { 
        
        LoggingGcsAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingGcsAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingGcsAllOf} obj Optional instance to populate.
     * @return {module:model/LoggingGcsAllOf} The populated <code>LoggingGcsAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingGcsAllOf();

            if (data.hasOwnProperty('bucket_name')) {
                obj['bucket_name'] = ApiClient.convertToType(data['bucket_name'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('public_key')) {
                obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the GCS bucket.
 * @member {String} bucket_name
 */
LoggingGcsAllOf.prototype['bucket_name'] = undefined;

/**
 * The path to upload logs to.
 * @member {String} path
 */
LoggingGcsAllOf.prototype['path'] = undefined;

/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingGcsAllOf.prototype['public_key'] = 'null';

/**
 * Your Google Cloud Platform project ID. Required
 * @member {String} project_id
 */
LoggingGcsAllOf.prototype['project_id'] = undefined;






export default LoggingGcsAllOf;

