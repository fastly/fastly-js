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
 * The ArcVirtualKeyFailoverResponse model module.
 * @module model/ArcVirtualKeyFailoverResponse
 * @version 17.0.0
 */
class ArcVirtualKeyFailoverResponse {
    /**
     * Constructs a new <code>ArcVirtualKeyFailoverResponse</code>.
     * A virtual key&#39;s failover policy. &#x60;targets&#x60; are tried in order after the primary request fails and one of the enabled error conditions is met. 
     * @alias module:model/ArcVirtualKeyFailoverResponse
     * @param targets {Array.<module:model/ArcFailoverTarget>} The provider connections to retry against, in order.
     * @param timeout_enabled {Boolean} Whether a request timeout triggers failover.
     * @param rate_limit_429_enabled {Boolean} Whether a `429 Too Many Requests` response from the provider triggers failover.
     * @param server_error_5xx_enabled {Boolean} Whether a `5xx` server error response from the provider triggers failover.
     */
    constructor(targets, timeout_enabled, rate_limit_429_enabled, server_error_5xx_enabled) { 
        
        ArcVirtualKeyFailoverResponse.initialize(this, targets, timeout_enabled, rate_limit_429_enabled, server_error_5xx_enabled);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, targets, timeout_enabled, rate_limit_429_enabled, server_error_5xx_enabled) { 
        obj['targets'] = targets;
        obj['timeout_enabled'] = timeout_enabled;
        obj['rate_limit_429_enabled'] = rate_limit_429_enabled;
        obj['server_error_5xx_enabled'] = server_error_5xx_enabled;
    }

    /**
     * Constructs a <code>ArcVirtualKeyFailoverResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArcVirtualKeyFailoverResponse} obj Optional instance to populate.
     * @return {module:model/ArcVirtualKeyFailoverResponse} The populated <code>ArcVirtualKeyFailoverResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArcVirtualKeyFailoverResponse();

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
ArcVirtualKeyFailoverResponse.prototype['targets'] = undefined;

/**
 * Whether a request timeout triggers failover.
 * @member {Boolean} timeout_enabled
 */
ArcVirtualKeyFailoverResponse.prototype['timeout_enabled'] = undefined;

/**
 * Whether a `429 Too Many Requests` response from the provider triggers failover.
 * @member {Boolean} rate_limit_429_enabled
 */
ArcVirtualKeyFailoverResponse.prototype['rate_limit_429_enabled'] = undefined;

/**
 * Whether a `5xx` server error response from the provider triggers failover.
 * @member {Boolean} server_error_5xx_enabled
 */
ArcVirtualKeyFailoverResponse.prototype['server_error_5xx_enabled'] = undefined;






export default ArcVirtualKeyFailoverResponse;

