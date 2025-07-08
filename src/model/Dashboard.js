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
import DashboardPropertyCreatedBy from './DashboardPropertyCreatedBy';
import DashboardPropertyUpdatedBy from './DashboardPropertyUpdatedBy';

/**
 * The Dashboard model module.
 * @module model/Dashboard
 * @version 12.1.0
 */
class Dashboard {
    /**
     * Constructs a new <code>Dashboard</code>.
     * @alias module:model/Dashboard
     */
    constructor() { 
        
        Dashboard.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Dashboard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Dashboard} obj Optional instance to populate.
     * @return {module:model/Dashboard} The populated <code>Dashboard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Dashboard();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [DashboardItem]);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = DashboardPropertyCreatedBy.constructFromObject(data['created_by']);
            }
            if (data.hasOwnProperty('updated_by')) {
                obj['updated_by'] = DashboardPropertyUpdatedBy.constructFromObject(data['updated_by']);
            }
        }
        return obj;
    }


}

/**
 * Dashboard identifier (UUID)
 * @member {String} id
 */
Dashboard.prototype['id'] = undefined;

/**
 * A human-readable name
 * @member {String} name
 */
Dashboard.prototype['name'] = undefined;

/**
 * A short description of the dashboard
 * @member {String} description
 */
Dashboard.prototype['description'] = undefined;

/**
 * A list of [dashboard items](#dashboard-item).
 * @member {Array.<module:model/DashboardItem>} items
 */
Dashboard.prototype['items'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Dashboard.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Dashboard.prototype['updated_at'] = undefined;

/**
 * @member {module:model/DashboardPropertyCreatedBy} created_by
 */
Dashboard.prototype['created_by'] = undefined;

/**
 * @member {module:model/DashboardPropertyUpdatedBy} updated_by
 */
Dashboard.prototype['updated_by'] = undefined;






export default Dashboard;

