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
 * The BotRequestMetricsDataItem model module.
 * @module model/BotRequestMetricsDataItem
 * @version 17.0.0
 */
class BotRequestMetricsDataItem {
    /**
     * Constructs a new <code>BotRequestMetricsDataItem</code>.
     * A time series data item containing bot request metric counts. The &#x60;bot&#x60; field is present when grouped by bot. The &#x60;datacenter&#x60; field is present when grouped by data center. This dataset is sparse, meaning only keys with non-zero values are included. 
     * @alias module:model/BotRequestMetricsDataItem
     */
    constructor() { 
        
        BotRequestMetricsDataItem.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BotRequestMetricsDataItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BotRequestMetricsDataItem} obj Optional instance to populate.
     * @return {module:model/BotRequestMetricsDataItem} The populated <code>BotRequestMetricsDataItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BotRequestMetricsDataItem();

            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
            if (data.hasOwnProperty('bot')) {
                obj['bot'] = ApiClient.convertToType(data['bot'], 'String');
            }
            if (data.hasOwnProperty('datacenter')) {
                obj['datacenter'] = ApiClient.convertToType(data['datacenter'], 'String');
            }
            if (data.hasOwnProperty('bot_edge_requests_allowed_count')) {
                obj['bot_edge_requests_allowed_count'] = ApiClient.convertToType(data['bot_edge_requests_allowed_count'], 'Number');
            }
            if (data.hasOwnProperty('bot_edge_requests_challenged_count')) {
                obj['bot_edge_requests_challenged_count'] = ApiClient.convertToType(data['bot_edge_requests_challenged_count'], 'Number');
            }
            if (data.hasOwnProperty('bot_edge_requests_blocked_count')) {
                obj['bot_edge_requests_blocked_count'] = ApiClient.convertToType(data['bot_edge_requests_blocked_count'], 'Number');
            }
            if (data.hasOwnProperty('bot_edge_requests_challenge_token_valid_count')) {
                obj['bot_edge_requests_challenge_token_valid_count'] = ApiClient.convertToType(data['bot_edge_requests_challenge_token_valid_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Timestamp for the time series being reported.
 * @member {Date} timestamp
 */
BotRequestMetricsDataItem.prototype['timestamp'] = undefined;

/**
 * Bot identifier for which data was recorded. Present only when grouped by bot.
 * @member {String} bot
 */
BotRequestMetricsDataItem.prototype['bot'] = undefined;

/**
 * Datacenter (POP) for which data was recorded. Present only when grouped by datacenter.
 * @member {String} datacenter
 */
BotRequestMetricsDataItem.prototype['datacenter'] = undefined;

/**
 * Count of edge requests where a bot was detected and the request was allowed by the configured policy.
 * @member {Number} bot_edge_requests_allowed_count
 */
BotRequestMetricsDataItem.prototype['bot_edge_requests_allowed_count'] = undefined;

/**
 * Count of edge requests where a bot was detected and a client challenge was issued for the request by the configured policy.
 * @member {Number} bot_edge_requests_challenged_count
 */
BotRequestMetricsDataItem.prototype['bot_edge_requests_challenged_count'] = undefined;

/**
 * Count of edge requests where a bot was detected and the request was blocked by the configured policy.
 * @member {Number} bot_edge_requests_blocked_count
 */
BotRequestMetricsDataItem.prototype['bot_edge_requests_blocked_count'] = undefined;

/**
 * Count of edge requests where a bot was detected and the client making the request has already solved a challenge issued by the configured policy.
 * @member {Number} bot_edge_requests_challenge_token_valid_count
 */
BotRequestMetricsDataItem.prototype['bot_edge_requests_challenge_token_valid_count'] = undefined;






export default BotRequestMetricsDataItem;

