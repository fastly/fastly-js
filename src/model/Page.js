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
 * The Page model module.
 * @module model/Page
 * @version 16.0.0
 */
class Page {
    /**
     * Constructs a new <code>Page</code>.
     * @alias module:model/Page
     */
    constructor() { 
        
        Page.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Page</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Page} obj Optional instance to populate.
     * @return {module:model/Page} The populated <code>Page</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Page();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
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
 * Unique page identifier
 * @member {String} id
 */
Page.prototype['id'] = undefined;

/**
 * Parent website ID
 * @member {String} website_id
 */
Page.prototype['website_id'] = undefined;

/**
 * Page name
 * @member {String} name
 */
Page.prototype['name'] = undefined;

/**
 * Page description
 * @member {String} description
 */
Page.prototype['description'] = undefined;

/**
 * Notification configurations for this page
 * @member {Array.<module:model/Notification>} notifications
 */
Page.prototype['notifications'] = undefined;

/**
 * URL paths to monitor
 * @member {Array.<String>} paths
 */
Page.prototype['paths'] = undefined;

/**
 * @member {Date} created_at
 */
Page.prototype['created_at'] = undefined;

/**
 * @member {Date} updated_at
 */
Page.prototype['updated_at'] = undefined;






export default Page;

