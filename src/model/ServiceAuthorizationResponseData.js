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
import ServiceAuthorizationData from './ServiceAuthorizationData';
import ServiceAuthorizationDataRelationships from './ServiceAuthorizationDataRelationships';
import ServiceAuthorizationResponseDataAllOf from './ServiceAuthorizationResponseDataAllOf';
import Timestamps from './Timestamps';
import TypeServiceAuthorization from './TypeServiceAuthorization';

/**
 * The ServiceAuthorizationResponseData model module.
 * @module model/ServiceAuthorizationResponseData
 * @version 6.1.0
 */
class ServiceAuthorizationResponseData {
    /**
     * Constructs a new <code>ServiceAuthorizationResponseData</code>.
     * @alias module:model/ServiceAuthorizationResponseData
     * @implements module:model/ServiceAuthorizationData
     * @implements module:model/ServiceAuthorizationResponseDataAllOf
     */
    constructor() { 
        ServiceAuthorizationData.initialize(this);ServiceAuthorizationResponseDataAllOf.initialize(this);
        ServiceAuthorizationResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceAuthorizationResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceAuthorizationResponseData} obj Optional instance to populate.
     * @return {module:model/ServiceAuthorizationResponseData} The populated <code>ServiceAuthorizationResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceAuthorizationResponseData();
            ServiceAuthorizationData.constructFromObject(data, obj);
            ServiceAuthorizationResponseDataAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeServiceAuthorization.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = Timestamps.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = ServiceAuthorizationDataRelationships.constructFromObject(data['relationships']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeServiceAuthorization} type
 */
ServiceAuthorizationResponseData.prototype['type'] = undefined;

/**
 * @member {module:model/Timestamps} attributes
 */
ServiceAuthorizationResponseData.prototype['attributes'] = undefined;

/**
 * @member {module:model/ServiceAuthorizationDataRelationships} relationships
 */
ServiceAuthorizationResponseData.prototype['relationships'] = undefined;

/**
 * @member {String} id
 */
ServiceAuthorizationResponseData.prototype['id'] = undefined;


// Implement ServiceAuthorizationData interface:
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
// Implement ServiceAuthorizationResponseDataAllOf interface:
/**
 * @member {String} id
 */
ServiceAuthorizationResponseDataAllOf.prototype['id'] = undefined;
/**
 * @member {module:model/Timestamps} attributes
 */
ServiceAuthorizationResponseDataAllOf.prototype['attributes'] = undefined;




export default ServiceAuthorizationResponseData;

