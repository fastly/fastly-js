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
 * The NetworkProtectRuleMatchDestinationIp model module.
 * @module model/NetworkProtectRuleMatchDestinationIp
 * @version 17.0.0
 */
class NetworkProtectRuleMatchDestinationIp {
    /**
     * Constructs a new <code>NetworkProtectRuleMatchDestinationIp</code>.
     * Requires a destination address match field.
     * @alias module:model/NetworkProtectRuleMatchDestinationIp
     * @param destination_ip_address {String} Match traffic sent to this address; omit for any destination. An address outside a Network using this Rule Set never matches and still consumes one of the 64 rules. The API does not enforce containment in a network prefix; attached Rule Sets require a compatible IP family.
     */
    constructor(destination_ip_address) { 
        
        NetworkProtectRuleMatchDestinationIp.initialize(this, destination_ip_address);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, destination_ip_address) { 
        obj['destination_ip_address'] = destination_ip_address;
    }

    /**
     * Constructs a <code>NetworkProtectRuleMatchDestinationIp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectRuleMatchDestinationIp} obj Optional instance to populate.
     * @return {module:model/NetworkProtectRuleMatchDestinationIp} The populated <code>NetworkProtectRuleMatchDestinationIp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectRuleMatchDestinationIp();

            if (data.hasOwnProperty('destination_ip_address')) {
                obj['destination_ip_address'] = ApiClient.convertToType(data['destination_ip_address'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Match traffic sent to this address; omit for any destination. An address outside a Network using this Rule Set never matches and still consumes one of the 64 rules. The API does not enforce containment in a network prefix; attached Rule Sets require a compatible IP family.
 * @member {String} destination_ip_address
 */
NetworkProtectRuleMatchDestinationIp.prototype['destination_ip_address'] = undefined;






export default NetworkProtectRuleMatchDestinationIp;

