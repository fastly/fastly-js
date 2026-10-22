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
import NetworkProtectRuleAction from './NetworkProtectRuleAction';
import NetworkProtectRuleDestinationPorts from './NetworkProtectRuleDestinationPorts';
import NetworkProtectRuleIpProtocol from './NetworkProtectRuleIpProtocol';
import NetworkProtectRuleMatchDestinationIp from './NetworkProtectRuleMatchDestinationIp';
import NetworkProtectRuleMatchDestinationPorts from './NetworkProtectRuleMatchDestinationPorts';
import NetworkProtectRuleMatchIpProtocol from './NetworkProtectRuleMatchIpProtocol';
import NetworkProtectRuleMatchSourcePorts from './NetworkProtectRuleMatchSourcePorts';
import NetworkProtectRuleMatchSourcePrefixList from './NetworkProtectRuleMatchSourcePrefixList';
import NetworkProtectRuleSourcePorts from './NetworkProtectRuleSourcePorts';

/**
 * The NetworkProtectRule model module.
 * @module model/NetworkProtectRule
 * @version 17.0.0
 */
class NetworkProtectRule {
    /**
     * Constructs a new <code>NetworkProtectRule</code>.
     * One ordered firewall rule. All match fields are optional, but at least one must be provided. The action is required. Rules have no public ID; replacing the list preserves timestamps only when logical fields, comment, and position are unchanged.
     * @alias module:model/NetworkProtectRule
     * @implements module:model/NetworkProtectRuleMatchIpProtocol
     * @implements module:model/NetworkProtectRuleMatchSourcePrefixList
     * @implements module:model/NetworkProtectRuleMatchDestinationIp
     * @implements module:model/NetworkProtectRuleMatchSourcePorts
     * @implements module:model/NetworkProtectRuleMatchDestinationPorts
     * @param ip_protocol {module:model/NetworkProtectRuleIpProtocol} 
     * @param source_prefix_list_id {String} Match traffic whose source appears in this prefix list.
     * @param destination_ip_address {String} Match traffic sent to this address; omit for any destination. An address outside a Network using this Rule Set never matches and still consumes one of the 64 rules. The API does not enforce containment in a network prefix; attached Rule Sets require a compatible IP family.
     * @param source_ports {module:model/NetworkProtectRuleSourcePorts} 
     * @param destination_ports {module:model/NetworkProtectRuleDestinationPorts} 
     */
    constructor(ip_protocol, source_prefix_list_id, destination_ip_address, source_ports, destination_ports) { 
        NetworkProtectRuleMatchIpProtocol.initialize(this, ip_protocol);NetworkProtectRuleMatchSourcePrefixList.initialize(this, source_prefix_list_id);NetworkProtectRuleMatchDestinationIp.initialize(this, destination_ip_address);NetworkProtectRuleMatchSourcePorts.initialize(this, source_ports);NetworkProtectRuleMatchDestinationPorts.initialize(this, destination_ports);
        NetworkProtectRule.initialize(this, ip_protocol, source_prefix_list_id, destination_ip_address, source_ports, destination_ports);
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
        obj['action'] = action;
    }

    /**
     * Constructs a <code>NetworkProtectRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectRule} obj Optional instance to populate.
     * @return {module:model/NetworkProtectRule} The populated <code>NetworkProtectRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectRule();
            NetworkProtectRuleMatchIpProtocol.constructFromObject(data, obj);
            NetworkProtectRuleMatchSourcePrefixList.constructFromObject(data, obj);
            NetworkProtectRuleMatchDestinationIp.constructFromObject(data, obj);
            NetworkProtectRuleMatchSourcePorts.constructFromObject(data, obj);
            NetworkProtectRuleMatchDestinationPorts.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('action')) {
                obj['action'] = NetworkProtectRuleAction.constructFromObject(data['action']);
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
        }
        return obj;
    }


}

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

/**
 * @member {module:model/NetworkProtectRuleAction} action
 */
NetworkProtectRule.prototype['action'] = undefined;

/**
 * Optional rule metadata of 1 to 100 Unicode code points. It does not participate in traffic matching. Omit it to leave a rule without a comment; replacing rules with an item that omits it clears the stored comment. Omitting rules on PATCH preserves existing comments. Empty strings and null are rejected.
 * @member {String} comment
 */
NetworkProtectRule.prototype['comment'] = undefined;


// Implement NetworkProtectRuleMatchIpProtocol interface:
/**
 * @member {module:model/NetworkProtectRuleIpProtocol} ip_protocol
 */
NetworkProtectRuleMatchIpProtocol.prototype['ip_protocol'] = undefined;
// Implement NetworkProtectRuleMatchSourcePrefixList interface:
/**
 * Match traffic whose source appears in this prefix list.
 * @member {String} source_prefix_list_id
 */
NetworkProtectRuleMatchSourcePrefixList.prototype['source_prefix_list_id'] = undefined;
// Implement NetworkProtectRuleMatchDestinationIp interface:
/**
 * Match traffic sent to this address; omit for any destination. An address outside a Network using this Rule Set never matches and still consumes one of the 64 rules. The API does not enforce containment in a network prefix; attached Rule Sets require a compatible IP family.
 * @member {String} destination_ip_address
 */
NetworkProtectRuleMatchDestinationIp.prototype['destination_ip_address'] = undefined;
// Implement NetworkProtectRuleMatchSourcePorts interface:
/**
 * @member {module:model/NetworkProtectRuleSourcePorts} source_ports
 */
NetworkProtectRuleMatchSourcePorts.prototype['source_ports'] = undefined;
// Implement NetworkProtectRuleMatchDestinationPorts interface:
/**
 * @member {module:model/NetworkProtectRuleDestinationPorts} destination_ports
 */
NetworkProtectRuleMatchDestinationPorts.prototype['destination_ports'] = undefined;




export default NetworkProtectRule;

