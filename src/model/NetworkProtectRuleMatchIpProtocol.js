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
import NetworkProtectRuleIpProtocol from './NetworkProtectRuleIpProtocol';

/**
 * The NetworkProtectRuleMatchIpProtocol model module.
 * @module model/NetworkProtectRuleMatchIpProtocol
 * @version 17.0.0
 */
class NetworkProtectRuleMatchIpProtocol {
    /**
     * Constructs a new <code>NetworkProtectRuleMatchIpProtocol</code>.
     * Requires an IP protocol match field.
     * @alias module:model/NetworkProtectRuleMatchIpProtocol
     * @param ip_protocol {module:model/NetworkProtectRuleIpProtocol} 
     */
    constructor(ip_protocol) { 
        
        NetworkProtectRuleMatchIpProtocol.initialize(this, ip_protocol);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ip_protocol) { 
        obj['ip_protocol'] = ip_protocol;
    }

    /**
     * Constructs a <code>NetworkProtectRuleMatchIpProtocol</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectRuleMatchIpProtocol} obj Optional instance to populate.
     * @return {module:model/NetworkProtectRuleMatchIpProtocol} The populated <code>NetworkProtectRuleMatchIpProtocol</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectRuleMatchIpProtocol();

            if (data.hasOwnProperty('ip_protocol')) {
                obj['ip_protocol'] = NetworkProtectRuleIpProtocol.constructFromObject(data['ip_protocol']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NetworkProtectRuleIpProtocol} ip_protocol
 */
NetworkProtectRuleMatchIpProtocol.prototype['ip_protocol'] = undefined;






export default NetworkProtectRuleMatchIpProtocol;

