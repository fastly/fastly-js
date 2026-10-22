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
import NetworkProtectRule from './NetworkProtectRule';
import NetworkProtectRuleDestinationPorts from './NetworkProtectRuleDestinationPorts';
import NetworkProtectRuleIpProtocol from './NetworkProtectRuleIpProtocol';
import NetworkProtectRuleSourcePorts from './NetworkProtectRuleSourcePorts';
import NetworkProtectRuleTimestamps from './NetworkProtectRuleTimestamps';

/**
 * The NetworkProtectRuleResponse model module.
 * @module model/NetworkProtectRuleResponse
 * @version 17.0.0
 */
class NetworkProtectRuleResponse {
    /**
     * Constructs a new <code>NetworkProtectRuleResponse</code>.
     * A rule as returned by the API.
     * @alias module:model/NetworkProtectRuleResponse
     * @implements module:model/NetworkProtectRule
     * @implements module:model/NetworkProtectRuleTimestamps
     * @param ip_protocol {module:model/NetworkProtectRuleIpProtocol} 
     * @param source_prefix_list_id {String} Match traffic whose source appears in this prefix list.
     * @param destination_ip_address {String} Match traffic sent to this address; omit for any destination. An address outside a Network using this Rule Set never matches and still consumes one of the 64 rules. The API does not enforce containment in a network prefix; attached Rule Sets require a compatible IP family.
     * @param source_ports {module:model/NetworkProtectRuleSourcePorts} 
     * @param destination_ports {module:model/NetworkProtectRuleDestinationPorts} 
     */
    constructor(ip_protocol, source_prefix_list_id, destination_ip_address, source_ports, destination_ports) { 
        NetworkProtectRule.initialize(this, ip_protocol, source_prefix_list_id, destination_ip_address, source_ports, destination_ports);NetworkProtectRuleTimestamps.initialize(this);
        NetworkProtectRuleResponse.initialize(this, ip_protocol, source_prefix_list_id, destination_ip_address, source_ports, destination_ports);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ip_protocol, source_prefix_list_id, destination_ip_address, source_ports, destination_ports) { 
        obj['ip_protocol'] = ip_protocol;
        obj['source_prefix_list_id'] = source_prefix_list_id;
        obj['destination_ip_address'] = destination_ip_address;
        obj['source_ports'] = source_ports;
        obj['destination_ports'] = destination_ports;
    }

    /**
     * Constructs a <code>NetworkProtectRuleResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectRuleResponse} obj Optional instance to populate.
     * @return {module:model/NetworkProtectRuleResponse} The populated <code>NetworkProtectRuleResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectRuleResponse();
            NetworkProtectRule.constructFromObject(data, obj);
            NetworkProtectRuleTimestamps.constructFromObject(data, obj);

            if (data.hasOwnProperty('ip_protocol')) {
                obj['ip_protocol'] = NetworkProtectRuleIpProtocol.constructFromObject(data['ip_protocol']);
            }
            if (data.hasOwnProperty('source_prefix_list_id')) {
                obj['source_prefix_list_id'] = ApiClient.convertToType(data['source_prefix_list_id'], 'String');
            }
            if (data.hasOwnProperty('destination_ip_address')) {
                obj['destination_ip_address'] = ApiClient.convertToType(data['destination_ip_address'], 'String');
            }
            if (data.hasOwnProperty('source_ports')) {
                obj['source_ports'] = NetworkProtectRuleSourcePorts.constructFromObject(data['source_ports']);
            }
            if (data.hasOwnProperty('destination_ports')) {
                obj['destination_ports'] = NetworkProtectRuleDestinationPorts.constructFromObject(data['destination_ports']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NetworkProtectRuleIpProtocol} ip_protocol
 */
NetworkProtectRuleResponse.prototype['ip_protocol'] = undefined;

/**
 * Match traffic whose source appears in this prefix list.
 * @member {String} source_prefix_list_id
 */
NetworkProtectRuleResponse.prototype['source_prefix_list_id'] = undefined;

/**
 * Match traffic sent to this address; omit for any destination. An address outside a Network using this Rule Set never matches and still consumes one of the 64 rules. The API does not enforce containment in a network prefix; attached Rule Sets require a compatible IP family.
 * @member {String} destination_ip_address
 */
NetworkProtectRuleResponse.prototype['destination_ip_address'] = undefined;

/**
 * @member {module:model/NetworkProtectRuleSourcePorts} source_ports
 */
NetworkProtectRuleResponse.prototype['source_ports'] = undefined;

/**
 * @member {module:model/NetworkProtectRuleDestinationPorts} destination_ports
 */
NetworkProtectRuleResponse.prototype['destination_ports'] = undefined;

/**
 * An ISO 8601 timestamp in UTC.
 * @member {Date} created_at
 */
NetworkProtectRuleResponse.prototype['created_at'] = undefined;

/**
 * An ISO 8601 timestamp in UTC.
 * @member {Date} updated_at
 */
NetworkProtectRuleResponse.prototype['updated_at'] = undefined;


// Implement NetworkProtectRule interface:
/**
 * @member {module:model/NetworkProtectRuleIpProtocol} ip_protocol
 */
NetworkProtectRule.prototype['ip_protocol'] = undefined;
/**
 * Match traffic whose source appears in this prefix list.
 * @member {String} source_prefix_list_id
 */
NetworkProtectRule.prototype['source_prefix_list_id'] = undefined;
/**
 * Match traffic sent to this address; omit for any destination. An address outside a Network using this Rule Set never matches and still consumes one of the 64 rules. The API does not enforce containment in a network prefix; attached Rule Sets require a compatible IP family.
 * @member {String} destination_ip_address
 */
NetworkProtectRule.prototype['destination_ip_address'] = undefined;
/**
 * @member {module:model/NetworkProtectRuleSourcePorts} source_ports
 */
NetworkProtectRule.prototype['source_ports'] = undefined;
/**
 * @member {module:model/NetworkProtectRuleDestinationPorts} destination_ports
 */
NetworkProtectRule.prototype['destination_ports'] = undefined;
// Implement NetworkProtectRuleTimestamps interface:
/**
 * An ISO 8601 timestamp in UTC.
 * @member {Date} created_at
 */
NetworkProtectRuleTimestamps.prototype['created_at'] = undefined;
/**
 * An ISO 8601 timestamp in UTC.
 * @member {Date} updated_at
 */
NetworkProtectRuleTimestamps.prototype['updated_at'] = undefined;




export default NetworkProtectRuleResponse;

