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
 * The HttpStreamFormat model module.
 * @module model/HttpStreamFormat
 * @version 15.0.0-beta.4
 */
class HttpStreamFormat {
    /**
     * Constructs a new <code>HttpStreamFormat</code>.
     * Payload format for delivering to subscribers of HTTP streaming response bodies (&#x60;stream&#x60; hold mode). One of &#x60;content&#x60; or &#x60;content-bin&#x60; must be specified.
     * @alias module:model/HttpStreamFormat
     */
    constructor() { 
        
        HttpStreamFormat.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HttpStreamFormat</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HttpStreamFormat} obj Optional instance to populate.
     * @return {module:model/HttpStreamFormat} The populated <code>HttpStreamFormat</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HttpStreamFormat();

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
 * A fragment of body data as a string.
 * @member {String} content
 */
HttpStreamFormat.prototype['content'] = undefined;

/**
 * A fragment of body data as a base64-encoded binary blob.
 * @member {String} content-bin
 */
HttpStreamFormat.prototype['content-bin'] = undefined;






export default HttpStreamFormat;

