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
import TagBase from './TagBase';
import TagGetExtra from './TagGetExtra';

/**
 * The TagGet model module.
 * @module model/TagGet
 * @version 15.0.0-beta.0
 */
class TagGet {
    /**
     * Constructs a new <code>TagGet</code>.
     * @alias module:model/TagGet
     * @implements module:model/TagBase
     * @implements module:model/TagGetExtra
     * @param name {String} The name of the operation tag.
     * @param id {String} The unique identifier of the operation tag.
     */
    constructor(name, id) { 
        TagBase.initialize(this);TagGetExtra.initialize(this, id);
        TagGet.initialize(this, name, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, id) { 
        obj['name'] = name;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>TagGet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagGet} obj Optional instance to populate.
     * @return {module:model/TagGet} The populated <code>TagGet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TagGet();
            TagBase.constructFromObject(data, obj);
            TagGetExtra.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
 * The name of the operation tag.
 * @member {String} name
 */
TagGet.prototype['name'] = undefined;

/**
 * The unique identifier of the operation tag.
 * @member {String} id
 */
TagGet.prototype['id'] = undefined;

/**
 * A description of the operation tag.
 * @member {String} description
 */
TagGet.prototype['description'] = undefined;

/**
 * The number of operations associated with this operation tag.
 * @member {Number} count
 */
TagGet.prototype['count'] = undefined;

/**
 * The date and time the operation tag was created.
 * @member {Date} created_at
 */
TagGet.prototype['created_at'] = undefined;

/**
 * The date and time the operation tag was last updated.
 * @member {Date} updated_at
 */
TagGet.prototype['updated_at'] = undefined;


// Implement TagBase interface:
/**
 * The name of the operation tag.
 * @member {String} name
 */
TagBase.prototype['name'] = undefined;
/**
 * A description of the operation tag.
 * @member {String} description
 */
TagBase.prototype['description'] = undefined;
// Implement TagGetExtra interface:
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




export default TagGet;

