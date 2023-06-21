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
import ResponseObject from './ResponseObject';
import ServiceIdAndVersion from './ServiceIdAndVersion';
import Timestamps from './Timestamps';

/**
 * The ResponseObjectResponse model module.
 * @module model/ResponseObjectResponse
 * @version 4.2.1
 */
class ResponseObjectResponse {
    /**
     * Constructs a new <code>ResponseObjectResponse</code>.
     * @alias module:model/ResponseObjectResponse
     * @implements module:model/ResponseObject
     * @implements module:model/ServiceIdAndVersion
     * @implements module:model/Timestamps
     */
    constructor() { 
        ResponseObject.initialize(this);ServiceIdAndVersion.initialize(this);Timestamps.initialize(this);
        ResponseObjectResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponseObjectResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseObjectResponse} obj Optional instance to populate.
     * @return {module:model/ResponseObjectResponse} The populated <code>ResponseObjectResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseObjectResponse();
            ResponseObject.constructFromObject(data, obj);
            ServiceIdAndVersion.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);

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
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('response')) {
                obj['response'] = ApiClient.convertToType(data['response'], 'String');
            }
            if (data.hasOwnProperty('request_condition')) {
                obj['request_condition'] = ApiClient.convertToType(data['request_condition'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Name of the cache condition controlling when this configuration applies.
 * @member {String} cache_condition
 */
ResponseObjectResponse.prototype['cache_condition'] = undefined;

/**
 * The content to deliver for the response object, can be empty.
 * @member {String} content
 */
ResponseObjectResponse.prototype['content'] = undefined;

/**
 * The MIME type of the content, can be empty.
 * @member {String} content_type
 */
ResponseObjectResponse.prototype['content_type'] = undefined;

/**
 * Name for the request settings.
 * @member {String} name
 */
ResponseObjectResponse.prototype['name'] = undefined;

/**
 * The HTTP status code.
 * @member {Number} status
 * @default 200
 */
ResponseObjectResponse.prototype['status'] = 200;

/**
 * The HTTP response.
 * @member {String} response
 * @default 'Ok'
 */
ResponseObjectResponse.prototype['response'] = 'Ok';

/**
 * Condition which, if met, will select this configuration during a request. Optional.
 * @member {String} request_condition
 */
ResponseObjectResponse.prototype['request_condition'] = undefined;

/**
 * @member {String} service_id
 */
ResponseObjectResponse.prototype['service_id'] = undefined;

/**
 * @member {Number} version
 */
ResponseObjectResponse.prototype['version'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
ResponseObjectResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
ResponseObjectResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
ResponseObjectResponse.prototype['updated_at'] = undefined;


// Implement ResponseObject interface:
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
 * @member {Number} status
 * @default 200
 */
ResponseObject.prototype['status'] = 200;
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
// Implement ServiceIdAndVersion interface:
/**
 * @member {String} service_id
 */
ServiceIdAndVersion.prototype['service_id'] = undefined;
/**
 * @member {Number} version
 */
ServiceIdAndVersion.prototype['version'] = undefined;
// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;




export default ResponseObjectResponse;

