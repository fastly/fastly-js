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
 * The HttpResponseFormat model module.
 * @module model/HttpResponseFormat
 * @version 13.0.0
 */
class HttpResponseFormat {
    /**
     * Constructs a new <code>HttpResponseFormat</code>.
     * Payload format for delivering to subscribers of whole HTTP responses (&#x60;response&#x60; hold mode). One of &#x60;body&#x60; or &#x60;body-bin&#x60; must be specified.
     * @alias module:model/HttpResponseFormat
     */
    constructor() { 
        
        HttpResponseFormat.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HttpResponseFormat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HttpResponseFormat} obj Optional instance to populate.
     * @return {module:model/HttpResponseFormat} The populated <code>HttpResponseFormat</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HttpResponseFormat();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'Number');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], {'String': 'String'});
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('body-bin')) {
                obj['body-bin'] = ApiClient.convertToType(data['body-bin'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The HTTP status code.
 * @member {Number} code
 * @default 200
 */
HttpResponseFormat.prototype['code'] = 200;

/**
 * The HTTP status string. Defaults to a string appropriate for `code`.
 * @member {String} reason
 */
HttpResponseFormat.prototype['reason'] = undefined;

/**
 * A map of arbitrary HTTP response headers to include in the response.
 * @member {Object.<String, String>} headers
 */
HttpResponseFormat.prototype['headers'] = undefined;

/**
 * The response body as a string.
 * @member {String} body
 */
HttpResponseFormat.prototype['body'] = undefined;

/**
 * The response body as a base64-encoded binary blob.
 * @member {String} body-bin
 */
HttpResponseFormat.prototype['body-bin'] = undefined;






export default HttpResponseFormat;

