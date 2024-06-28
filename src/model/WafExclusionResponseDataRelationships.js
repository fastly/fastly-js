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
import RelationshipWafRuleRevisionWafRuleRevisions from './RelationshipWafRuleRevisionWafRuleRevisions';
import RelationshipWafRuleRevisions from './RelationshipWafRuleRevisions';
import RelationshipWafRuleWafRule from './RelationshipWafRuleWafRule';
import RelationshipWafRules from './RelationshipWafRules';

/**
 * The WafExclusionResponseDataRelationships model module.
 * @module model/WafExclusionResponseDataRelationships
 * @version 7.4.0
 */
class WafExclusionResponseDataRelationships {
    /**
     * Constructs a new <code>WafExclusionResponseDataRelationships</code>.
     * @alias module:model/WafExclusionResponseDataRelationships
     * @implements module:model/RelationshipWafRules
     * @implements module:model/RelationshipWafRuleRevisions
     */
    constructor() { 
        RelationshipWafRules.initialize(this);RelationshipWafRuleRevisions.initialize(this);
        WafExclusionResponseDataRelationships.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafExclusionResponseDataRelationships</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafExclusionResponseDataRelationships} obj Optional instance to populate.
     * @return {module:model/WafExclusionResponseDataRelationships} The populated <code>WafExclusionResponseDataRelationships</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafExclusionResponseDataRelationships();
            RelationshipWafRules.constructFromObject(data, obj);
            RelationshipWafRuleRevisions.constructFromObject(data, obj);

            if (data.hasOwnProperty('waf_rules')) {
                obj['waf_rules'] = RelationshipWafRuleWafRule.constructFromObject(data['waf_rules']);
            }
            if (data.hasOwnProperty('waf_rule_revisions')) {
                obj['waf_rule_revisions'] = RelationshipWafRuleRevisionWafRuleRevisions.constructFromObject(data['waf_rule_revisions']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/RelationshipWafRuleWafRule} waf_rules
 */
WafExclusionResponseDataRelationships.prototype['waf_rules'] = undefined;

/**
 * @member {module:model/RelationshipWafRuleRevisionWafRuleRevisions} waf_rule_revisions
 */
WafExclusionResponseDataRelationships.prototype['waf_rule_revisions'] = undefined;


// Implement RelationshipWafRules interface:
/**
 * @member {module:model/RelationshipWafRuleWafRule} waf_rules
 */
RelationshipWafRules.prototype['waf_rules'] = undefined;
// Implement RelationshipWafRuleRevisions interface:
/**
 * @member {module:model/RelationshipWafRuleRevisionWafRuleRevisions} waf_rule_revisions
 */
RelationshipWafRuleRevisions.prototype['waf_rule_revisions'] = undefined;




export default WafExclusionResponseDataRelationships;

