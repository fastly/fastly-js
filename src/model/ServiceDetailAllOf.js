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
import ServiceVersionDetail from './ServiceVersionDetail';
import ServiceVersionDetailOrNull from './ServiceVersionDetailOrNull';

/**
 * The ServiceDetailAllOf model module.
 * @module model/ServiceDetailAllOf
 * @version 4.0.0
 */
class ServiceDetailAllOf {
    /**
     * Constructs a new <code>ServiceDetailAllOf</code>.
     * @alias module:model/ServiceDetailAllOf
     */
    constructor() { 
        
        ServiceDetailAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceDetailAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceDetailAllOf} obj Optional instance to populate.
     * @return {module:model/ServiceDetailAllOf} The populated <code>ServiceDetailAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceDetailAllOf();

            if (data.hasOwnProperty('active_version')) {
                obj['active_version'] = ServiceVersionDetailOrNull.constructFromObject(data['active_version']);
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ServiceVersionDetail.constructFromObject(data['version']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ServiceVersionDetailOrNull} active_version
 */
ServiceDetailAllOf.prototype['active_version'] = undefined;

/**
 * @member {module:model/ServiceVersionDetail} version
 */
ServiceDetailAllOf.prototype['version'] = undefined;






export default ServiceDetailAllOf;

