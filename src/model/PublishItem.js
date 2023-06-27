/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import PublishItemFormats from './PublishItemFormats';

/**
 * The PublishItem model module.
 * @module model/PublishItem
 * @version 4.3.0
 */
class PublishItem {
    /**
     * Constructs a new <code>PublishItem</code>.
     * An individual message.
     * @alias module:model/PublishItem
     * @param channel {String} The channel to publish the message on.
     * @param formats {module:model/PublishItemFormats} 
     */
    constructor(channel, formats) { 
        
        PublishItem.initialize(this, channel, formats);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, channel, formats) { 
        obj['channel'] = channel;
        obj['formats'] = formats;
    }

    /**
     * Constructs a <code>PublishItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublishItem} obj Optional instance to populate.
     * @return {module:model/PublishItem} The populated <code>PublishItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PublishItem();

            if (data.hasOwnProperty('channel')) {
                obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
            }
            if (data.hasOwnProperty('formats')) {
                obj['formats'] = PublishItemFormats.constructFromObject(data['formats']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('prev-id')) {
                obj['prev-id'] = ApiClient.convertToType(data['prev-id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The channel to publish the message on.
 * @member {String} channel
 */
PublishItem.prototype['channel'] = undefined;

/**
 * @member {module:model/PublishItemFormats} formats
 */
PublishItem.prototype['formats'] = undefined;

/**
 * The ID of the message.
 * @member {String} id
 */
PublishItem.prototype['id'] = undefined;

/**
 * The ID of the previous message published on the same channel.
 * @member {String} prev-id
 */
PublishItem.prototype['prev-id'] = undefined;






export default PublishItem;

