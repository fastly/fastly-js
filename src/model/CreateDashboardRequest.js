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
import DashboardItem from './DashboardItem';

/**
 * The CreateDashboardRequest model module.
 * @module model/CreateDashboardRequest
 * @version 15.0.0
 */
class CreateDashboardRequest {
    /**
     * Constructs a new <code>CreateDashboardRequest</code>.
     * @alias module:model/CreateDashboardRequest
     * @param name {String} A human-readable name
     */
    constructor(name) { 
        
        CreateDashboardRequest.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateDashboardRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateDashboardRequest} obj Optional instance to populate.
     * @return {module:model/CreateDashboardRequest} The populated <code>CreateDashboardRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateDashboardRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [DashboardItem]);
            }
        }
        return obj;
    }


}

/**
 * A human-readable name
 * @member {String} name
 */
CreateDashboardRequest.prototype['name'] = undefined;

/**
 * A short description of the dashboard
 * @member {String} description
 */
CreateDashboardRequest.prototype['description'] = undefined;

/**
 * A list of [dashboard items](#dashboard-item).
 * @member {Array.<module:model/DashboardItem>} items
 */
CreateDashboardRequest.prototype['items'] = undefined;






export default CreateDashboardRequest;

