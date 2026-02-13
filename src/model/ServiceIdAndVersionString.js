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
 * The ServiceIdAndVersionString model module.
 * @module model/ServiceIdAndVersionString
 * @version 15.0.0-beta.2
 */
class ServiceIdAndVersionString {
    /**
     * Constructs a new <code>ServiceIdAndVersionString</code>.
     * @alias module:model/ServiceIdAndVersionString
     */
    constructor() { 
        
        ServiceIdAndVersionString.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceIdAndVersionString</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceIdAndVersionString} obj Optional instance to populate.
     * @return {module:model/ServiceIdAndVersionString} The populated <code>ServiceIdAndVersionString</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceIdAndVersionString();

            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} service_id
 */
ServiceIdAndVersionString.prototype['service_id'] = undefined;

/**
 * @member {String} version
 */
ServiceIdAndVersionString.prototype['version'] = undefined;






export default ServiceIdAndVersionString;

