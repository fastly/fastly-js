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
import HttpResponseFormat from './HttpResponseFormat';
import HttpStreamFormat from './HttpStreamFormat';
import WsMessageFormat from './WsMessageFormat';

/**
 * The PublishItemFormats model module.
 * @module model/PublishItemFormats
 * @version 3.2.0
 */
class PublishItemFormats {
    /**
     * Constructs a new <code>PublishItemFormats</code>.
     * Transport-specific message payload representations to be used for delivery. At least one format (&#x60;http-response&#x60;, &#x60;http-stream&#x60;, and/or &#x60;ws-message&#x60;) must be specified. Messages are only delivered to subscribers interested in the provided formats. For example, the &#x60;ws-message&#x60; format will only be sent to WebSocket clients.
     * @alias module:model/PublishItemFormats
     */
    constructor() { 
        
        PublishItemFormats.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PublishItemFormats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PublishItemFormats} obj Optional instance to populate.
     * @return {module:model/PublishItemFormats} The populated <code>PublishItemFormats</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PublishItemFormats();

            if (data.hasOwnProperty('http-response')) {
                obj['http-response'] = HttpResponseFormat.constructFromObject(data['http-response']);
            }
            if (data.hasOwnProperty('http-stream')) {
                obj['http-stream'] = HttpStreamFormat.constructFromObject(data['http-stream']);
            }
            if (data.hasOwnProperty('ws-message')) {
                obj['ws-message'] = WsMessageFormat.constructFromObject(data['ws-message']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/HttpResponseFormat} http-response
 */
PublishItemFormats.prototype['http-response'] = undefined;

/**
 * @member {module:model/HttpStreamFormat} http-stream
 */
PublishItemFormats.prototype['http-stream'] = undefined;

/**
 * @member {module:model/WsMessageFormat} ws-message
 */
PublishItemFormats.prototype['ws-message'] = undefined;






export default PublishItemFormats;

