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

/**
 * The DashboardItemPropertyVisualizationPropertyConfig model module.
 * @module model/DashboardItemPropertyVisualizationPropertyConfig
 * @version 8.0.0
 */
class DashboardItemPropertyVisualizationPropertyConfig {
    /**
     * Constructs a new <code>DashboardItemPropertyVisualizationPropertyConfig</code>.
     * [Configuration options](#visualization-config) for the given visualization.
     * @alias module:model/DashboardItemPropertyVisualizationPropertyConfig
     * @param plot_type {module:model/DashboardItemPropertyVisualizationPropertyConfig.PlotTypeEnum} The type of chart to display. 
     */
    constructor(plot_type) { 
        
        DashboardItemPropertyVisualizationPropertyConfig.initialize(this, plot_type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, plot_type) { 
        obj['plot_type'] = plot_type;
    }

    /**
     * Constructs a <code>DashboardItemPropertyVisualizationPropertyConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DashboardItemPropertyVisualizationPropertyConfig} obj Optional instance to populate.
     * @return {module:model/DashboardItemPropertyVisualizationPropertyConfig} The populated <code>DashboardItemPropertyVisualizationPropertyConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DashboardItemPropertyVisualizationPropertyConfig();

            if (data.hasOwnProperty('plot_type')) {
                obj['plot_type'] = ApiClient.convertToType(data['plot_type'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('calculation_method')) {
                obj['calculation_method'] = ApiClient.convertToType(data['calculation_method'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The type of chart to display. 
 * @member {module:model/DashboardItemPropertyVisualizationPropertyConfig.PlotTypeEnum} plot_type
 */
DashboardItemPropertyVisualizationPropertyConfig.prototype['plot_type'] = undefined;

/**
 * (Optional) The units to use to format the data. 
 * @member {module:model/DashboardItemPropertyVisualizationPropertyConfig.FormatEnum} format
 * @default 'number'
 */
DashboardItemPropertyVisualizationPropertyConfig.prototype['format'] = undefined;

/**
 * (Optional) The aggregation function to apply to the dataset. 
 * @member {module:model/DashboardItemPropertyVisualizationPropertyConfig.CalculationMethodEnum} calculation_method
 */
DashboardItemPropertyVisualizationPropertyConfig.prototype['calculation_method'] = undefined;





/**
 * Allowed values for the <code>plot_type</code> property.
 * @enum {String}
 * @readonly
 */
DashboardItemPropertyVisualizationPropertyConfig['PlotTypeEnum'] = {

    /**
     * value: "line"
     * @const
     */
    "line": "line",

    /**
     * value: "bar"
     * @const
     */
    "bar": "bar",

    /**
     * value: "single-metric"
     * @const
     */
    "single-metric": "single-metric",

    /**
     * value: "donut"
     * @const
     */
    "donut": "donut"
};


/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
DashboardItemPropertyVisualizationPropertyConfig['FormatEnum'] = {

    /**
     * value: "number"
     * @const
     */
    "number": "number",

    /**
     * value: "bytes"
     * @const
     */
    "bytes": "bytes",

    /**
     * value: "percent"
     * @const
     */
    "percent": "percent",

    /**
     * value: "requests"
     * @const
     */
    "requests": "requests",

    /**
     * value: "responses"
     * @const
     */
    "responses": "responses",

    /**
     * value: "seconds"
     * @const
     */
    "seconds": "seconds",

    /**
     * value: "milliseconds"
     * @const
     */
    "milliseconds": "milliseconds",

    /**
     * value: "ratio"
     * @const
     */
    "ratio": "ratio",

    /**
     * value: "bitrate"
     * @const
     */
    "bitrate": "bitrate"
};


/**
 * Allowed values for the <code>calculation_method</code> property.
 * @enum {String}
 * @readonly
 */
DashboardItemPropertyVisualizationPropertyConfig['CalculationMethodEnum'] = {

    /**
     * value: "avg"
     * @const
     */
    "avg": "avg",

    /**
     * value: "sum"
     * @const
     */
    "sum": "sum",

    /**
     * value: "min"
     * @const
     */
    "min": "min",

    /**
     * value: "max"
     * @const
     */
    "max": "max",

    /**
     * value: "latest"
     * @const
     */
    "latest": "latest",

    /**
     * value: "p95"
     * @const
     */
    "p95": "p95"
};



export default DashboardItemPropertyVisualizationPropertyConfig;

