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
import DashboardItemPropertyDataSource from './DashboardItemPropertyDataSource';
import DashboardItemPropertyVisualization from './DashboardItemPropertyVisualization';

/**
 * The DashboardItem model module.
 * @module model/DashboardItem
 * @version 15.0.0-beta.1
 */
class DashboardItem {
    /**
     * Constructs a new <code>DashboardItem</code>.
     * A dashboard item. Typically a data visualization like a chart.
     * @alias module:model/DashboardItem
     * @param title {String} A human-readable title for the dashboard item
     * @param subtitle {String} A human-readable subtitle for the dashboard item. Often a description of the visualization.
     * @param data_source {module:model/DashboardItemPropertyDataSource} 
     * @param visualization {module:model/DashboardItemPropertyVisualization} 
     */
    constructor(title, subtitle, data_source, visualization) { 
        
        DashboardItem.initialize(this, title, subtitle, data_source, visualization);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title, subtitle, data_source, visualization) { 
        obj['title'] = title;
        obj['subtitle'] = subtitle;
        obj['data_source'] = data_source;
        obj['visualization'] = visualization;
    }

    /**
     * Constructs a <code>DashboardItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DashboardItem} obj Optional instance to populate.
     * @return {module:model/DashboardItem} The populated <code>DashboardItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DashboardItem();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('subtitle')) {
                obj['subtitle'] = ApiClient.convertToType(data['subtitle'], 'String');
            }
            if (data.hasOwnProperty('data_source')) {
                obj['data_source'] = DashboardItemPropertyDataSource.constructFromObject(data['data_source']);
            }
            if (data.hasOwnProperty('visualization')) {
                obj['visualization'] = DashboardItemPropertyVisualization.constructFromObject(data['visualization']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('span')) {
                obj['span'] = ApiClient.convertToType(data['span'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A human-readable title for the dashboard item
 * @member {String} title
 */
DashboardItem.prototype['title'] = undefined;

/**
 * A human-readable subtitle for the dashboard item. Often a description of the visualization.
 * @member {String} subtitle
 */
DashboardItem.prototype['subtitle'] = undefined;

/**
 * @member {module:model/DashboardItemPropertyDataSource} data_source
 */
DashboardItem.prototype['data_source'] = undefined;

/**
 * @member {module:model/DashboardItemPropertyVisualization} visualization
 */
DashboardItem.prototype['visualization'] = undefined;

/**
 * Dashboard item identifier (UUID)
 * @member {String} id
 */
DashboardItem.prototype['id'] = undefined;

/**
 * The number of columns for the dashboard item to span. Dashboards are rendered on a 12-column grid on \"desktop\" screen sizes.
 * @member {Number} span
 * @default 4
 */
DashboardItem.prototype['span'] = 4;






export default DashboardItem;

