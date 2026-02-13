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
 * The LoggingGrafanacloudlogsAdditional model module.
 * @module model/LoggingGrafanacloudlogsAdditional
 * @version 15.0.0-beta.2
 */
class LoggingGrafanacloudlogsAdditional {
    /**
     * Constructs a new <code>LoggingGrafanacloudlogsAdditional</code>.
     * @alias module:model/LoggingGrafanacloudlogsAdditional
     */
    constructor() { 
        
        LoggingGrafanacloudlogsAdditional.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoggingGrafanacloudlogsAdditional</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoggingGrafanacloudlogsAdditional} obj Optional instance to populate.
     * @return {module:model/LoggingGrafanacloudlogsAdditional} The populated <code>LoggingGrafanacloudlogsAdditional</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoggingGrafanacloudlogsAdditional();

            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
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
        }
        return obj;
    }


}

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






export default LoggingGrafanacloudlogsAdditional;

