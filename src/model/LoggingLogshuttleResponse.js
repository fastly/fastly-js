/**
 * Fastly API
 * Via the Fastly API you can perform any of the operations that are possible within the management console,  including creating services, domains, and backends, configuring rules or uploading your own application code, as well as account operations such as user administration and billing reports. The API is organized into collections of endpoints that allow manipulation of objects related to Fastly services and accounts. For the most accurate and up-to-date API reference content, visit our [Developer Hub](https://developer.fastly.com/reference/api/) 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: oss@fastly.com
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import LoggingLogshuttle from './LoggingLogshuttle';
import ServiceIdAndVersion from './ServiceIdAndVersion';
import Timestamps from './Timestamps';

/**
 * The LoggingLogshuttleResponse model module.
 * @module model/LoggingLogshuttleResponse
 * @version 4.3.0
 */
class LoggingLogshuttleResponse {
    /**
     * Constructs a new <code>LoggingLogshuttleResponse</code>.
     * @alias module:model/LoggingLogshuttleResponse
     * @implements module:model/LoggingLogshuttle
     * @implements module:model/Timestamps
     * @implements module:model/ServiceIdAndVersion
     */
    constructor() { 
        LoggingLogshuttle.initialize(this);Timestamps.initialize(this);ServiceIdAndVersion.initialize(this);
        LoggingLogshuttleResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingLogshuttleResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingLogshuttleResponse} obj Optional instance to populate.
     * @return {module:model/LoggingLogshuttleResponse} The populated <code>LoggingLogshuttleResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingLogshuttleResponse();
            LoggingLogshuttle.constructFromObject(data, obj);
            Timestamps.constructFromObject(data, obj);
            ServiceIdAndVersion.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('placement')) {
                obj['placement'] = ApiClient.convertToType(data['placement'], 'String');
            }
            if (data.hasOwnProperty('format_version')) {
                obj['format_version'] = ApiClient.convertToType(data['format_version'], 'Number');
            }
            if (data.hasOwnProperty('response_condition')) {
                obj['response_condition'] = ApiClient.convertToType(data['response_condition'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
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
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingLogshuttleResponse.prototype['name'] = undefined;

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingLogshuttleResponse.PlacementEnum} placement
 */
LoggingLogshuttleResponse.prototype['placement'] = undefined;

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingLogshuttleResponse.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingLogshuttleResponse.prototype['format_version'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingLogshuttleResponse.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingLogshuttleResponse.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';

/**
 * The data authentication token associated with this endpoint.
 * @member {String} token
 */
LoggingLogshuttleResponse.prototype['token'] = undefined;

/**
 * The URL to stream logs to.
 * @member {String} url
 */
LoggingLogshuttleResponse.prototype['url'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} created_at
 */
LoggingLogshuttleResponse.prototype['created_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} deleted_at
 */
LoggingLogshuttleResponse.prototype['deleted_at'] = undefined;

/**
 * Date and time in ISO 8601 format.
 * @member {Date} updated_at
 */
LoggingLogshuttleResponse.prototype['updated_at'] = undefined;

/**
 * @member {String} service_id
 */
LoggingLogshuttleResponse.prototype['service_id'] = undefined;

/**
 * @member {Number} version
 */
LoggingLogshuttleResponse.prototype['version'] = undefined;


// Implement LoggingLogshuttle interface:
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingLogshuttle.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingLogshuttle.PlacementEnum} placement
 */
LoggingLogshuttle.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingLogshuttle.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingLogshuttle.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingLogshuttle.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingLogshuttle.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
/**
 * The data authentication token associated with this endpoint.
 * @member {String} token
 */
LoggingLogshuttle.prototype['token'] = undefined;
/**
 * The URL to stream logs to.
 * @member {String} url
 */
LoggingLogshuttle.prototype['url'] = undefined;
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
// Implement ServiceIdAndVersion interface:
/**
 * @member {String} service_id
 */
ServiceIdAndVersion.prototype['service_id'] = undefined;
/**
 * @member {Number} version
 */
ServiceIdAndVersion.prototype['version'] = undefined;



/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */
LoggingLogshuttleResponse['PlacementEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "waf_debug"
     * @const
     */
    "waf_debug": "waf_debug",

    /**
     * value: "null"
     * @const
     */
    "null": "null"
};


/**
 * Allowed values for the <code>format_version</code> property.
 * @enum {Number}
 * @readonly
 */
LoggingLogshuttleResponse['FormatVersionEnum'] = {

    /**
     * value: 1
     * @const
     */
    "v1": 1,

    /**
     * value: 2
     * @const
     */
    "v2": 2
};



export default LoggingLogshuttleResponse;

