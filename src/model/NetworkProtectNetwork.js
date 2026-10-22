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
 * The NetworkProtectNetwork model module.
 * @module model/NetworkProtectNetwork
 * @version 17.0.0
 */
class NetworkProtectNetwork {
    /**
     * Constructs a new <code>NetworkProtectNetwork</code>.
     * Shared Network Protect network attributes.
     * @alias module:model/NetworkProtectNetwork
     * @param name {String} A human-readable name, unique within the customer.
     * @param prefix {String} The CIDR block to protect, masked to its network address. It cannot be changed after creation.
     * @param endpoint_policies {Array.<module:model/NetworkProtectEndpointPolicy>} Complete endpoint policy configuration. A network has at most one policy per region and may have no policies.
     * @param advertise {Boolean} Desired advertisement state, which is not the same as observed route state. Enabling it requires approved LOA, valid ROA, and a ready default-region delivery policy. A later ROA failure does not turn an existing advertisement off; losing LOA approval or the last ready default endpoint does.
     */
    constructor(name, prefix, endpoint_policies, advertise) { 
        
        NetworkProtectNetwork.initialize(this, name, prefix, endpoint_policies, advertise);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, prefix, endpoint_policies, advertise) { 
        obj['name'] = name;
        obj['prefix'] = prefix;
        obj['endpoint_policies'] = endpoint_policies;
        obj['advertise'] = advertise || false;
    }

    /**
     * Constructs a <code>NetworkProtectNetwork</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectNetwork} obj Optional instance to populate.
     * @return {module:model/NetworkProtectNetwork} The populated <code>NetworkProtectNetwork</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectNetwork();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('endpoint_policies')) {
                obj['endpoint_policies'] = ApiClient.convertToType(data['endpoint_policies'], [NetworkProtectEndpointPolicy]);
            }
            if (data.hasOwnProperty('advertise')) {
                obj['advertise'] = ApiClient.convertToType(data['advertise'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('rule_set_id')) {
                obj['rule_set_id'] = ApiClient.convertToType(data['rule_set_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A human-readable name, unique within the customer.
 * @member {String} name
 */
NetworkProtectNetwork.prototype['name'] = undefined;

/**
 * The CIDR block to protect, masked to its network address. It cannot be changed after creation.
 * @member {String} prefix
 */
NetworkProtectNetwork.prototype['prefix'] = undefined;

/**
 * Complete endpoint policy configuration. A network has at most one policy per region and may have no policies.
 * @member {Array.<module:model/NetworkProtectEndpointPolicy>} endpoint_policies
 */
NetworkProtectNetwork.prototype['endpoint_policies'] = undefined;

/**
 * Desired advertisement state, which is not the same as observed route state. Enabling it requires approved LOA, valid ROA, and a ready default-region delivery policy. A later ROA failure does not turn an existing advertisement off; losing LOA approval or the last ready default endpoint does.
 * @member {Boolean} advertise
 * @default false
 */
NetworkProtectNetwork.prototype['advertise'] = false;

/**
 * Optional descriptive text for the network. This metadata does not change traffic handling. Null clears it on update.
 * @member {String} description
 */
NetworkProtectNetwork.prototype['description'] = undefined;

/**
 * The backend-assigned rule set applied to this network.
 * @member {String} rule_set_id
 */
NetworkProtectNetwork.prototype['rule_set_id'] = undefined;






export default NetworkProtectNetwork;

