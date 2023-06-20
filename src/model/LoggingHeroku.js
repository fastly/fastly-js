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
import LoggingCommon from './LoggingCommon';
import LoggingHerokuAllOf from './LoggingHerokuAllOf';

/**
 * The LoggingHeroku model module.
 * @module model/LoggingHeroku
 * @version 4.2.0
 */
class LoggingHeroku {
    /**
     * Constructs a new <code>LoggingHeroku</code>.
     * @alias module:model/LoggingHeroku
     * @implements module:model/LoggingCommon
     * @implements module:model/LoggingHerokuAllOf
     */
    constructor() { 
        LoggingCommon.initialize(this);LoggingHerokuAllOf.initialize(this);
        LoggingHeroku.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingHeroku</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingHeroku} obj Optional instance to populate.
     * @return {module:model/LoggingHeroku} The populated <code>LoggingHeroku</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingHeroku();
            LoggingCommon.constructFromObject(data, obj);
            LoggingHerokuAllOf.constructFromObject(data, obj);

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
        }
        return obj;
    }


}

/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingHeroku.prototype['name'] = undefined;

/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingHeroku.PlacementEnum} placement
 */
LoggingHeroku.prototype['placement'] = undefined;

/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingHeroku.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingHeroku.prototype['format_version'] = undefined;

/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingHeroku.prototype['response_condition'] = undefined;

/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingHeroku.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';

/**
 * The token to use for authentication ([https://devcenter.heroku.com/articles/add-on-partner-log-integration](https://devcenter.heroku.com/articles/add-on-partner-log-integration)).
 * @member {String} token
 */
LoggingHeroku.prototype['token'] = undefined;

/**
 * The URL to stream logs to.
 * @member {String} url
 */
LoggingHeroku.prototype['url'] = undefined;


// Implement LoggingCommon interface:
/**
 * The name for the real-time logging configuration.
 * @member {String} name
 */
LoggingCommon.prototype['name'] = undefined;
/**
 * Where in the generated VCL the logging call should be placed. If not set, endpoints with `format_version` of 2 are placed in `vcl_log` and those with `format_version` of 1 are placed in `vcl_deliver`. 
 * @member {module:model/LoggingCommon.PlacementEnum} placement
 */
LoggingCommon.prototype['placement'] = undefined;
/**
 * The version of the custom logging format used for the configured endpoint. The logging call gets placed by default in `vcl_log` if `format_version` is set to `2` and in `vcl_deliver` if `format_version` is set to `1`. 
 * @member {module:model/LoggingCommon.FormatVersionEnum} format_version
 * @default FormatVersionEnum.v2
 */
LoggingCommon.prototype['format_version'] = undefined;
/**
 * The name of an existing condition in the configured endpoint, or leave blank to always execute.
 * @member {String} response_condition
 */
LoggingCommon.prototype['response_condition'] = undefined;
/**
 * A Fastly [log format string](https://docs.fastly.com/en/guides/custom-log-formats).
 * @member {String} format
 * @default '%h %l %u %t "%r" %&gt;s %b'
 */
LoggingCommon.prototype['format'] = '%h %l %u %t "%r" %&gt;s %b';
// Implement LoggingHerokuAllOf interface:
/**
 * The token to use for authentication ([https://devcenter.heroku.com/articles/add-on-partner-log-integration](https://devcenter.heroku.com/articles/add-on-partner-log-integration)).
 * @member {String} token
 */
LoggingHerokuAllOf.prototype['token'] = undefined;
/**
 * The URL to stream logs to.
 * @member {String} url
 */
LoggingHerokuAllOf.prototype['url'] = undefined;



/**
 * Allowed values for the <code>placement</code> property.
 * @enum {String}
 * @readonly
 */
LoggingHeroku['PlacementEnum'] = {

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
LoggingHeroku['FormatVersionEnum'] = {

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



export default LoggingHeroku;

