/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RelationshipWafActiveRules from './RelationshipWafActiveRules';
import RelationshipWafActiveRulesWafActiveRules from './RelationshipWafActiveRulesWafActiveRules';
import RelationshipWafFirewallVersionWafFirewallVersion from './RelationshipWafFirewallVersionWafFirewallVersion';
import RelationshipWafFirewallVersions from './RelationshipWafFirewallVersions';

/**
 * The RelationshipsForWafFirewallVersion model module.
 * @module model/RelationshipsForWafFirewallVersion
 * @version 3.0.0-beta3
 */
class RelationshipsForWafFirewallVersion {
    /**
     * Constructs a new <code>RelationshipsForWafFirewallVersion</code>.
     * @alias module:model/RelationshipsForWafFirewallVersion
     * @implements module:model/RelationshipWafFirewallVersions
     * @implements module:model/RelationshipWafActiveRules
     */
    constructor() { 
        RelationshipWafFirewallVersions.initialize(this);RelationshipWafActiveRules.initialize(this);
        RelationshipsForWafFirewallVersion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipsForWafFirewallVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipsForWafFirewallVersion} obj Optional instance to populate.
     * @return {module:model/RelationshipsForWafFirewallVersion} The populated <code>RelationshipsForWafFirewallVersion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipsForWafFirewallVersion();
            RelationshipWafFirewallVersions.constructFromObject(data, obj);
            RelationshipWafActiveRules.constructFromObject(data, obj);

            if (data.hasOwnProperty('waf_firewall_versions')) {
                obj['waf_firewall_versions'] = RelationshipWafFirewallVersionWafFirewallVersion.constructFromObject(data['waf_firewall_versions']);
            }
            if (data.hasOwnProperty('waf_active_rules')) {
                obj['waf_active_rules'] = RelationshipWafActiveRulesWafActiveRules.constructFromObject(data['waf_active_rules']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RelationshipWafFirewallVersionWafFirewallVersion} waf_firewall_versions
 */
RelationshipsForWafFirewallVersion.prototype['waf_firewall_versions'] = undefined;

/**
 * @member {module:model/RelationshipWafActiveRulesWafActiveRules} waf_active_rules
 */
RelationshipsForWafFirewallVersion.prototype['waf_active_rules'] = undefined;


// Implement RelationshipWafFirewallVersions interface:
/**
 * @member {module:model/RelationshipWafFirewallVersionWafFirewallVersion} waf_firewall_versions
 */
RelationshipWafFirewallVersions.prototype['waf_firewall_versions'] = undefined;
// Implement RelationshipWafActiveRules interface:
/**
 * @member {module:model/RelationshipWafActiveRulesWafActiveRules} waf_active_rules
 */
RelationshipWafActiveRules.prototype['waf_active_rules'] = undefined;




export default RelationshipsForWafFirewallVersion;

