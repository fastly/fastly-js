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
import RelationshipWafFirewallVersion from './RelationshipWafFirewallVersion';
import RelationshipWafFirewallVersionWafFirewallVersion from './RelationshipWafFirewallVersionWafFirewallVersion';
import RelationshipWafRuleRevision from './RelationshipWafRuleRevision';
import RelationshipWafRuleRevisionWafRuleRevisions from './RelationshipWafRuleRevisionWafRuleRevisions';

/**
 * The RelationshipsForWafActiveRule model module.
 * @module model/RelationshipsForWafActiveRule
 * @version 3.0.0
 */
class RelationshipsForWafActiveRule {
    /**
     * Constructs a new <code>RelationshipsForWafActiveRule</code>.
     * @alias module:model/RelationshipsForWafActiveRule
     * @implements module:model/RelationshipWafFirewallVersion
     * @implements module:model/RelationshipWafRuleRevision
     */
    constructor() { 
        RelationshipWafFirewallVersion.initialize(this);RelationshipWafRuleRevision.initialize(this);
        RelationshipsForWafActiveRule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RelationshipsForWafActiveRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipsForWafActiveRule} obj Optional instance to populate.
     * @return {module:model/RelationshipsForWafActiveRule} The populated <code>RelationshipsForWafActiveRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipsForWafActiveRule();
            RelationshipWafFirewallVersion.constructFromObject(data, obj);
            RelationshipWafRuleRevision.constructFromObject(data, obj);

            if (data.hasOwnProperty('waf_firewall_version')) {
                obj['waf_firewall_version'] = RelationshipWafFirewallVersionWafFirewallVersion.constructFromObject(data['waf_firewall_version']);
            }
            if (data.hasOwnProperty('waf_rule_revisions')) {
                obj['waf_rule_revisions'] = RelationshipWafRuleRevisionWafRuleRevisions.constructFromObject(data['waf_rule_revisions']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RelationshipWafFirewallVersionWafFirewallVersion} waf_firewall_version
 */
RelationshipsForWafActiveRule.prototype['waf_firewall_version'] = undefined;

/**
 * @member {module:model/RelationshipWafRuleRevisionWafRuleRevisions} waf_rule_revisions
 */
RelationshipsForWafActiveRule.prototype['waf_rule_revisions'] = undefined;


// Implement RelationshipWafFirewallVersion interface:
/**
 * @member {module:model/RelationshipWafFirewallVersionWafFirewallVersion} waf_firewall_version
 */
RelationshipWafFirewallVersion.prototype['waf_firewall_version'] = undefined;
// Implement RelationshipWafRuleRevision interface:
/**
 * @member {module:model/RelationshipWafRuleRevisionWafRuleRevisions} waf_rule_revisions
 */
RelationshipWafRuleRevision.prototype['waf_rule_revisions'] = undefined;




export default RelationshipsForWafActiveRule;

