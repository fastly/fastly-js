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
import NetworkProtectPrefixListResponse from './NetworkProtectPrefixListResponse';

/**
 * The NetworkProtectPrefixListsResponse model module.
 * @module model/NetworkProtectPrefixListsResponse
 * @version 17.0.0
 */
class NetworkProtectPrefixListsResponse {
    /**
     * Constructs a new <code>NetworkProtectPrefixListsResponse</code>.
     * A paginated collection of Network Protect prefix lists.
     * @alias module:model/NetworkProtectPrefixListsResponse
     * @param data {Array.<module:model/NetworkProtectPrefixListResponse>} Prefix lists returned on the current page.
     * @param meta {module:model/NetworkProtectListMeta} 
     */
    constructor(data, meta) { 
        
        NetworkProtectPrefixListsResponse.initialize(this, data, meta);
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
     * Constructs a <code>NetworkProtectPrefixListsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectPrefixListsResponse} obj Optional instance to populate.
     * @return {module:model/NetworkProtectPrefixListsResponse} The populated <code>NetworkProtectPrefixListsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectPrefixListsResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [NetworkProtectPrefixListResponse]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = NetworkProtectListMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * Prefix lists returned on the current page.
 * @member {Array.<module:model/NetworkProtectPrefixListResponse>} data
 */
NetworkProtectPrefixListsResponse.prototype['data'] = undefined;

/**
 * @member {module:model/NetworkProtectListMeta} meta
 */
NetworkProtectPrefixListsResponse.prototype['meta'] = undefined;






export default NetworkProtectPrefixListsResponse;

