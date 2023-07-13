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
import RelationshipsForWafFirewallVersion from './RelationshipsForWafFirewallVersion';
import WafFirewallVersionResponseDataAttributes from './WafFirewallVersionResponseDataAttributes';

/**
 * The WafFirewallVersionResponseDataAllOf model module.
 * @module model/WafFirewallVersionResponseDataAllOf
 * @version 5.0.2
 */
class WafFirewallVersionResponseDataAllOf {
    /**
     * Constructs a new <code>WafFirewallVersionResponseDataAllOf</code>.
     * @alias module:model/WafFirewallVersionResponseDataAllOf
     */
    constructor() { 
        
        WafFirewallVersionResponseDataAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafFirewallVersionResponseDataAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafFirewallVersionResponseDataAllOf} obj Optional instance to populate.
     * @return {module:model/WafFirewallVersionResponseDataAllOf} The populated <code>WafFirewallVersionResponseDataAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafFirewallVersionResponseDataAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = WafFirewallVersionResponseDataAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipsForWafFirewallVersion.constructFromObject(data['relationships']);
            }
        }
        return obj;
    }


}

/**
 * Alphanumeric string identifying a Firewall version.
 * @member {String} id
 */
WafFirewallVersionResponseDataAllOf.prototype['id'] = undefined;

/**
 * @member {module:model/WafFirewallVersionResponseDataAttributes} attributes
 */
WafFirewallVersionResponseDataAllOf.prototype['attributes'] = undefined;

/**
 * @member {module:model/RelationshipsForWafFirewallVersion} relationships
 */
WafFirewallVersionResponseDataAllOf.prototype['relationships'] = undefined;






export default WafFirewallVersionResponseDataAllOf;

