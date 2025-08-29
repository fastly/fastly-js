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
 * The ComputeAclLookup model module.
 * @module model/ComputeAclLookup
 * @version 13.0.0
 */
class ComputeAclLookup {
    /**
     * Constructs a new <code>ComputeAclLookup</code>.
     * Defines the structure of an ACL Lookup response.
     * @alias module:model/ComputeAclLookup
     */
    constructor() { 
        
        ComputeAclLookup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ComputeAclLookup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ComputeAclLookup} obj Optional instance to populate.
     * @return {module:model/ComputeAclLookup} The populated <code>ComputeAclLookup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ComputeAclLookup();

            if (data.hasOwnProperty('prefix')) {
                obj['prefix'] = ApiClient.convertToType(data['prefix'], 'String');
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A valid IPv4 or IPv6 address and prefix in CIDR notation.
 * @member {String} prefix
 */
ComputeAclLookup.prototype['prefix'] = undefined;

/**
 * One of \"ALLOW\" or \"BLOCK\".
 * @member {String} action
 */
ComputeAclLookup.prototype['action'] = undefined;






export default ComputeAclLookup;

