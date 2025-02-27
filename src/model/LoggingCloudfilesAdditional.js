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
 * The LoggingCloudfilesAdditional model module.
 * @module model/LoggingCloudfilesAdditional
 * @version 9.0.0
 */
class LoggingCloudfilesAdditional {
    /**
     * Constructs a new <code>LoggingCloudfilesAdditional</code>.
     * @alias module:model/LoggingCloudfilesAdditional
     */
    constructor() { 
        
        LoggingCloudfilesAdditional.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingCloudfilesAdditional</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingCloudfilesAdditional} obj Optional instance to populate.
     * @return {module:model/LoggingCloudfilesAdditional} The populated <code>LoggingCloudfilesAdditional</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingCloudfilesAdditional();

            if (data.hasOwnProperty('access_key')) {
                obj['access_key'] = ApiClient.convertToType(data['access_key'], 'String');
            }
            if (data.hasOwnProperty('bucket_name')) {
                obj['bucket_name'] = ApiClient.convertToType(data['bucket_name'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('public_key')) {
                obj['public_key'] = ApiClient.convertToType(data['public_key'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Your Cloud Files account access key.
 * @member {String} access_key
 */
LoggingCloudfilesAdditional.prototype['access_key'] = undefined;

/**
 * The name of your Cloud Files container.
 * @member {String} bucket_name
 */
LoggingCloudfilesAdditional.prototype['bucket_name'] = undefined;

/**
 * The path to upload logs to.
 * @member {String} path
 * @default 'null'
 */
LoggingCloudfilesAdditional.prototype['path'] = 'null';

/**
 * The region to stream logs to.
 * @member {module:model/LoggingCloudfilesAdditional.RegionEnum} region
 */
LoggingCloudfilesAdditional.prototype['region'] = undefined;

/**
 * A PGP public key that Fastly will use to encrypt your log files before writing them to disk.
 * @member {String} public_key
 * @default 'null'
 */
LoggingCloudfilesAdditional.prototype['public_key'] = 'null';

/**
 * The username for your Cloud Files account.
 * @member {String} user
 */
LoggingCloudfilesAdditional.prototype['user'] = undefined;





/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */
LoggingCloudfilesAdditional['RegionEnum'] = {

    /**
     * value: "DFW"
     * @const
     */
    "DFW": "DFW",

    /**
     * value: "ORD"
     * @const
     */
    "ORD": "ORD",

    /**
     * value: "IAD"
     * @const
     */
    "IAD": "IAD",

    /**
     * value: "LON"
     * @const
     */
    "LON": "LON",

    /**
     * value: "SYD"
     * @const
     */
    "SYD": "SYD",

    /**
     * value: "HKG"
     * @const
     */
    "HKG": "HKG",

    /**
     * value: "null"
     * @const
     */
    "null": "null"
};



export default LoggingCloudfilesAdditional;

