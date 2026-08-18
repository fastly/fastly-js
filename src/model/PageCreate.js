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
import Notification from './Notification';

/**
 * The PageCreate model module.
 * @module model/PageCreate
 * @version 16.1.0
 */
class PageCreate {
    /**
     * Constructs a new <code>PageCreate</code>.
     * @alias module:model/PageCreate
     * @param website_id {String} 
     * @param name {String} 
     */
    constructor(website_id, name) { 
        
        PageCreate.initialize(this, website_id, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, website_id, name) { 
        obj['website_id'] = website_id;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>PageCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageCreate} obj Optional instance to populate.
     * @return {module:model/PageCreate} The populated <code>PageCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageCreate();

            if (data.hasOwnProperty('website_id')) {
                obj['website_id'] = ApiClient.convertToType(data['website_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('notifications')) {
                obj['notifications'] = ApiClient.convertToType(data['notifications'], [Notification]);
            }
            if (data.hasOwnProperty('paths')) {
                obj['paths'] = ApiClient.convertToType(data['paths'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} website_id
 */
PageCreate.prototype['website_id'] = undefined;

/**
 * @member {String} name
 */
PageCreate.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PageCreate.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/Notification>} notifications
 */
PageCreate.prototype['notifications'] = undefined;

/**
 * @member {Array.<String>} paths
 */
PageCreate.prototype['paths'] = undefined;






export default PageCreate;

