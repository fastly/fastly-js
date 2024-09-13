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
 * The DirectorBackendAllOf model module.
 * @module model/DirectorBackendAllOf
 * @version 7.9.0
 */
class DirectorBackendAllOf {
    /**
     * Constructs a new <code>DirectorBackendAllOf</code>.
     * @alias module:model/DirectorBackendAllOf
     */
    constructor() { 
        
        DirectorBackendAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DirectorBackendAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DirectorBackendAllOf} obj Optional instance to populate.
     * @return {module:model/DirectorBackendAllOf} The populated <code>DirectorBackendAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DirectorBackendAllOf();

            if (data.hasOwnProperty('backend_name')) {
                obj['backend_name'] = ApiClient.convertToType(data['backend_name'], 'String');
            }
            if (data.hasOwnProperty('director')) {
                obj['director'] = ApiClient.convertToType(data['director'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the backend.
 * @member {String} backend_name
 */
DirectorBackendAllOf.prototype['backend_name'] = undefined;

/**
 * Name for the Director.
 * @member {String} director
 */
DirectorBackendAllOf.prototype['director'] = undefined;






export default DirectorBackendAllOf;

