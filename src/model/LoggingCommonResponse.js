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
import LoggingCommonResponseAllOf from './LoggingCommonResponseAllOf';
import LoggingCommonResponseAllOf1 from './LoggingCommonResponseAllOf1';

/**
 * The LoggingCommonResponse model module.
 * @module model/LoggingCommonResponse
 * @version 15.0.0-beta.3
 */
class LoggingCommonResponse {
    /**
     * Constructs a new <code>LoggingCommonResponse</code>.
     * @alias module:model/LoggingCommonResponse
     * @implements module:model/LoggingCommonResponseAllOf
     * @implements module:model/LoggingCommonResponseAllOf1
     */
    constructor() { 
        LoggingCommonResponseAllOf.initialize(this);LoggingCommonResponseAllOf1.initialize(this);
        LoggingCommonResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingCommonResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingCommonResponse} obj Optional instance to populate.
     * @return {module:model/LoggingCommonResponse} The populated <code>LoggingCommonResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingCommonResponse();
            LoggingCommonResponseAllOf.constructFromObject(data, obj);
            LoggingCommonResponseAllOf1.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('placement')) {
                obj['placement'] = ApiClient.convertToType(data['placement'], 'String');
            }
            if (data.hasOwnProperty('response_condition')) {
                obj['response_condition'] = ApiClient.convertToType(data['response_condition'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('log_processing_region')) {
                obj['log_processing_region'] = ApiClient.convertToType(data['log_processing_region'], 'String');
            }
            if (data.hasOwnProperty('format_version')) {
                obj['format_version'] = ApiClient.convertToType(data['format_version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingCommonResponse.prototype['name'] = undefined;

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingCommonResponse.PlacementEnum} placement
 */
LoggingCommonResponse.prototype['placement'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingCommonResponse.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://www.fastly.com/documentation/guides/integrations/streaming-logs/custom-log-formats/).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingCommonResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';

/**
 * The geographic region where the logs will be processed before streaming. Valid values are `us`, `eu`, and `none` for global.
 * @member {module:model/LoggingCommonResponse.LogProcessingRegionEnum} log_processing_region
 * @default 'none'
 */
LoggingCommonResponse.prototype['log_processing_region'] = undefined;

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingCommonResponse.FormatVersionEnum} format_version
 * @default '2'
 */
LoggingCommonResponse.prototype['format_version'] = undefined;


// Implement LoggingCommonResponseAllOf interface:
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingCommonResponseAllOf.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingCommonResponseAllOf.PlacementEnum} placement
 */
LoggingCommonResponseAllOf.prototype['placement'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingCommonResponseAllOf.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://www.fastly.com/documentation/guides/integrations/streaming-logs/custom-log-formats/).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingCommonResponseAllOf.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * The geographic region where the logs will be processed before streaming. Valid values are `us`, `eu`, and `none` for global.
 * @member {module:model/LoggingCommonResponseAllOf.LogProcessingRegionEnum} log_processing_region
 * @default 'none'
 */
LoggingCommonResponseAllOf.prototype['log_processing_region'] = undefined;
// Implement LoggingCommonResponseAllOf1 interface:
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingCommonResponseAllOf1.FormatVersionEnum} format_version
 * @default '2'
 */
LoggingCommonResponseAllOf1.prototype['format_version'] = undefined;



/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */
LoggingCommonResponse['PlacementEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "null"
     * @const
     */
    "null": "null"
};


/**
 * Allowed values for the <code>log_processing_region</code> property.
 * @enum {String}
 * @readonly
 */
LoggingCommonResponse['LogProcessingRegionEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "eu"
     * @const
     */
    "eu": "eu",

    /**
     * value: "us"
     * @const
     */
    "us": "us"
};


/**
 * Allowed values for the <code>format_version</code> property.
 * @enum {String}
 * @readonly
 */
LoggingCommonResponse['FormatVersionEnum'] = {

    /**
     * value: "1"
     * @const
     */
    "v1": "1",

    /**
     * value: "2"
     * @const
     */
    "v2": "2"
};



export default LoggingCommonResponse;

