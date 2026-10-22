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
 * The ArcFailoverTarget model module.
 * @module model/ArcFailoverTarget
 * @version 17.0.0
 */
class ArcFailoverTarget {
    /**
     * Constructs a new <code>ArcFailoverTarget</code>.
     * A provider connection to retry a request against.
     * @alias module:model/ArcFailoverTarget
     * @param provider_connection_id {String} The ID of the provider connection to retry against.
     */
    constructor(provider_connection_id) { 
        
        ArcFailoverTarget.initialize(this, provider_connection_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, provider_connection_id) { 
        obj['provider_connection_id'] = provider_connection_id;
    }

    /**
     * Constructs a <code>ArcFailoverTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcFailoverTarget} obj Optional instance to populate.
     * @return {module:model/ArcFailoverTarget} The populated <code>ArcFailoverTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcFailoverTarget();

            if (data.hasOwnProperty('provider_connection_id')) {
                obj['provider_connection_id'] = ApiClient.convertToType(data['provider_connection_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The ID of the provider connection to retry against.
 * @member {String} provider_connection_id
 */
ArcFailoverTarget.prototype['provider_connection_id'] = undefined;






export default ArcFailoverTarget;

