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
 * The Environment model module.
 * @module model/Environment
 * @version 14.0.0
 */
class Environment {
    /**
     * Constructs a new <code>Environment</code>.
     * @alias module:model/Environment
     */
    constructor() { 
        
        Environment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Environment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Environment} obj Optional instance to populate.
     * @return {module:model/Environment} The populated <code>Environment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Environment();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('active_version')) {
                obj['active_version'] = ApiClient.convertToType(data['active_version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
Environment.prototype['name'] = undefined;

/**
 * Alphanumeric string identifying the service.
 * @member {String} service_id
 */
Environment.prototype['service_id'] = undefined;

/**
 * @member {Number} active_version
 */
Environment.prototype['active_version'] = undefined;






export default Environment;

