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
 * The PathResponseAllOf model module.
 * @module model/PathResponseAllOf
 * @version 16.0.0
 */
class PathResponseAllOf {
    /**
     * Constructs a new <code>PathResponseAllOf</code>.
     * @alias module:model/PathResponseAllOf
     */
    constructor() { 
        
        PathResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PathResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PathResponseAllOf} obj Optional instance to populate.
     * @return {module:model/PathResponseAllOf} The populated <code>PathResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PathResponseAllOf();

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






export default PathResponseAllOf;

