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
 * The ArcGetProviderConnectionResponseExtra model module.
 * @module model/ArcGetProviderConnectionResponseExtra
 * @version 17.0.0
 */
class ArcGetProviderConnectionResponseExtra {
    /**
     * Constructs a new <code>ArcGetProviderConnectionResponseExtra</code>.
     * @alias module:model/ArcGetProviderConnectionResponseExtra
     * @param virtual_key_ids {Array.<String>} The IDs of the active virtual keys whose failover policy references this connection. Empty if no virtual key references it.
     */
    constructor(virtual_key_ids) { 
        
        ArcGetProviderConnectionResponseExtra.initialize(this, virtual_key_ids);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, virtual_key_ids) { 
        obj['virtual_key_ids'] = virtual_key_ids;
    }

    /**
     * Constructs a <code>ArcGetProviderConnectionResponseExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcGetProviderConnectionResponseExtra} obj Optional instance to populate.
     * @return {module:model/ArcGetProviderConnectionResponseExtra} The populated <code>ArcGetProviderConnectionResponseExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcGetProviderConnectionResponseExtra();

            if (data.hasOwnProperty('virtual_key_ids')) {
                obj['virtual_key_ids'] = ApiClient.convertToType(data['virtual_key_ids'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The IDs of the active virtual keys whose failover policy references this connection. Empty if no virtual key references it.
 * @member {Array.<String>} virtual_key_ids
 */
ArcGetProviderConnectionResponseExtra.prototype['virtual_key_ids'] = undefined;






export default ArcGetProviderConnectionResponseExtra;

