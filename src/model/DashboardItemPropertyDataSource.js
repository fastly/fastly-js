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
import DashboardItemPropertyDataSourcePropertyConfig from './DashboardItemPropertyDataSourcePropertyConfig';

/**
 * The DashboardItemPropertyDataSource model module.
 * @module model/DashboardItemPropertyDataSource
 * @version 15.0.0-beta.4
 */
class DashboardItemPropertyDataSource {
    /**
     * Constructs a new <code>DashboardItemPropertyDataSource</code>.
     * [An object](#data-source) which describes the data to display.
     * @alias module:model/DashboardItemPropertyDataSource
     * @param type {module:model/DashboardItemPropertyDataSource.TypeEnum} The source of the data to display.
     * @param config {module:model/DashboardItemPropertyDataSourcePropertyConfig} 
     */
    constructor(type, config) { 
        
        DashboardItemPropertyDataSource.initialize(this, type, config);
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
     * Constructs a <code>DashboardItemPropertyDataSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DashboardItemPropertyDataSource} obj Optional instance to populate.
     * @return {module:model/DashboardItemPropertyDataSource} The populated <code>DashboardItemPropertyDataSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DashboardItemPropertyDataSource();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('config')) {
                obj['config'] = DashboardItemPropertyDataSourcePropertyConfig.constructFromObject(data['config']);
            }
        }
        return obj;
    }


}

/**
 * The source of the data to display.
 * @member {module:model/DashboardItemPropertyDataSource.TypeEnum} type
 */
DashboardItemPropertyDataSource.prototype['type'] = undefined;

/**
 * @member {module:model/DashboardItemPropertyDataSourcePropertyConfig} config
 */
DashboardItemPropertyDataSource.prototype['config'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
DashboardItemPropertyDataSource['TypeEnum'] = {

    /**
     * value: "stats.edge"
     * @const
     */
    "edge": "stats.edge",

    /**
     * value: "stats.domain"
     * @const
     */
    "domain": "stats.domain",

    /**
     * value: "stats.origin"
     * @const
     */
    "origin": "stats.origin"
};



export default DashboardItemPropertyDataSource;

