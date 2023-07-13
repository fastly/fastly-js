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

/**
 * The WsMessageFormat model module.
 * @module model/WsMessageFormat
 * @version 5.0.2
 */
class WsMessageFormat {
    /**
     * Constructs a new <code>WsMessageFormat</code>.
     * Payload format for delivering to subscribers of WebSocket messages. One of &#x60;content&#x60; or &#x60;content-bin&#x60; must be specified.
     * @alias module:model/WsMessageFormat
     */
    constructor() { 
        
        WsMessageFormat.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WsMessageFormat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WsMessageFormat} obj Optional instance to populate.
     * @return {module:model/WsMessageFormat} The populated <code>WsMessageFormat</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WsMessageFormat();

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('content-bin')) {
                obj['content-bin'] = ApiClient.convertToType(data['content-bin'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The content of a WebSocket `TEXT` message.
 * @member {String} content
 */
WsMessageFormat.prototype['content'] = undefined;

/**
 * The base64-encoded content of a WebSocket `BINARY` message.
 * @member {String} content-bin
 */
WsMessageFormat.prototype['content-bin'] = undefined;






export default WsMessageFormat;

