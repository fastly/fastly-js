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
 * The UpdateDashboardRequest model module.
 * @module model/UpdateDashboardRequest
 * @version 12.0.0
 */
class UpdateDashboardRequest {
    /**
     * Constructs a new <code>UpdateDashboardRequest</code>.
     * @alias module:model/UpdateDashboardRequest
     */
    constructor() { 
        
        UpdateDashboardRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateDashboardRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateDashboardRequest} obj Optional instance to populate.
     * @return {module:model/UpdateDashboardRequest} The populated <code>UpdateDashboardRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateDashboardRequest();

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
UpdateDashboardRequest.prototype['name'] = undefined;

/**
 * A short description of the dashboard
 * @member {String} description
 */
UpdateDashboardRequest.prototype['description'] = undefined;

/**
 * A list of [dashboard items](#dashboard-item).
 * @member {Array.<module:model/DashboardItem>} items
 */
UpdateDashboardRequest.prototype['items'] = undefined;






export default UpdateDashboardRequest;

