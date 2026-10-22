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
 * The NetworkProtectRuleMatchSourcePrefixList model module.
 * @module model/NetworkProtectRuleMatchSourcePrefixList
 * @version 17.0.0
 */
class NetworkProtectRuleMatchSourcePrefixList {
    /**
     * Constructs a new <code>NetworkProtectRuleMatchSourcePrefixList</code>.
     * Requires a source prefix-list match field.
     * @alias module:model/NetworkProtectRuleMatchSourcePrefixList
     * @param source_prefix_list_id {String} Match traffic whose source appears in this prefix list.
     */
    constructor(source_prefix_list_id) { 
        
        NetworkProtectRuleMatchSourcePrefixList.initialize(this, source_prefix_list_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, source_prefix_list_id) { 
        obj['source_prefix_list_id'] = source_prefix_list_id;
    }

    /**
     * Constructs a <code>NetworkProtectRuleMatchSourcePrefixList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectRuleMatchSourcePrefixList} obj Optional instance to populate.
     * @return {module:model/NetworkProtectRuleMatchSourcePrefixList} The populated <code>NetworkProtectRuleMatchSourcePrefixList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectRuleMatchSourcePrefixList();

            if (data.hasOwnProperty('source_prefix_list_id')) {
                obj['source_prefix_list_id'] = ApiClient.convertToType(data['source_prefix_list_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Match traffic whose source appears in this prefix list.
 * @member {String} source_prefix_list_id
 */
NetworkProtectRuleMatchSourcePrefixList.prototype['source_prefix_list_id'] = undefined;






export default NetworkProtectRuleMatchSourcePrefixList;

