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
 * The TagGetExtra model module.
 * @module model/TagGetExtra
 * @version 15.0.0
 */
class TagGetExtra {
    /**
     * Constructs a new <code>TagGetExtra</code>.
     * @alias module:model/TagGetExtra
     * @param id {String} The unique identifier of the operation tag.
     */
    constructor(id) { 
        
        TagGetExtra.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>TagGetExtra</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagGetExtra} obj Optional instance to populate.
     * @return {module:model/TagGetExtra} The populated <code>TagGetExtra</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TagGetExtra();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * The unique identifier of the operation tag.
 * @member {String} id
 */
TagGetExtra.prototype['id'] = undefined;

/**
 * The number of operations associated with this operation tag.
 * @member {Number} count
 */
TagGetExtra.prototype['count'] = undefined;

/**
 * The date and time the operation tag was created.
 * @member {Date} created_at
 */
TagGetExtra.prototype['created_at'] = undefined;

/**
 * The date and time the operation tag was last updated.
 * @member {Date} updated_at
 */
TagGetExtra.prototype['updated_at'] = undefined;






export default TagGetExtra;

