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
import SchemasWafFirewallVersion from './SchemasWafFirewallVersion';
import WafActiveRule from './WafActiveRule';
import WafActiveRuleData from './WafActiveRuleData';

/**
 * The IncludedWithWafFirewallVersionItem model module.
 * @module model/IncludedWithWafFirewallVersionItem
 * @version 8.0.0
 */
class IncludedWithWafFirewallVersionItem {
    /**
     * Constructs a new <code>IncludedWithWafFirewallVersionItem</code>.
     * @alias module:model/IncludedWithWafFirewallVersionItem
     * @implements module:model/SchemasWafFirewallVersion
     * @implements module:model/WafActiveRule
     */
    constructor() { 
        SchemasWafFirewallVersion.initialize(this);WafActiveRule.initialize(this);
        IncludedWithWafFirewallVersionItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IncludedWithWafFirewallVersionItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IncludedWithWafFirewallVersionItem} obj Optional instance to populate.
     * @return {module:model/IncludedWithWafFirewallVersionItem} The populated <code>IncludedWithWafFirewallVersionItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IncludedWithWafFirewallVersionItem();
            SchemasWafFirewallVersion.constructFromObject(data, obj);
            WafActiveRule.constructFromObject(data, obj);

            if (data.hasOwnProperty('data')) {
                obj['data'] = WafActiveRuleData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/WafActiveRuleData} data
 */
IncludedWithWafFirewallVersionItem.prototype['data'] = undefined;


// Implement SchemasWafFirewallVersion interface:
/**
 * @member {module:model/SchemasWafFirewallVersionData} data
 */
SchemasWafFirewallVersion.prototype['data'] = undefined;
// Implement WafActiveRule interface:
/**
 * @member {module:model/WafActiveRuleData} data
 */
WafActiveRule.prototype['data'] = undefined;




export default IncludedWithWafFirewallVersionItem;

