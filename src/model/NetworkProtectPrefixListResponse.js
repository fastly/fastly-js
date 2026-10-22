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
import NetworkProtectPrefixList from './NetworkProtectPrefixList';
import NetworkProtectPrefixListFamily from './NetworkProtectPrefixListFamily';
import NetworkProtectPrefixListResponseFields from './NetworkProtectPrefixListResponseFields';

/**
 * The NetworkProtectPrefixListResponse model module.
 * @module model/NetworkProtectPrefixListResponse
 * @version 17.0.0
 */
class NetworkProtectPrefixListResponse {
    /**
     * Constructs a new <code>NetworkProtectPrefixListResponse</code>.
     * A Network Protect prefix-list response.
     * @alias module:model/NetworkProtectPrefixListResponse
     * @implements module:model/NetworkProtectPrefixList
     * @implements module:model/NetworkProtectPrefixListResponseFields
     * @param name {String} A human-readable name, unique within the customer.
     * @param family {module:model/NetworkProtectPrefixListFamily} 
     * @param addresses {Array.<String>} Complete canonical list contents. Bare addresses are canonicalized, CIDRs are masked, equivalent entries are deduplicated, and overlaps are retained.
     * @param id {String} A read-only unique identifier for a Network Protect resource.
     * @param created_at {Date} An ISO 8601 timestamp in UTC.
     * @param updated_at {Date} An ISO 8601 timestamp in UTC.
     */
    constructor(name, family, addresses, id, created_at, updated_at) { 
        NetworkProtectPrefixList.initialize(this, name, family, addresses);NetworkProtectPrefixListResponseFields.initialize(this, id, created_at, updated_at);
        NetworkProtectPrefixListResponse.initialize(this, name, family, addresses, id, created_at, updated_at);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, family, addresses, id, created_at, updated_at) { 
        obj['name'] = name;
        obj['family'] = family;
        obj['addresses'] = addresses;
        obj['id'] = id;
        obj['created_at'] = created_at;
        obj['updated_at'] = updated_at;
    }

    /**
     * Constructs a <code>NetworkProtectPrefixListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectPrefixListResponse} obj Optional instance to populate.
     * @return {module:model/NetworkProtectPrefixListResponse} The populated <code>NetworkProtectPrefixListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectPrefixListResponse();
            NetworkProtectPrefixList.constructFromObject(data, obj);
            NetworkProtectPrefixListResponseFields.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('family')) {
                obj['family'] = NetworkProtectPrefixListFamily.constructFromObject(data['family']);
            }
            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * A human-readable name, unique within the customer.
 * @member {String} name
 */
NetworkProtectPrefixListResponse.prototype['name'] = undefined;

/**
 * @member {module:model/NetworkProtectPrefixListFamily} family
 */
NetworkProtectPrefixListResponse.prototype['family'] = undefined;

/**
 * Complete canonical list contents. Bare addresses are canonicalized, CIDRs are masked, equivalent entries are deduplicated, and overlaps are retained.
 * @member {Array.<String>} addresses
 */
NetworkProtectPrefixListResponse.prototype['addresses'] = undefined;

/**
 * A read-only unique identifier for a Network Protect resource.
 * @member {String} id
 */
NetworkProtectPrefixListResponse.prototype['id'] = undefined;

/**
 * An ISO 8601 timestamp in UTC.
 * @member {Date} created_at
 */
NetworkProtectPrefixListResponse.prototype['created_at'] = undefined;

/**
 * An ISO 8601 timestamp in UTC.
 * @member {Date} updated_at
 */
NetworkProtectPrefixListResponse.prototype['updated_at'] = undefined;


// Implement NetworkProtectPrefixList interface:
/**
 * A human-readable name, unique within the customer.
 * @member {String} name
 */
NetworkProtectPrefixList.prototype['name'] = undefined;
/**
 * @member {module:model/NetworkProtectPrefixListFamily} family
 */
NetworkProtectPrefixList.prototype['family'] = undefined;
/**
 * Complete canonical list contents. Bare addresses are canonicalized, CIDRs are masked, equivalent entries are deduplicated, and overlaps are retained.
 * @member {Array.<String>} addresses
 */
NetworkProtectPrefixList.prototype['addresses'] = undefined;
// Implement NetworkProtectPrefixListResponseFields interface:
/**
 * A read-only unique identifier for a Network Protect resource.
 * @member {String} id
 */
NetworkProtectPrefixListResponseFields.prototype['id'] = undefined;
/**
 * An ISO 8601 timestamp in UTC.
 * @member {Date} created_at
 */
NetworkProtectPrefixListResponseFields.prototype['created_at'] = undefined;
/**
 * An ISO 8601 timestamp in UTC.
 * @member {Date} updated_at
 */
NetworkProtectPrefixListResponseFields.prototype['updated_at'] = undefined;




export default NetworkProtectPrefixListResponse;

