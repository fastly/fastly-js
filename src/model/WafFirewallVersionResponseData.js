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
import TypeWafFirewallVersion from './TypeWafFirewallVersion';
import WafFirewallVersionData from './WafFirewallVersionData';
import WafFirewallVersionResponseDataAllOf from './WafFirewallVersionResponseDataAllOf';
import WafFirewallVersionResponseDataAttributes from './WafFirewallVersionResponseDataAttributes';

/**
 * The WafFirewallVersionResponseData model module.
 * @module model/WafFirewallVersionResponseData
 * @version 6.1.1
 */
class WafFirewallVersionResponseData {
    /**
     * Constructs a new <code>WafFirewallVersionResponseData</code>.
     * @alias module:model/WafFirewallVersionResponseData
     * @implements module:model/WafFirewallVersionData
     * @implements module:model/WafFirewallVersionResponseDataAllOf
     */
    constructor() { 
        WafFirewallVersionData.initialize(this);WafFirewallVersionResponseDataAllOf.initialize(this);
        WafFirewallVersionResponseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafFirewallVersionResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafFirewallVersionResponseData} obj Optional instance to populate.
     * @return {module:model/WafFirewallVersionResponseData} The populated <code>WafFirewallVersionResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafFirewallVersionResponseData();
            WafFirewallVersionData.constructFromObject(data, obj);
            WafFirewallVersionResponseDataAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = TypeWafFirewallVersion.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = WafFirewallVersionResponseDataAttributes.constructFromObject(data['attributes']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('relationships')) {
                obj['relationships'] = RelationshipsForWafFirewallVersion.constructFromObject(data['relationships']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TypeWafFirewallVersion} type
 */
WafFirewallVersionResponseData.prototype['type'] = undefined;

/**
 * @member {module:model/WafFirewallVersionResponseDataAttributes} attributes
 */
WafFirewallVersionResponseData.prototype['attributes'] = undefined;

/**
 * Alphanumeric string identifying a Firewall version.
 * @member {String} id
 */
WafFirewallVersionResponseData.prototype['id'] = undefined;

/**
 * @member {module:model/RelationshipsForWafFirewallVersion} relationships
 */
WafFirewallVersionResponseData.prototype['relationships'] = undefined;


// Implement WafFirewallVersionData interface:
/**
 * @member {module:model/TypeWafFirewallVersion} type
 */
WafFirewallVersionData.prototype['type'] = undefined;
/**
 * @member {module:model/WafFirewallVersionDataAttributes} attributes
 */
WafFirewallVersionData.prototype['attributes'] = undefined;
// Implement WafFirewallVersionResponseDataAllOf interface:
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




export default WafFirewallVersionResponseData;

