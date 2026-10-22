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
 * The NetworkProtectPolicyEndpoint model module.
 * @module model/NetworkProtectPolicyEndpoint
 * @version 17.0.0
 */
class NetworkProtectPolicyEndpoint {
    /**
     * Constructs a new <code>NetworkProtectPolicyEndpoint</code>.
     * One endpoint attached to a network policy.
     * @alias module:model/NetworkProtectPolicyEndpoint
     * @param endpoint_id {String} A unique identifier for a Network Protect resource.
     * @param preference {Number} Delivery preference within a policy. Lower values are preferred first. Two endpoints in the same policy cannot share a value.
     */
    constructor(endpoint_id, preference) { 
        
        NetworkProtectPolicyEndpoint.initialize(this, endpoint_id, preference);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, endpoint_id, preference) { 
        obj['endpoint_id'] = endpoint_id;
        obj['preference'] = preference;
    }

    /**
     * Constructs a <code>NetworkProtectPolicyEndpoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectPolicyEndpoint} obj Optional instance to populate.
     * @return {module:model/NetworkProtectPolicyEndpoint} The populated <code>NetworkProtectPolicyEndpoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectPolicyEndpoint();

            if (data.hasOwnProperty('endpoint_id')) {
                obj['endpoint_id'] = ApiClient.convertToType(data['endpoint_id'], 'String');
            }
            if (data.hasOwnProperty('preference')) {
                obj['preference'] = ApiClient.convertToType(data['preference'], 'Number');
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
 * A unique identifier for a Network Protect resource.
 * @member {String} endpoint_id
 */
NetworkProtectPolicyEndpoint.prototype['endpoint_id'] = undefined;

/**
 * Delivery preference within a policy. Lower values are preferred first. Two endpoints in the same policy cannot share a value.
 * @member {Number} preference
 */
NetworkProtectPolicyEndpoint.prototype['preference'] = undefined;

/**
 * An ISO 8601 timestamp in UTC.
 * @member {Date} created_at
 */
NetworkProtectPolicyEndpoint.prototype['created_at'] = undefined;

/**
 * An ISO 8601 timestamp in UTC.
 * @member {Date} updated_at
 */
NetworkProtectPolicyEndpoint.prototype['updated_at'] = undefined;






export default NetworkProtectPolicyEndpoint;

