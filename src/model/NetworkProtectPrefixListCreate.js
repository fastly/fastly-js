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
import NetworkProtectPrefixListFamily from './NetworkProtectPrefixListFamily';

/**
 * The NetworkProtectPrefixListCreate model module.
 * @module model/NetworkProtectPrefixListCreate
 * @version 17.0.0
 */
class NetworkProtectPrefixListCreate {
    /**
     * Constructs a new <code>NetworkProtectPrefixListCreate</code>.
     * Attributes accepted when creating a prefix list.
     * @alias module:model/NetworkProtectPrefixListCreate
     * @param name {String} A human-readable name, unique within the customer.
     * @param family {module:model/NetworkProtectPrefixListFamily} 
     * @param addresses {Array.<String>} Complete request contents. At most 1000 entries may be submitted; bare addresses are canonicalized and CIDRs are masked by the backend.
     */
    constructor(name, family, addresses) { 
        
        NetworkProtectPrefixListCreate.initialize(this, name, family, addresses);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, family, addresses) { 
        obj['name'] = name;
        obj['family'] = family;
        obj['addresses'] = addresses;
    }

    /**
     * Constructs a <code>NetworkProtectPrefixListCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectPrefixListCreate} obj Optional instance to populate.
     * @return {module:model/NetworkProtectPrefixListCreate} The populated <code>NetworkProtectPrefixListCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectPrefixListCreate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('family')) {
                obj['family'] = NetworkProtectPrefixListFamily.constructFromObject(data['family']);
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
NetworkProtectPrefixListCreate.prototype['name'] = undefined;

/**
 * @member {module:model/NetworkProtectPrefixListFamily} family
 */
NetworkProtectPrefixListCreate.prototype['family'] = undefined;

/**
 * Complete request contents. At most 1000 entries may be submitted; bare addresses are canonicalized and CIDRs are masked by the backend.
 * @member {Array.<String>} addresses
 */
NetworkProtectPrefixListCreate.prototype['addresses'] = undefined;






export default NetworkProtectPrefixListCreate;

