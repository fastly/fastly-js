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
import NetworkProtectEndpointPolicy from './NetworkProtectEndpointPolicy';

/**
 * The NetworkProtectNetworkCreate model module.
 * @module model/NetworkProtectNetworkCreate
 * @version 17.0.0
 */
class NetworkProtectNetworkCreate {
    /**
     * Constructs a new <code>NetworkProtectNetworkCreate</code>.
     * Attributes accepted when creating a network.
     * @alias module:model/NetworkProtectNetworkCreate
     * @param name {String} A human-readable name, unique within the customer.
     * @param prefix {String} The CIDR block to protect, masked to its network address. It cannot be changed after creation.
     */
    constructor(name, prefix) { 
        
        NetworkProtectNetworkCreate.initialize(this, name, prefix);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, prefix) { 
        obj['name'] = name;
        obj['prefix'] = prefix;
    }

    /**
     * Constructs a <code>NetworkProtectNetworkCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectNetworkCreate} obj Optional instance to populate.
     * @return {module:model/NetworkProtectNetworkCreate} The populated <code>NetworkProtectNetworkCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectNetworkCreate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('rule_set_id')) {
                obj['rule_set_id'] = ApiClient.convertToType(data['rule_set_id'], 'String');
            }
            if (data.hasOwnProperty('endpoint_policies')) {
                obj['endpoint_policies'] = ApiClient.convertToType(data['endpoint_policies'], [NetworkProtectEndpointPolicy]);
            }
        }
        return obj;
    }


}

/**
 * A human-readable name, unique within the customer.
 * @member {String} name
 */
NetworkProtectNetworkCreate.prototype['name'] = undefined;

/**
 * The CIDR block to protect, masked to its network address. It cannot be changed after creation.
 * @member {String} prefix
 */
NetworkProtectNetworkCreate.prototype['prefix'] = undefined;

/**
 * Optional descriptive text for the network. This metadata does not change traffic handling. Null clears it on update.
 * @member {String} description
 */
NetworkProtectNetworkCreate.prototype['description'] = undefined;

/**
 * Custom rule-set attachment is unavailable. Omit this value or send an empty string to use the backend-assigned default rule set.
 * @member {String} rule_set_id
 */
NetworkProtectNetworkCreate.prototype['rule_set_id'] = undefined;

/**
 * Complete endpoint policy configuration. A network has at most one policy per region and may have no policies.
 * @member {Array.<module:model/NetworkProtectEndpointPolicy>} endpoint_policies
 */
NetworkProtectNetworkCreate.prototype['endpoint_policies'] = undefined;






export default NetworkProtectNetworkCreate;

