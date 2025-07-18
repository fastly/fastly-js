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
import LoggingCommonResponse from './LoggingCommonResponse';
import LoggingGrafanacloudlogsAdditional from './LoggingGrafanacloudlogsAdditional';
import ServiceIdAndVersionString from './ServiceIdAndVersionString';
import Timestamps from './Timestamps';

/**
 * The LoggingGrafanacloudlogsResponse model module.
 * @module model/LoggingGrafanacloudlogsResponse
 * @version 12.1.0
 */
class LoggingGrafanacloudlogsResponse {
    /**
     * Constructs a new <code>LoggingGrafanacloudlogsResponse</code>.
     * @alias module:model/LoggingGrafanacloudlogsResponse
     * @implements module:model/LoggingCommonResponse
     * @implements module:model/LoggingGrafanacloudlogsAdditional
     * @implements module:model/Timestamps
     * @implements module:model/ServiceIdAndVersionString
     */
    constructor() { 
        LoggingCommonResponse.initialize(this);LoggingGrafanacloudlogsAdditional.initialize(this);Timestamps.initialize(this);ServiceIdAndVersionString.initialize(this);
        LoggingGrafanacloudlogsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingGrafanacloudlogsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingGrafanacloudlogsResponse} obj Optional instance to populate.
     * @return {module:model/LoggingGrafanacloudlogsResponse} The populated <code>LoggingGrafanacloudlogsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingGrafanacloudlogsResponse();
            LoggingCommonResponse.constructFromObject(data, obj);
            LoggingGrafanacloudlogsAdditional.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ServiceIdAndVersionString.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('deleted_at')) {
                obj['deleted_at'] = ApiClient.convertToType(data['deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingGrafanacloudlogsResponse.prototype['name'] = undefined;

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingGrafanacloudlogsResponse.PlacementEnum} placement
 */
LoggingGrafanacloudlogsResponse.prototype['placement'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingGrafanacloudlogsResponse.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://www.fastly.com/documentation/guides/integrations/streaming-logs/custom-log-formats/).
 * @member {String} format
 */
LoggingGrafanacloudlogsResponse.prototype['format'] = undefined;

/**
 * The geographic region where the logs will be processed before streaming. Valid values are `us`, `eu`, and `none` for global.
 * @member {module:model/LoggingGrafanacloudlogsResponse.LogProcessingRegionEnum} log_processing_region
 * @default 'none'
 */
LoggingGrafanacloudlogsResponse.prototype['log_processing_region'] = undefined;

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingGrafanacloudlogsResponse.FormatVersionEnum} format_version
 * @default '2'
 */
LoggingGrafanacloudlogsResponse.prototype['format_version'] = undefined;

/**
 * The Grafana Cloud Logs Dataset you want to log to.
 * @member {String} user
 */
LoggingGrafanacloudlogsResponse.prototype['user'] = undefined;

/**
 * The URL of the Loki instance in your Grafana stack.
 * @member {String} url
 */
LoggingGrafanacloudlogsResponse.prototype['url'] = undefined;

/**
 * The Grafana Access Policy token with `logs:write` access scoped to your Loki instance.
 * @member {String} token
 */
LoggingGrafanacloudlogsResponse.prototype['token'] = undefined;

/**
 * The Stream Labels, a JSON string used to identify the stream.
 * @member {String} index
 */
LoggingGrafanacloudlogsResponse.prototype['index'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
LoggingGrafanacloudlogsResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
LoggingGrafanacloudlogsResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
LoggingGrafanacloudlogsResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
LoggingGrafanacloudlogsResponse.prototype['service_id'] = undefined;

/**
 * @member {String} version
 */
LoggingGrafanacloudlogsResponse.prototype['version'] = undefined;


// Implement LoggingCommonResponse interface:
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
// Implement LoggingGrafanacloudlogsAdditional interface:
/**
 * A Fastly [log format string](https://www.fastly.com/documentation/guides/integrations/streaming-logs/custom-log-formats/).
 * @member {String} format
 */
LoggingGrafanacloudlogsAdditional.prototype['format'] = undefined;
/**
 * The Grafana Cloud Logs Dataset you want to log to.
 * @member {String} user
 */
LoggingGrafanacloudlogsAdditional.prototype['user'] = undefined;
/**
 * The URL of the Loki instance in your Grafana stack.
 * @member {String} url
 */
LoggingGrafanacloudlogsAdditional.prototype['url'] = undefined;
/**
 * The Grafana Access Policy token with `logs:write` access scoped to your Loki instance.
 * @member {String} token
 */
LoggingGrafanacloudlogsAdditional.prototype['token'] = undefined;
/**
 * The Stream Labels, a JSON string used to identify the stream.
 * @member {String} index
 */
LoggingGrafanacloudlogsAdditional.prototype['index'] = undefined;
// Implement Timestamps interface:
/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
Timestamps.prototype['created_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
Timestamps.prototype['deleted_at'] = undefined;
/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
Timestamps.prototype['updated_at'] = undefined;
// Implement ServiceIdAndVersionString interface:
/**
 * @member {String} service_id
 */
ServiceIdAndVersionString.prototype['service_id'] = undefined;
/**
 * @member {String} version
 */
ServiceIdAndVersionString.prototype['version'] = undefined;



/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */
LoggingGrafanacloudlogsResponse['PlacementEnum'] = {

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
LoggingGrafanacloudlogsResponse['LogProcessingRegionEnum'] = {

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
LoggingGrafanacloudlogsResponse['FormatVersionEnum'] = {

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



export default LoggingGrafanacloudlogsResponse;

