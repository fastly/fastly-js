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
 * The NetworkProtectPrefixListUpdate model module.
 * @module model/NetworkProtectPrefixListUpdate
 * @version 17.0.0
 */
class NetworkProtectPrefixListUpdate {
    /**
     * Constructs a new <code>NetworkProtectPrefixListUpdate</code>.
     * Attributes accepted when updating a prefix list.
     * @alias module:model/NetworkProtectPrefixListUpdate
     */
    constructor() { 
        
        NetworkProtectPrefixListUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NetworkProtectPrefixListUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectPrefixListUpdate} obj Optional instance to populate.
     * @return {module:model/NetworkProtectPrefixListUpdate} The populated <code>NetworkProtectPrefixListUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectPrefixListUpdate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * A human-readable name, unique within the customer.
 * @member {String} name
 */
NetworkProtectPrefixListUpdate.prototype['name'] = undefined;

/**
 * Complete request contents. At most 1000 entries may be submitted; bare addresses are canonicalized and CIDRs are masked by the backend.
 * @member {Array.<String>} addresses
 */
NetworkProtectPrefixListUpdate.prototype['addresses'] = undefined;






export default NetworkProtectPrefixListUpdate;

