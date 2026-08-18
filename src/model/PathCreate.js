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
 * The PathCreate model module.
 * @module model/PathCreate
 * @version 16.1.0
 */
class PathCreate {
    /**
     * Constructs a new <code>PathCreate</code>.
     * All attributes for creating a path.
     * @alias module:model/PathCreate
     * @param path {String} The URL path pattern, beginning with `/`. Maximum 2048 characters.
     */
    constructor(path) { 
        
        PathCreate.initialize(this, path);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, path) { 
        obj['path'] = path;
    }

    /**
     * Constructs a <code>PathCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PathCreate} obj Optional instance to populate.
     * @return {module:model/PathCreate} The populated <code>PathCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PathCreate();

            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The URL path pattern, beginning with `/`. Maximum 2048 characters.
 * @member {String} path
 */
PathCreate.prototype['path'] = undefined;






export default PathCreate;

