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
import IamServiceGroupAllOf from './IamServiceGroupAllOf';
import TimestampsNoDelete from './TimestampsNoDelete';

/**
 * The IamServiceGroup model module.
 * @module model/IamServiceGroup
 * @version 3.0.0
 */
class IamServiceGroup {
    /**
     * Constructs a new <code>IamServiceGroup</code>.
     * @alias module:model/IamServiceGroup
     * @implements module:model/TimestampsNoDelete
     * @implements module:model/IamServiceGroupAllOf
     */
    constructor() { 
        TimestampsNoDelete.initialize(this);IamServiceGroupAllOf.initialize(this);
        IamServiceGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IamServiceGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IamServiceGroup} obj Optional instance to populate.
     * @return {module:model/IamServiceGroup} The populated <code>IamServiceGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IamServiceGroup();
            TimestampsNoDelete.constructFromObject(data, obj);
            IamServiceGroupAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
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
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
IamServiceGroup.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
IamServiceGroup.prototype['updated_at'] = undefined;

/**
 * Alphanumeric string identifying the service group.
 * @member {String} id
 */
IamServiceGroup.prototype['id'] = undefined;

/**
 * The type of the object.
 * @member {String} object
 */
IamServiceGroup.prototype['object'] = undefined;

/**
 * Name of the service group.
 * @member {String} name
 */
IamServiceGroup.prototype['name'] = undefined;

/**
 * Description of the service group.
 * @member {String} description
 */
IamServiceGroup.prototype['description'] = undefined;

/**
 * Number of services in the service group.
 * @member {Number} services_count
 */
IamServiceGroup.prototype['services_count'] = undefined;


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
// Implement IamServiceGroupAllOf interface:
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




export default IamServiceGroup;

