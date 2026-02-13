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
 * The IamServiceGroupAllOf model module.
 * @module model/IamServiceGroupAllOf
 * @version 15.0.0-beta.2
 */
class IamServiceGroupAllOf {
    /**
     * Constructs a new <code>IamServiceGroupAllOf</code>.
     * @alias module:model/IamServiceGroupAllOf
     */
    constructor() { 
        
        IamServiceGroupAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IamServiceGroupAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IamServiceGroupAllOf} obj Optional instance to populate.
     * @return {module:model/IamServiceGroupAllOf} The populated <code>IamServiceGroupAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IamServiceGroupAllOf();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('services_count')) {
                obj['services_count'] = ApiClient.convertToType(data['services_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Alphanumeric string identifying the service group.
 * @member {String} id
 */
IamServiceGroupAllOf.prototype['id'] = undefined;

/**
 * The type of the object.
 * @member {String} object
 */
IamServiceGroupAllOf.prototype['object'] = undefined;

/**
 * Name of the service group.
 * @member {String} name
 */
IamServiceGroupAllOf.prototype['name'] = undefined;

/**
 * Description of the service group.
 * @member {String} description
 */
IamServiceGroupAllOf.prototype['description'] = undefined;

/**
 * Number of services in the service group.
 * @member {Number} services_count
 */
IamServiceGroupAllOf.prototype['services_count'] = undefined;






export default IamServiceGroupAllOf;

