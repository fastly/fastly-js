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
 * The PageUpdate model module.
 * @module model/PageUpdate
 * @version 16.1.0
 */
class PageUpdate {
    /**
     * Constructs a new <code>PageUpdate</code>.
     * @alias module:model/PageUpdate
     */
    constructor() { 
        
        PageUpdate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PageUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageUpdate} obj Optional instance to populate.
     * @return {module:model/PageUpdate} The populated <code>PageUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageUpdate();

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
PageUpdate.prototype['website_id'] = undefined;

/**
 * @member {String} name
 */
PageUpdate.prototype['name'] = undefined;

/**
 * @member {String} description
 */
PageUpdate.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/Notification>} notifications
 */
PageUpdate.prototype['notifications'] = undefined;

/**
 * @member {Array.<String>} paths
 */
PageUpdate.prototype['paths'] = undefined;






export default PageUpdate;

