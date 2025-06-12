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
 * The ResponseObject model module.
 * @module model/ResponseObject
 * @version 12.0.0
 */
class ResponseObject {
    /**
     * Constructs a new <code>ResponseObject</code>.
     * @alias module:model/ResponseObject
     */
    constructor() { 
        
        ResponseObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponseObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseObject} obj Optional instance to populate.
     * @return {module:model/ResponseObject} The populated <code>ResponseObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseObject();

            if (data.hasOwnProperty('cache_condition')) {
                obj['cache_condition'] = ApiClient.convertToType(data['cache_condition'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = ApiClient.convertToType(data['response'], 'String');
            }
            if (data.hasOwnProperty('request_condition')) {
                obj['request_condition'] = ApiClient.convertToType(data['request_condition'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */
ResponseObject.prototype['cache_condition'] = undefined;

/**
 * The content to deliver for the response object, can be empty.
 * @member {String} content
 */
ResponseObject.prototype['content'] = undefined;

/**
 * The MIME type of the content, can be empty.
 * @member {String} content_type
 */
ResponseObject.prototype['content_type'] = undefined;

/**
 * Name for the request settings.
 * @member {String} name
 */
ResponseObject.prototype['name'] = undefined;

/**
 * The HTTP status code.
 * @member {String} status
 * @default '200'
 */
ResponseObject.prototype['status'] = '200';

/**
 * The HTTP response.
 * @member {String} response
 * @default 'Ok'
 */
ResponseObject.prototype['response'] = 'Ok';

/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */
ResponseObject.prototype['request_condition'] = undefined;






export default ResponseObject;

