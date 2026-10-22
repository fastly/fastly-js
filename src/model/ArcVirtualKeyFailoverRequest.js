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
import ArcFailoverTarget from './ArcFailoverTarget';

/**
 * The ArcVirtualKeyFailoverRequest model module.
 * @module model/ArcVirtualKeyFailoverRequest
 * @version 17.0.0
 */
class ArcVirtualKeyFailoverRequest {
    /**
     * Constructs a new <code>ArcVirtualKeyFailoverRequest</code>.
     * A failover policy for a virtual key. &#x60;targets&#x60; are tried in order after the primary request fails and one of the enabled error conditions is met. 
     * @alias module:model/ArcVirtualKeyFailoverRequest
     * @param targets {Array.<module:model/ArcFailoverTarget>} The provider connections to retry against, in order.
     */
    constructor(targets) { 
        
        ArcVirtualKeyFailoverRequest.initialize(this, targets);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, targets) { 
        obj['targets'] = targets;
    }

    /**
     * Constructs a <code>ArcVirtualKeyFailoverRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcVirtualKeyFailoverRequest} obj Optional instance to populate.
     * @return {module:model/ArcVirtualKeyFailoverRequest} The populated <code>ArcVirtualKeyFailoverRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcVirtualKeyFailoverRequest();

            if (data.hasOwnProperty('targets')) {
                obj['targets'] = ApiClient.convertToType(data['targets'], [ArcFailoverTarget]);
            }
            if (data.hasOwnProperty('timeout_enabled')) {
                obj['timeout_enabled'] = ApiClient.convertToType(data['timeout_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('rate_limit_429_enabled')) {
                obj['rate_limit_429_enabled'] = ApiClient.convertToType(data['rate_limit_429_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('server_error_5xx_enabled')) {
                obj['server_error_5xx_enabled'] = ApiClient.convertToType(data['server_error_5xx_enabled'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * The provider connections to retry against, in order.
 * @member {Array.<module:model/ArcFailoverTarget>} targets
 */
ArcVirtualKeyFailoverRequest.prototype['targets'] = undefined;

/**
 * Whether a request timeout triggers failover.
 * @member {Boolean} timeout_enabled
 */
ArcVirtualKeyFailoverRequest.prototype['timeout_enabled'] = undefined;

/**
 * Whether a `429 Too Many Requests` response from the provider triggers failover.
 * @member {Boolean} rate_limit_429_enabled
 */
ArcVirtualKeyFailoverRequest.prototype['rate_limit_429_enabled'] = undefined;

/**
 * Whether a `5xx` server error response from the provider triggers failover.
 * @member {Boolean} server_error_5xx_enabled
 */
ArcVirtualKeyFailoverRequest.prototype['server_error_5xx_enabled'] = undefined;






export default ArcVirtualKeyFailoverRequest;

