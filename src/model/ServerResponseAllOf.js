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
 * The ServerResponseAllOf model module.
 * @module model/ServerResponseAllOf
 * @version 12.1.0
 */
class ServerResponseAllOf {
    /**
     * Constructs a new <code>ServerResponseAllOf</code>.
     * @alias module:model/ServerResponseAllOf
     */
    constructor() { 
        
        ServerResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServerResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServerResponseAllOf} obj Optional instance to populate.
     * @return {module:model/ServerResponseAllOf} The populated <code>ServerResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServerResponseAllOf();

            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('pool_id')) {
                obj['pool_id'] = ApiClient.convertToType(data['pool_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} service_id
 */
ServerResponseAllOf.prototype['service_id'] = undefined;

/**
 * @member {String} id
 */
ServerResponseAllOf.prototype['id'] = undefined;

/**
 * @member {String} pool_id
 */
ServerResponseAllOf.prototype['pool_id'] = undefined;






export default ServerResponseAllOf;

