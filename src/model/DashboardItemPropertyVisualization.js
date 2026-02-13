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
import DashboardItemPropertyVisualizationPropertyConfig from './DashboardItemPropertyVisualizationPropertyConfig';

/**
 * The DashboardItemPropertyVisualization model module.
 * @module model/DashboardItemPropertyVisualization
 * @version 15.0.0-beta.0
 */
class DashboardItemPropertyVisualization {
    /**
     * Constructs a new <code>DashboardItemPropertyVisualization</code>.
     * [An object](#visualization) which describes the data visualization to display. 
     * @alias module:model/DashboardItemPropertyVisualization
     * @param type {module:model/DashboardItemPropertyVisualization.TypeEnum} The type of visualization to display. 
     * @param config {module:model/DashboardItemPropertyVisualizationPropertyConfig} 
     */
    constructor(type, config) { 
        
        DashboardItemPropertyVisualization.initialize(this, type, config);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, config) { 
        obj['type'] = type;
        obj['config'] = config;
    }

    /**
     * Constructs a <code>DashboardItemPropertyVisualization</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DashboardItemPropertyVisualization} obj Optional instance to populate.
     * @return {module:model/DashboardItemPropertyVisualization} The populated <code>DashboardItemPropertyVisualization</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DashboardItemPropertyVisualization();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = DashboardItemPropertyVisualizationPropertyConfig.constructFromObject(data['config']);
            }
        }
        return obj;
    }


}

/**
 * The type of visualization to display. 
 * @member {module:model/DashboardItemPropertyVisualization.TypeEnum} type
 */
DashboardItemPropertyVisualization.prototype['type'] = undefined;

/**
 * @member {module:model/DashboardItemPropertyVisualizationPropertyConfig} config
 */
DashboardItemPropertyVisualization.prototype['config'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
DashboardItemPropertyVisualization['TypeEnum'] = {

    /**
     * value: "chart"
     * @const
     */
    "chart": "chart"
};



export default DashboardItemPropertyVisualization;

