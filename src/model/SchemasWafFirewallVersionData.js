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
import TypeWafFirewallVersion from './TypeWafFirewallVersion';
import WafFirewallVersionDataAttributes from './WafFirewallVersionDataAttributes';

/**
 * The SchemasWafFirewallVersionData model module.
 * @module model/SchemasWafFirewallVersionData
 * @version 6.1.1
 */
class SchemasWafFirewallVersionData {
    /**
     * Constructs a new <code>SchemasWafFirewallVersionData</code>.
     * @alias module:model/SchemasWafFirewallVersionData
     */
    constructor() { 
        
        SchemasWafFirewallVersionData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SchemasWafFirewallVersionData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SchemasWafFirewallVersionData} obj Optional instance to populate.
     * @return {module:model/SchemasWafFirewallVersionData} The populated <code>SchemasWafFirewallVersionData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SchemasWafFirewallVersionData();

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeWafFirewallVersion.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = WafFirewallVersionDataAttributes.constructFromObject(data['attributes']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeWafFirewallVersion} type
 */
SchemasWafFirewallVersionData.prototype['type'] = undefined;

/**
 * @member {module:model/WafFirewallVersionDataAttributes} attributes
 */
SchemasWafFirewallVersionData.prototype['attributes'] = undefined;






export default SchemasWafFirewallVersionData;

