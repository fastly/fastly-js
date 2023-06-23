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
import PublishItem from './PublishItem';

/**
 * The PublishRequest model module.
 * @module model/PublishRequest
 * @version 4.2.2
 */
class PublishRequest {
    /**
     * Constructs a new <code>PublishRequest</code>.
     * Contains a batch of messages to publish.
     * @alias module:model/PublishRequest
     * @param items {Array.<module:model/PublishItem>} The messages to publish.
     */
    constructor(items) { 
        
        PublishRequest.initialize(this, items);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, items) { 
        obj['items'] = items;
    }

    /**
     * Constructs a <code>PublishRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublishRequest} obj Optional instance to populate.
     * @return {module:model/PublishRequest} The populated <code>PublishRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PublishRequest();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [PublishItem]);
            }
        }
        return obj;
    }


}

/**
 * The messages to publish.
 * @member {Array.<module:model/PublishItem>} items
 */
PublishRequest.prototype['items'] = undefined;






export default PublishRequest;

