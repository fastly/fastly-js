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
import NetworkProtectListMeta from './NetworkProtectListMeta';
import NetworkProtectRuleSetResponse from './NetworkProtectRuleSetResponse';

/**
 * The NetworkProtectRuleSetsResponse model module.
 * @module model/NetworkProtectRuleSetsResponse
 * @version 17.0.0
 */
class NetworkProtectRuleSetsResponse {
    /**
     * Constructs a new <code>NetworkProtectRuleSetsResponse</code>.
     * A paginated collection of Network Protect rule sets.
     * @alias module:model/NetworkProtectRuleSetsResponse
     * @param data {Array.<module:model/NetworkProtectRuleSetResponse>} Rule sets returned on the current page.
     * @param meta {module:model/NetworkProtectListMeta} 
     */
    constructor(data, meta) { 
        
        NetworkProtectRuleSetsResponse.initialize(this, data, meta);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data, meta) { 
        obj['data'] = data;
        obj['meta'] = meta;
    }

    /**
     * Constructs a <code>NetworkProtectRuleSetsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectRuleSetsResponse} obj Optional instance to populate.
     * @return {module:model/NetworkProtectRuleSetsResponse} The populated <code>NetworkProtectRuleSetsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectRuleSetsResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [NetworkProtectRuleSetResponse]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = NetworkProtectListMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * Rule sets returned on the current page.
 * @member {Array.<module:model/NetworkProtectRuleSetResponse>} data
 */
NetworkProtectRuleSetsResponse.prototype['data'] = undefined;

/**
 * @member {module:model/NetworkProtectListMeta} meta
 */
NetworkProtectRuleSetsResponse.prototype['meta'] = undefined;






export default NetworkProtectRuleSetsResponse;

