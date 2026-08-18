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
import PathResponseAllOf from './PathResponseAllOf';
import TimestampsNoDelete from './TimestampsNoDelete';

/**
 * The PathResponse model module.
 * @module model/PathResponse
 * @version 16.1.0
 */
class PathResponse {
    /**
     * Constructs a new <code>PathResponse</code>.
     * All attributes for a path response.
     * @alias module:model/PathResponse
     * @implements module:model/TimestampsNoDelete
     * @implements module:model/PathResponseAllOf
     */
    constructor() { 
        TimestampsNoDelete.initialize(this);PathResponseAllOf.initialize(this);
        PathResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PathResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PathResponse} obj Optional instance to populate.
     * @return {module:model/PathResponse} The populated <code>PathResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PathResponse();
            TimestampsNoDelete.constructFromObject(data, obj);
            PathResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
PathResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
PathResponse.prototype['updated_at'] = undefined;

/**
 * Alphanumeric string identifying the path. Stable across versions of the routing config.
 * @member {String} id
 */
PathResponse.prototype['id'] = undefined;

/**
 * The URL path pattern, beginning with `/`. Maximum 2048 characters.
 * @member {String} path
 */
PathResponse.prototype['path'] = undefined;

/**
 * HATEOAS links to related resources.
 * @member {Object.<String, String>} links
 */
PathResponse.prototype['links'] = undefined;


// Implement TimestampsNoDelete interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
TimestampsNoDelete.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
TimestampsNoDelete.prototype['updated_at'] = undefined;
// Implement PathResponseAllOf interface:
/**
 * Alphanumeric string identifying the path. Stable across versions of the routing config.
 * @member {String} id
 */
PathResponseAllOf.prototype['id'] = undefined;
/**
 * The URL path pattern, beginning with `/`. Maximum 2048 characters.
 * @member {String} path
 */
PathResponseAllOf.prototype['path'] = undefined;
/**
 * HATEOAS links to related resources.
 * @member {Object.<String, String>} links
 */
PathResponseAllOf.prototype['links'] = undefined;




export default PathResponse;

