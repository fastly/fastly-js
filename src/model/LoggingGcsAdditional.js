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
 * The LoggingGcsAdditional model module.
 * @module model/LoggingGcsAdditional
 * @version 6.0.0
 */
class LoggingGcsAdditional {
    /**
     * Constructs a new <code>LoggingGcsAdditional</code>.
     * @alias module:model/LoggingGcsAdditional
     */
    constructor() { 
        
        LoggingGcsAdditional.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingGcsAdditional</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingGcsAdditional} obj Optional instance to populate.
     * @return {module:model/LoggingGcsAdditional} The populated <code>LoggingGcsAdditional</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingGcsAdditional();

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
LoggingGcsAdditional.prototype['bucket_name'] = undefined;

/**
 * @member {String} path
 * @default '/'
 */
LoggingGcsAdditional.prototype['path'] = '/';

/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingGcsAdditional.prototype['public_key'] = 'null';

/**
 * Your Google Cloud Platform project ID. Required
 * @member {String} project_id
 */
LoggingGcsAdditional.prototype['project_id'] = undefined;






export default LoggingGcsAdditional;

