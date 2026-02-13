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
 * The ComputeAclUpdateEntry model module.
 * @module model/ComputeAclUpdateEntry
 * @version 15.0.0-beta.3
 */
class ComputeAclUpdateEntry {
    /**
     * Constructs a new <code>ComputeAclUpdateEntry</code>.
     * Defines the structure of an ACL update request entry.
     * @alias module:model/ComputeAclUpdateEntry
     */
    constructor() { 
        
        ComputeAclUpdateEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ComputeAclUpdateEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ComputeAclUpdateEntry} obj Optional instance to populate.
     * @return {module:model/ComputeAclUpdateEntry} The populated <code>ComputeAclUpdateEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ComputeAclUpdateEntry();

            if (data.hasOwnProperty('op')) {
                obj['op'] = ApiClient.convertToType(data['op'], 'String');
            }
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
 * One of \"create\", \"update\", or \"delete\" indicating the operation to perform on the update.
 * @member {String} op
 */
ComputeAclUpdateEntry.prototype['op'] = undefined;

/**
 * An IP prefix defined in Classless Inter-Domain Routing (CIDR) format, i.e. a valid IP address (v4 or v6) followed by a forward slash (/) and a prefix length (0-32 or 0-128, depending on address family).
 * @member {String} prefix
 */
ComputeAclUpdateEntry.prototype['prefix'] = undefined;

/**
 * The action taken on the IP address, one of \"BLOCK\" or \"ALLOW\". If using the \"delete\" operation, no action should be specified.
 * @member {String} action
 */
ComputeAclUpdateEntry.prototype['action'] = undefined;






export default ComputeAclUpdateEntry;

