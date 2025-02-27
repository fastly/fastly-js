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
 * The PublicIpList model module.
 * @module model/PublicIpList
 * @version 9.0.0
 */
class PublicIpList {
    /**
     * Constructs a new <code>PublicIpList</code>.
     * @alias module:model/PublicIpList
     */
    constructor() { 
        
        PublicIpList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PublicIpList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublicIpList} obj Optional instance to populate.
     * @return {module:model/PublicIpList} The populated <code>PublicIpList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PublicIpList();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
            if (data.hasOwnProperty('ipv6_addresses')) {
                obj['ipv6_addresses'] = ApiClient.convertToType(data['ipv6_addresses'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Fastly's IPv4 ranges.
 * @member {Array.<String>} addresses
 */
PublicIpList.prototype['addresses'] = undefined;

/**
 * Fastly's IPv6 ranges.
 * @member {Array.<String>} ipv6_addresses
 */
PublicIpList.prototype['ipv6_addresses'] = undefined;






export default PublicIpList;

