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
import BotRequestMetricsDataItem from './BotRequestMetricsDataItem';
import BotRequestMetricsMetadata from './BotRequestMetricsMetadata';

/**
 * The BotRequestMetricsResponse model module.
 * @module model/BotRequestMetricsResponse
 * @version 17.0.0
 */
class BotRequestMetricsResponse {
    /**
     * Constructs a new <code>BotRequestMetricsResponse</code>.
     * @alias module:model/BotRequestMetricsResponse
     */
    constructor() { 
        
        BotRequestMetricsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BotRequestMetricsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotRequestMetricsResponse} obj Optional instance to populate.
     * @return {module:model/BotRequestMetricsResponse} The populated <code>BotRequestMetricsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotRequestMetricsResponse();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [BotRequestMetricsDataItem]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = BotRequestMetricsMetadata.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * An array of time series data items containing metric counts. Items are grouped by `timestamp` by default, or by a combination of `timestamp` and `bot` or `datacenter` or `region` when the `group_by` parameter is set. This dataset is sparse: only keys with non-zero values are included. 
 * @member {Array.<module:model/BotRequestMetricsDataItem>} data
 */
BotRequestMetricsResponse.prototype['data'] = undefined;

/**
 * @member {module:model/BotRequestMetricsMetadata} meta
 */
BotRequestMetricsResponse.prototype['meta'] = undefined;






export default BotRequestMetricsResponse;

