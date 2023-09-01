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
import Timestamps from './Timestamps';

/**
 * The ServiceAuthorizationResponseDataAllOf model module.
 * @module model/ServiceAuthorizationResponseDataAllOf
 * @version 6.1.0
 */
class ServiceAuthorizationResponseDataAllOf {
    /**
     * Constructs a new <code>ServiceAuthorizationResponseDataAllOf</code>.
     * @alias module:model/ServiceAuthorizationResponseDataAllOf
     */
    constructor() { 
        
        ServiceAuthorizationResponseDataAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceAuthorizationResponseDataAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceAuthorizationResponseDataAllOf} obj Optional instance to populate.
     * @return {module:model/ServiceAuthorizationResponseDataAllOf} The populated <code>ServiceAuthorizationResponseDataAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceAuthorizationResponseDataAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = Timestamps.constructFromObject(data['attributes']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ServiceAuthorizationResponseDataAllOf.prototype['id'] = undefined;

/**
 * @member {module:model/Timestamps} attributes
 */
ServiceAuthorizationResponseDataAllOf.prototype['attributes'] = undefined;






export default ServiceAuthorizationResponseDataAllOf;

