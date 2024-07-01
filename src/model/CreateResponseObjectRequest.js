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
 * The CreateResponseObjectRequest model module.
 * @module model/CreateResponseObjectRequest
 * @version 7.5.0
 */
class CreateResponseObjectRequest {
    /**
     * Constructs a new <code>CreateResponseObjectRequest</code>.
     * @alias module:model/CreateResponseObjectRequest
     */
    constructor() { 
        
        CreateResponseObjectRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateResponseObjectRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateResponseObjectRequest} obj Optional instance to populate.
     * @return {module:model/CreateResponseObjectRequest} The populated <code>CreateResponseObjectRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateResponseObjectRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = ApiClient.convertToType(data['response'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('request_condition')) {
                obj['request_condition'] = ApiClient.convertToType(data['request_condition'], 'String');
            }
            if (data.hasOwnProperty('cache_condition')) {
                obj['cache_condition'] = ApiClient.convertToType(data['cache_condition'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the response object to create.
 * @member {String} name
 */
CreateResponseObjectRequest.prototype['name'] = undefined;

/**
 * The status code the response will have. Defaults to 200.
 * @member {String} status
 */
CreateResponseObjectRequest.prototype['status'] = undefined;

/**
 * The status text the response will have. Defaults to 'OK'.
 * @member {String} response
 */
CreateResponseObjectRequest.prototype['response'] = undefined;

/**
 * The content the response will deliver.
 * @member {String} content
 */
CreateResponseObjectRequest.prototype['content'] = undefined;

/**
 * The MIME type of your response content.
 * @member {String} content_type
 */
CreateResponseObjectRequest.prototype['content_type'] = undefined;

/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */
CreateResponseObjectRequest.prototype['request_condition'] = undefined;

/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */
CreateResponseObjectRequest.prototype['cache_condition'] = undefined;






export default CreateResponseObjectRequest;

