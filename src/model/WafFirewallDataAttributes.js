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

/**
 * The WafFirewallDataAttributes model module.
 * @module model/WafFirewallDataAttributes
 * @version 8.0.0
 */
class WafFirewallDataAttributes {
    /**
     * Constructs a new <code>WafFirewallDataAttributes</code>.
     * @alias module:model/WafFirewallDataAttributes
     */
    constructor() { 
        
        WafFirewallDataAttributes.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WafFirewallDataAttributes</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WafFirewallDataAttributes} obj Optional instance to populate.
     * @return {module:model/WafFirewallDataAttributes} The populated <code>WafFirewallDataAttributes</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WafFirewallDataAttributes();

            if (data.hasOwnProperty('disabled')) {
                obj['disabled'] = ApiClient.convertToType(data['disabled'], 'Boolean');
            }
            if (data.hasOwnProperty('prefetch_condition')) {
                obj['prefetch_condition'] = ApiClient.convertToType(data['prefetch_condition'], 'String');
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = ApiClient.convertToType(data['response'], 'String');
            }
            if (data.hasOwnProperty('service_version_number')) {
                obj['service_version_number'] = ApiClient.convertToType(data['service_version_number'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The status of the firewall.
 * @member {Boolean} disabled
 * @default false
 */
WafFirewallDataAttributes.prototype['disabled'] = false;

/**
 * Name of the corresponding condition object.
 * @member {String} prefetch_condition
 */
WafFirewallDataAttributes.prototype['prefetch_condition'] = undefined;

/**
 * Name of the corresponding response object.
 * @member {String} response
 */
WafFirewallDataAttributes.prototype['response'] = undefined;

/**
 * @member {Number} service_version_number
 */
WafFirewallDataAttributes.prototype['service_version_number'] = undefined;






export default WafFirewallDataAttributes;

