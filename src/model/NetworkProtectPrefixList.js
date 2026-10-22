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
 * The NetworkProtectPrefixList model module.
 * @module model/NetworkProtectPrefixList
 * @version 17.0.0
 */
class NetworkProtectPrefixList {
    /**
     * Constructs a new <code>NetworkProtectPrefixList</code>.
     * Shared Network Protect prefix-list attributes.
     * @alias module:model/NetworkProtectPrefixList
     * @param name {String} A human-readable name, unique within the customer.
     * @param family {module:model/NetworkProtectPrefixListFamily} 
     * @param addresses {Array.<String>} Complete canonical list contents. Bare addresses are canonicalized, CIDRs are masked, equivalent entries are deduplicated, and overlaps are retained.
     */
    constructor(name, family, addresses) { 
        
        NetworkProtectPrefixList.initialize(this, name, family, addresses);
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
     * Constructs a <code>NetworkProtectPrefixList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectPrefixList} obj Optional instance to populate.
     * @return {module:model/NetworkProtectPrefixList} The populated <code>NetworkProtectPrefixList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectPrefixList();

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
NetworkProtectPrefixList.prototype['name'] = undefined;

/**
 * @member {module:model/NetworkProtectPrefixListFamily} family
 */
NetworkProtectPrefixList.prototype['family'] = undefined;

/**
 * Complete canonical list contents. Bare addresses are canonicalized, CIDRs are masked, equivalent entries are deduplicated, and overlaps are retained.
 * @member {Array.<String>} addresses
 */
NetworkProtectPrefixList.prototype['addresses'] = undefined;






export default NetworkProtectPrefixList;

