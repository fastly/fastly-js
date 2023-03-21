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
import ServiceAuthorizationDataAttributes from './ServiceAuthorizationDataAttributes';
import ServiceAuthorizationDataRelationships from './ServiceAuthorizationDataRelationships';
import TypeServiceAuthorization from './TypeServiceAuthorization';

/**
 * The ServiceAuthorizationData model module.
 * @module model/ServiceAuthorizationData
 * @version 3.2.0
 */
class ServiceAuthorizationData {
    /**
     * Constructs a new <code>ServiceAuthorizationData</code>.
     * @alias module:model/ServiceAuthorizationData
     */
    constructor() { 
        
        ServiceAuthorizationData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceAuthorizationData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceAuthorizationData} obj Optional instance to populate.
     * @return {module:model/ServiceAuthorizationData} The populated <code>ServiceAuthorizationData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceAuthorizationData();

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeServiceAuthorization.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ServiceAuthorizationDataAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = ServiceAuthorizationDataRelationships.constructFromObject(data['relationships']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeServiceAuthorization} type
 */
ServiceAuthorizationData.prototype['type'] = undefined;

/**
 * @member {module:model/ServiceAuthorizationDataAttributes} attributes
 */
ServiceAuthorizationData.prototype['attributes'] = undefined;

/**
 * @member {module:model/ServiceAuthorizationDataRelationships} relationships
 */
ServiceAuthorizationData.prototype['relationships'] = undefined;






export default ServiceAuthorizationData;

