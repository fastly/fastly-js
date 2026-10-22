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
import NetworkProtectPolicyEndpoint from './NetworkProtectPolicyEndpoint';
import NetworkProtectRegion from './NetworkProtectRegion';

/**
 * The NetworkProtectEndpointPolicy model module.
 * @module model/NetworkProtectEndpointPolicy
 * @version 17.0.0
 */
class NetworkProtectEndpointPolicy {
    /**
     * Constructs a new <code>NetworkProtectEndpointPolicy</code>.
     * The endpoints serving one network region. Replacing &#x60;endpoint_policies&#x60; preserves attachment timestamps for the same endpoint and region; reordering does not alter them, while changing preference updates the attachment&#39;s &#x60;updated_at&#x60; value.
     * @alias module:model/NetworkProtectEndpointPolicy
     * @param endpoints {Array.<module:model/NetworkProtectPolicyEndpoint>} The endpoints serving a policy region.
     */
    constructor(endpoints) { 
        
        NetworkProtectEndpointPolicy.initialize(this, endpoints);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, endpoints) { 
        obj['endpoints'] = endpoints;
    }

    /**
     * Constructs a <code>NetworkProtectEndpointPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkProtectEndpointPolicy} obj Optional instance to populate.
     * @return {module:model/NetworkProtectEndpointPolicy} The populated <code>NetworkProtectEndpointPolicy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetworkProtectEndpointPolicy();

            if (data.hasOwnProperty('endpoints')) {
                obj['endpoints'] = ApiClient.convertToType(data['endpoints'], [NetworkProtectPolicyEndpoint]);
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = NetworkProtectRegion.constructFromObject(data['region']);
            }
        }
        return obj;
    }


}

/**
 * The endpoints serving a policy region.
 * @member {Array.<module:model/NetworkProtectPolicyEndpoint>} endpoints
 */
NetworkProtectEndpointPolicy.prototype['endpoints'] = undefined;

/**
 * @member {module:model/NetworkProtectRegion} region
 */
NetworkProtectEndpointPolicy.prototype['region'] = undefined;






export default NetworkProtectEndpointPolicy;

